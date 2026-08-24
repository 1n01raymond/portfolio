import type { NextConfig } from 'next'

// GitHub Pages 병행 배포 시 서브패스(/portfolio) 분기.
// DEPLOY_TARGET=gh-pages npm run build → 1n01raymond.github.io/portfolio/
const isPages = process.env.DEPLOY_TARGET === 'gh-pages'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isPages ? '/portfolio' : '',
  assetPrefix: isPages ? '/portfolio/' : '',
  images: { unoptimized: true },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isPages ? '/portfolio' : '',
  },
}

export default nextConfig
