import { Controller, Get, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { GoogleAuthGuard } from 'src/guards/google.guard'

@Controller('auth')
export class AuthController {
  constructor (private readonly authService: AuthService) {}

  @UseGuards(GoogleAuthGuard)
  @Get('google/login')
  googleLogin () {
    return 'sisisi'
  }

  @UseGuards(GoogleAuthGuard)
  @Get('google/callback')
  googleCallback () {}
}
