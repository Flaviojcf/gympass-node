import { InvalidCredentialsError } from '@/errors/InvalidCredentialsError'
import { MakeAuthenticateService } from '@/services/factories/MakeAuthenticateService'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function AuthenticateController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const authenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { email, password } = authenticateBodySchema.parse(request.body)

  try {
    const authenticateService = MakeAuthenticateService()
    await authenticateService.execute({ email, password })
  } catch (err) {
    if (err instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: err.message })
    }
    throw err
  }

  return reply.status(200).send()
}
