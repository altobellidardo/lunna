import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { PrismaModule } from '../prisma/prisma.module'
import { BcryptModule } from '../bcrypt/bcrypt.module'
import { UsersController } from './users.controller';

@Module({
  imports: [PrismaModule, BcryptModule],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
