import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { BcryptService } from '../bcrypt/bcrypt.service'
import { CreateUserDto, GetUserDto, UpdateUserDto } from './dto/user.dto'

@Injectable()
export class UsersService {
  constructor (
    private readonly prisma: PrismaService,
    private readonly bcrypt: BcryptService
  ) {}

  private async validateEmail (email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: { email: true }
    })

    if (!user) return
    throw new BadRequestException('Email already exists')
  }

  async create (createUserDto: CreateUserDto) {
    if (createUserDto.password) {
      createUserDto.password = await this.bcrypt.hash(createUserDto.password)
    }
    await this.validateEmail(createUserDto.email)
    return this.prisma.user.create({ data: createUserDto })
  }

  async update (UpdateUserDto: UpdateUserDto) {
    await this.findOne({ id: UpdateUserDto.id })

    if (UpdateUserDto.email) {
      await this.validateEmail(UpdateUserDto.email)
    }

    return this.prisma.user.update({
      where: { id: UpdateUserDto.id },
      data: {
        ...UpdateUserDto,
        password: UpdateUserDto.password ? await this.bcrypt.hash(UpdateUserDto.password) : undefined
      }
    })
  }

  async findOne (GetUserDto: GetUserDto) {
    if (!GetUserDto.id && !GetUserDto.email) throw new BadRequestException('Id or email is required')
    const data = GetUserDto.id ? { id: GetUserDto.id } : { email: GetUserDto.email }
    const user = await this.prisma.user.findUnique({
      where: data,
    })

    if (!user) throw new NotFoundException('User not found')
    return user
  }

  // By me
  async findAll () {
    return this.prisma.user.findMany()
  }

  async delete (id: string) {
    await this.findOne({ id })
    return await this.prisma.user.delete({ where: { id } })
  }
}
