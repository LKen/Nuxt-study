const path = require('path')
const Koa = require('koa')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const session = require('koa-session')
const logger = require('koa-logger') // 控制日志在控制台输出
const routers = require('./routes')

const app = new Koa()

app.keys = ['gosunyun']

const CONFIG = {
  key: 'koa:sess',
  maxAge: 86400000,
  autoCommit: true /** (boolean) automatically commit headers (default true) */,
  overwrite: true /** (boolean) can overwrite or not (default true) */,
  httpOnly: true /** 是否设置HttpOnly，如果在Cookie中设置了"HttpOnly"属性，那么通过程序(JS脚本、Applet等)将无法读取到Cookie信息，这样能有效的防止XSS攻击 */,
  rolling: true /** 是否每次响应时刷新Session的有效期 */,
  renew: false /** 是否在Session快过期时刷新Session的有效期 */,
  signed: false
}

onerror(app)

app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text']
  })
)
app.use(json())
app.use(logger())
app.use(require('koa-static')(path.join(__dirname, '../static')))

app.use(session(CONFIG, app))

app.use(routers.routes(), routers.allowedMethods())

console.log('create api server')
// Export koa app
module.exports = app.callback()

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
