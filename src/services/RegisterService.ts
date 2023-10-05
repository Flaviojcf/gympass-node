import { IUsersRepository } from '@/repositories/interfaces/IUsersRepository'
import { hash } from 'bcryptjs'
import { UserAlreadyExistsError } from './errors/UserAlreadyExistsError'

interface IRegisterService {
  name: string
  email: string
  password: string
}

export class RegisterService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ email, name, password }: IRegisterService) {
    const password_hash = await hash(password, 6)

    const existUserWithSameEmail = await this.usersRepository.findByEmail(email)

    if (existUserWithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    await this.usersRepository.create({
      name,
      email,
      password_hash,
    })
  }
}
