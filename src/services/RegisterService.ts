import { User } from '@prisma/client'
import { IUsersRepository } from '@/repositories/interfaces/IUsersRepository'
import { hash } from 'bcryptjs'
import { UserAlreadyExistsError } from './errors/UserAlreadyExistsError'

interface IRegisterService {
  name: string
  email: string
  password: string
}

interface IRegisterServiceResponse {
  user: User
}

export class RegisterService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    email,
    name,
    password,
  }: IRegisterService): Promise<IRegisterServiceResponse> {
    const password_hash = await hash(password, 6)

    const existUserWithSameEmail = await this.usersRepository.findByEmail(email)

    if (existUserWithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password_hash,
    })
    return {
      user,
    }
  }
}
