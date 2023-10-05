import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryUsersRepository } from '@/repositories/inMemory/inMemoryUsersRepository'
import { AuthenticateService } from './AuthenticateService'
import { hash } from 'bcryptjs'
import { InvalidCredentialsError } from './errors/InvalidCredentialsError'

let inMemoryUsersRepository: InMemoryUsersRepository
let sut: AuthenticateService

describe('Authenticate Service', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()
    sut = new AuthenticateService(inMemoryUsersRepository)
  })
  it('Should be able to authenticate', async () => {
    await inMemoryUsersRepository.create({
      name: 'User test',
      email: 'usertest@gmail.com',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.execute({
      email: 'usertest@gmail.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('Should not be able to wrong email', async () => {
    const inMemoryUsersRepository = new InMemoryUsersRepository()
    const sut = new AuthenticateService(inMemoryUsersRepository)

    await expect(() =>
      sut.execute({
        email: 'usertest@gmail.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })

  it('Should not be able to wrong password', async () => {
    const inMemoryUsersRepository = new InMemoryUsersRepository()
    const sut = new AuthenticateService(inMemoryUsersRepository)

    await inMemoryUsersRepository.create({
      name: 'User test',
      email: 'usertest@gmail.com',
      password_hash: await hash('123456', 6),
    })

    await expect(() =>
      sut.execute({
        email: 'usertest@gmail.com',
        password: '1234444',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})
