import { Controller, Get, UseGuards } from '@nestjs/common'
import { GoogleAuthGuard } from 'src/common/guards/google/google.guard'

@Controller('auth')
export class AuthController {
  @UseGuards(GoogleAuthGuard)
  @Get('google/login')
  googleLogin () {
    return 'sisisi'
  }

  @UseGuards(GoogleAuthGuard)
  @Get('google/callback')
  googleCallback () {}
}
