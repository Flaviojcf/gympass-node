import { beforeEach, describe, expect, it } from 'vitest'
import { RegisterService } from './RegisterService'
import { compare } from 'bcryptjs'
import { InMemoryUsersRepository } from '@/repositories/inMemory/inMemoryUsersRepository'
import { UserAlreadyExistsError } from '../../errors/UserAlreadyExistsError'

let inMemoryUsersRepository: InMemoryUsersRepository
let sut: RegisterService

describe('Register Service', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()
    sut = new RegisterService(inMemoryUsersRepository)
  })

  it('Should hash user password upon registration', async () => {
    const { user } = await sut.execute({
      name: 'User test',
      email: 'usertest@gmail.com',
      password: '123456',
    })

    const isPasswordCorrectlyHashed = await compare(
      '123456',
      user.password_hash,
    )

    expect(isPasswordCorrectlyHashed).toBe(true)
  })

  it('Should not be able to register with same email twice', async () => {
    const email = 'usertest@gmail.com'

    await sut.execute({
      name: 'User test',
      email,
      password: '123456',
    })

    await expect(() =>
      sut.execute({
        name: 'User test',
        email,
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })

  it('Should be able to register', async () => {
    const { user } = await sut.execute({
      name: 'User test',
      email: 'usertest@gmail.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })
})
