/**
 * 와이어 오브젝트 WebGPU 경로. 버퍼 스키마는 typegpu 로 선언해
 * 정렬·직렬화를 라이브러리에 맡기고, 파이프라인은 스테이지 visibility 를
 * 명시하려고 raw WebGPU 로 배선합니다. WGSL 은 wire-shaders.ts.
 */
import tgpu from 'typegpu'
import * as d from 'typegpu/data'
import { expandToLineList, torusKnotWire } from './wire-geometry'
import { wireWGSL } from './wire-shaders'
import type { WireBackend, WireState } from './types'

const Uniforms = d.struct({
  angleX: d.f32,
  angleY: d.f32,
  angleZ: d.f32,
  aspect: d.f32,
  fade: d.f32,
})

export async function createWebGPUWire(canvas: HTMLCanvasElement): Promise<WireBackend> {
  const root = await tgpu.init()
  const device = root.device

  const context = canvas.getContext('webgpu')
  if (!context) throw new Error('no webgpu context')
  const format = navigator.gpu.getPreferredCanvasFormat()
  // 프리멀티플라이드 알파 — 캔버스 뒤로 페이지 배경이 그대로 비칩니다
  context.configure({ device, format, alphaMode: 'premultiplied' })

  const flat = expandToLineList(torusKnotWire())
  const vertexCount = flat.length / 4
  const initial = Array.from({ length: vertexCount }, (_, i) =>
    d.vec4f(flat[i * 4], flat[i * 4 + 1], flat[i * 4 + 2], 1),
  )

  const vertexBuffer = root
    .createBuffer(d.arrayOf(d.vec4f, vertexCount), initial)
    .$usage('storage')
  const uniformBuffer = root.createBuffer(Uniforms).$usage('uniform')

  const bgl = device.createBindGroupLayout({
    entries: [
      {
        binding: 0,
        visibility: GPUShaderStage.VERTEX,
        buffer: { type: 'read-only-storage' },
      },
      {
        binding: 1,
        visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
        buffer: { type: 'uniform' },
      },
    ],
  })

  const bindGroup = device.createBindGroup({
    layout: bgl,
    entries: [
      { binding: 0, resource: { buffer: root.unwrap(vertexBuffer) } },
      { binding: 1, resource: { buffer: root.unwrap(uniformBuffer) } },
    ],
  })

  const shaderModule = device.createShaderModule({ code: wireWGSL })
  const pipeline = device.createRenderPipeline({
    layout: device.createPipelineLayout({ bindGroupLayouts: [bgl] }),
    vertex: { module: shaderModule, entryPoint: 'vs_main' },
    fragment: {
      module: shaderModule,
      entryPoint: 'fs_main',
      targets: [
        {
          format,
          blend: {
            color: { srcFactor: 'one', dstFactor: 'one-minus-src-alpha', operation: 'add' },
            alpha: { srcFactor: 'one', dstFactor: 'one-minus-src-alpha', operation: 'add' },
          },
        },
      ],
    },
    primitive: { topology: 'line-list' },
  })

  let aspect = 1
  let destroyed = false

  return {
    resize(w: number, h: number) {
      aspect = Math.max(w, 1) / Math.max(h, 1)
    },

    frame(s: WireState) {
      if (destroyed) return
      uniformBuffer.write({
        angleX: s.angleX,
        angleY: s.angleY,
        angleZ: s.angleZ,
        aspect,
        fade: s.fade,
      })

      const encoder = device.createCommandEncoder()
      const pass = encoder.beginRenderPass({
        colorAttachments: [
          {
            view: context.getCurrentTexture().createView(),
            clearValue: { r: 0, g: 0, b: 0, a: 0 },
            loadOp: 'clear',
            storeOp: 'store',
          },
        ],
      })
      pass.setPipeline(pipeline)
      pass.setBindGroup(0, bindGroup)
      pass.draw(vertexCount)
      pass.end()
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
