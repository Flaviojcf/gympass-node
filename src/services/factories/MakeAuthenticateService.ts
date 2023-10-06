import { PrismaUsersRepository } from '@/repositories/prisma/PrismaUsersRepository'
import { AuthenticateService } from '../AuthenticateService'

export function MakeAuthenticateService() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const authenticateService = new AuthenticateService(prismaUsersRepository)

  return authenticateService
}
