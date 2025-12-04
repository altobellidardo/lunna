import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { SocialEvent } from './entities/social-event.entity'
import { CreateEventDto, FiltersEventDto, UpdateEventDtoWithId } from './dto/event.dto'

export const MAX_EVENTS_PER_PAGE = 10

@Injectable()
export class EventsService {
  constructor (
    private readonly prisma: PrismaService
  ) {}

  async findAll (filters: FiltersEventDto): Promise<SocialEvent[]> {
    const { page, ...eventsFilters } = filters
    const events = await this.prisma.event.findMany({ where: eventsFilters, take: MAX_EVENTS_PER_PAGE })
    if (!events) throw new NotFoundException('Events not found')
    return events
  }

  async getTrending () {
    // TODO: implement trending algorithm
    return await this.prisma.event.findMany()
  }

  async findOne (id: string): Promise<SocialEvent> {
    const event = await this.prisma.event.findUnique({ where: { id } })
    if (!event) throw new NotFoundException('Event not found')
    return event
  }

  async create (data: CreateEventDto): Promise<SocialEvent> {
    const existingEvent = await this.findAll({ slug: data.slug })
    if (existingEvent.length) throw new BadRequestException('Event with same slug already exists')
    return await this.prisma.event.create({ data })
  }

  async update (data: UpdateEventDtoWithId): Promise<SocialEvent> {
    await this.findOne(data.id)
    return await this.prisma.event.update({ where: { id: data.id }, data })
  }
}
