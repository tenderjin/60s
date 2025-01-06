import type { Middleware } from '@oak/oak'

export function debug(): Middleware {
  return async (ctx, next) => {
    const ua = ctx.request.headers.get('user-agent') || 'Unknown'
    const ip = ctx.request.ip || 'Unknown'
    const date = new Date().toLocaleString('zh-CN')

    console.log(`[${date}] [${ip}] [${ua}] ${ctx.request.url.href}`)

    await next()
  }
}
