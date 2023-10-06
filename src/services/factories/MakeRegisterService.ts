import { PrismaUsersRepository } from '@/repositories/prisma/PrismaUsersRepository'
import { RegisterService } from '../RegisterService'

export function MakeRegisterService() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const registerService = new RegisterService(prismaUsersRepository)
  return registerService
}
