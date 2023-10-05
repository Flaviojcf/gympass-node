import { FastifyInstance } from 'fastify'
import { RegisterController } from './controllers/RegisterController'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', RegisterController)
}
