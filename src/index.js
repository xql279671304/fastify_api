// 打开日志
const fastify = require('fastify')({
  logger: true
})

const mongoose = require('mongoose')

// 连接数据库，没有库mycargarage，会自动创建
mongoose.connect('mongodb://127.0.0.1:27000/mycargarage').then(() => {
  console.log('MongoDB connected……')
}).catch(err => {
  console.log(err)
})

// 创建swagger
const swagger = require('./config/swagger')
fastify.register(require('fastify-swagger'), swagger.options)

// 路由
const routes = require('./routes')
routes.forEach((route, index) => {
  fastify.route(route)
})

const start = async () => {
  try {
    await fastify.listen(3001)
    fastify.swagger()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}



start()
