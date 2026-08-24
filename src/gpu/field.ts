/**
 * WebGPU 경로. typegpu로 버퍼 스키마를 타입 안전하게 선언하고
 * (직렬화·정렬을 라이브러리가 보장), 파이프라인·바인드그룹은 스테이지별
 * visibility를 명시하기 위해 raw WebGPU로 배선합니다. WGSL은 shaders.ts.
 */
import tgpu from 'typegpu'
import * as d from 'typegpu/data'
import { computeWGSL, renderWGSL } from './shaders'
import type { FieldBackend, FieldState } from './types'

const Particle = d.struct({
  pos: d.vec2f,
  vel: d.vec2f,
  age: d.f32,
  life: d.f32,
})

const Uniforms = d.struct({
  time: d.f32,
  dt: d.f32,
  resolution: d.vec2f,
  pointer: d.vec2f,
  pointerStrength: d.f32,
  scroll: d.f32,
  count: d.f32,
  _pad: d.f32,
})

const BG = { r: 10 / 255, g: 11 / 255, b: 13 / 255, a: 1 } // --bg #0A0B0D

export async function createWebGPUField(
  canvas: HTMLCanvasElement,
  maxCount: number,
): Promise<FieldBackend> {
  const root = await tgpu.init()
  const device = root.device

  const context = canvas.getContext('webgpu')
  if (!context) throw new Error('no webgpu context')
  const format = navigator.gpu.getPreferredCanvasFormat()
  context.configure({ device, format, alphaMode: 'opaque' })

  // WebGPU 버퍼는 0으로 초기화됩니다 → age 0 → 첫 컴퓨트 패스에서 전원 스폰.
  const particleBuffer = root
    .createBuffer(d.arrayOf(Particle, maxCount))
    .$usage('storage')
  const uniformBuffer = root.createBuffer(Uniforms).$usage('uniform')

  const rawParticles = root.unwrap(particleBuffer)
  const rawUniforms = root.unwrap(uniformBuffer)

  const computeBGL = device.createBindGroupLayout({
    entries: [
      { binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },
      { binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' } },
    ],
  })
  const renderBGL = device.createBindGroupLayout({
    entries: [
      { binding: 0, visibility: GPUShaderStage.VERTEX, buffer: { type: 'read-only-storage' } },
      { binding: 1, visibility: GPUShaderStage.VERTEX, buffer: { type: 'uniform' } },
    ],
  })

  const computeBG = device.createBindGroup({
    layout: computeBGL,
    entries: [
      { binding: 0, resource: { buffer: rawParticles } },
      { binding: 1, resource: { buffer: rawUniforms } },
    ],
  })
  const renderBG = device.createBindGroup({
    layout: renderBGL,
    entries: [
      { binding: 0, resource: { buffer: rawParticles } },
      { binding: 1, resource: { buffer: rawUniforms } },
    ],
  })

  const computeModule = device.createShaderModule({ code: computeWGSL })
  const renderModule = device.createShaderModule({ code: renderWGSL })

  const computePipeline = device.createComputePipeline({
    layout: device.createPipelineLayout({ bindGroupLayouts: [computeBGL] }),
    compute: { module: computeModule, entryPoint: 'cs_main' },
  })

  const renderPipeline = device.createRenderPipeline({
    layout: device.createPipelineLayout({ bindGroupLayouts: [renderBGL] }),
    vertex: { module: renderModule, entryPoint: 'vs_main' },
    fragment: {
      module: renderModule,
      entryPoint: 'fs_main',
      targets: [
        {
          format,
          blend: {
            // 가산 블렌딩 — 어두운 배경 위에 빛이 쌓입니다
            color: { srcFactor: 'one', dstFactor: 'one', operation: 'add' },
            alpha: { srcFactor: 'one', dstFactor: 'one', operation: 'add' },
          },
        },
      ],
    },
    primitive: { topology: 'triangle-list' },
  })

  let width = canvas.width
  let height = canvas.height
  let activeCount = maxCount
  let destroyed = false

  return {
    maxCount,

    resize(w: number, h: number) {
      width = w
      height = h
    },

    setCount(n: number) {
      activeCount = Math.max(1, Math.min(maxCount, Math.floor(n)))
    },

    frame(dt: number, s: FieldState) {
      if (destroyed) return
      uniformBuffer.write({
        time: s.time,
        dt,
        resolution: d.vec2f(width, height),
        pointer: d.vec2f(s.pointerX, s.pointerY),
        pointerStrength: s.pointerStrength,
        scroll: s.scroll,
        count: activeCount,
        _pad: 0,
      })

      const encoder = device.createCommandEncoder()

      const compute = encoder.beginComputePass()
      compute.setPipeline(computePipeline)
      compute.setBindGroup(0, computeBG)
      compute.dispatchWorkgroups(Math.ceil(activeCount / 64))
      compute.end()

      const view = context.getCurrentTexture().createView()
      const render = encoder.beginRenderPass({
        colorAttachments: [{ view, clearValue: BG, loadOp: 'clear', storeOp: 'store' }],
      })
      render.setPipeline(renderPipeline)
      render.setBindGroup(0, renderBG)
      render.draw(6, activeCount)
      render.end()

      device.queue.submit([encoder.finish()])
    },

    destroy() {
      destroyed = true
      try {
        context.unconfigure()
      } catch {
        /* ignore */
      }
      root.destroy()
    },
  }
}
