import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { GoogleStrategy } from './strategies/google.stategy'

@Module({
  controllers: [AuthController],
  providers: [GoogleStrategy]
})
export class AuthModule {}
