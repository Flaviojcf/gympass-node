import { IUsersRepository } from '@/repositories/interfaces/IUsersRepository'
import { InvalidCredentialsError } from '../../errors/InvalidCredentialsError'
import { compare } from 'bcryptjs'
import { User } from '@prisma/client'

interface IAuthenticateServiceRequest {
  email: string
  password: string
}

interface IAuthenticateServiceResponse {
  user: User
}

export class AuthenticateService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    email,
    password,
  }: IAuthenticateServiceRequest): Promise<IAuthenticateServiceResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new InvalidCredentialsError()
    }

    const doesPAsswordMatches = await compare(password, user.password_hash)

    if (!doesPAsswordMatches) {
      throw new InvalidCredentialsError()
    }

    return {
      user,
    }
  }
}
