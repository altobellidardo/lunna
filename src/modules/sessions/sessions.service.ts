import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateSessionDto, GetAllSessionsDto, GetSessionDto, UpdateSessionDto } from './dto/session.dto'

@Injectable()
export class SessionsService {
  constructor (
    private readonly prisma: PrismaService
  ) {}

  async create (createSession: CreateSessionDto) {
    return await this.prisma.session.create({ data: createSession })
  }

  async getAll (getAllSessions: GetAllSessionsDto) {
    return await this.prisma.session.findMany({
      where: { userId: getAllSessions.userId }
    })
  }

  async findOne (getSession: GetSessionDto) {
    const session = await this.prisma.session.findUnique({
      where: { id: getSession.id }
    })

    if (!session) throw new NotFoundException('Session not found')
    return session
  }

  async update (updateSession: UpdateSessionDto) {
    if (!updateSession.userId) throw new BadRequestException('UserId is required')
    await this.findOne({ id: updateSession.id, userId: updateSession.userId })
    return await this.prisma.session.update({ where: { id: updateSession.id }, data: updateSession })
  }

  async delete (getSession: GetSessionDto) {
    await this.findOne(getSession)
    return await this.prisma.session.delete({ where: { id: getSession.id } })
  }

  async deleteAll (getAllSessions: GetAllSessionsDto) {
    return await this.prisma.session.deleteMany({ where: { userId: getAllSessions.userId } })
  }
}
