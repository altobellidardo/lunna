import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common'
import { EventsService } from './events.service'
import { CreateEventDto, FiltersEventDto, FindEventDto, UpdateEventDto } from './dto/event.dto'
import { SocialEvent } from './entities/social-event.entity'

@Controller('events')
export class EventsController {
  constructor (private readonly eventsService: EventsService) {}

  @Get()
  async getEvents (@Query() filters: FiltersEventDto): Promise<SocialEvent[]> {
    return await this.eventsService.findAll(filters)
  }

  @Get('trending')
  async getTrendingEvents (): Promise<SocialEvent[]> {
    return await this.eventsService.getTrending()
  }

  @Get(':id')
  async getEvent (@Param() params: FindEventDto): Promise<SocialEvent> {
    return await this.eventsService.findOne(params.id)
  }

  // @UseGuards(JwtAuthGuard)
  @Post()
  async createEvent (@Body() data: CreateEventDto): Promise<SocialEvent> {
    return await this.eventsService.create(data)
  }

  // @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateEvent (@Param() params: FindEventDto, @Body() data: UpdateEventDto): Promise<SocialEvent> {
    return await this.eventsService.update({ ...data, id: params.id })
  }
}
