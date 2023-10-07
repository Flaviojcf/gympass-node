import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryUsersRepository } from '@/repositories/inMemory/inMemoryUsersRepository'
import { hash } from 'bcryptjs'
import { ResourceNotFoundError } from '@/errors/ResourceNotFoundError'
import { GetUserProfileService } from './GetUserProfileService'

let inMemoryUsersRepository: InMemoryUsersRepository
let sut: GetUserProfileService

describe('Get User Profile Service', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()
    sut = new GetUserProfileService(inMemoryUsersRepository)
  })
  it('Should be able to get user profile', async () => {
    const createdUser = await inMemoryUsersRepository.create({
      name: 'User test',
      email: 'usertest@gmail.com',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.execute({
      userId: createdUser.id,
    })

    expect(user.name).toEqual('User test')
  })

  it('Should not be able to get user profile with wrong id', async () => {
    await expect(() =>
      sut.execute({
        userId: 'wrong-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
