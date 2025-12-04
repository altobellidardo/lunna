import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  isAlive () {
    return { status: 'ok' }
  }
}
