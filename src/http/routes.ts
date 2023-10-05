import { FastifyInstance } from 'fastify'
import { RegisterController } from './controllers/RegisterController'
import { AuthenticateController } from './controllers/AuthenticateController'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', RegisterController)
  app.post('/sessions', AuthenticateController)
}
