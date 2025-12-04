import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20'
import { envs } from 'src/config/envs'

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor () {
    super({
      clientID: envs.GOOGLE_CLIENT_ID,
      clientSecret: envs.GOOGLE_SECRET,
      callbackURL: 'http://localhost:3000/api/auth/google/callback',
      scope: ['email', 'profile'],
    })
  }

  validate (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) {
    console.log({ accessToken, refreshToken, profile })
    return 'afjsdfas'
  }
}
