import { PrismaUsersRepository } from '@/repositories/prisma/PrismaUsersRepository'
import { RegisterService } from '../Register/RegisterService'

export function MakeRegisterService() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const registerService = new RegisterService(prismaUsersRepository)
  return registerService
}
