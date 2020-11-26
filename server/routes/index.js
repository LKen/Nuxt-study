const router = require('koa-router')()
const robot = require('./robot')

router.use(robot.routes())

module.exports = router
