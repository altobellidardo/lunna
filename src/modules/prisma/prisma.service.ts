import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from 'generated/prisma/client'

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
  constructor () {
    const pool = new PrismaPg({ connectionString: process.env.DATABASE_URL })
    super({ adapter: pool })
  }

  private readonly logger = new Logger('Auth - App')

  async onModuleInit () {
    try {
      await this.$connect()
      this.logger.log('Database Connected')
    } catch (error) {
      this.logger.error('Failed to connect to the database', error.stack)
      throw error
    }
  }

  async onModuleDestroy () {
    await this.$disconnect()
    this.logger.log('Database Disconnected')
  }
}
