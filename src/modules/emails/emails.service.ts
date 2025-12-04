import { BadRequestException, Injectable } from '@nestjs/common'
import { Resend } from 'resend'
import { envs } from 'src/config/envs'
import type { Email } from './dto/email.dto'

@Injectable()
export class EmailsService {
  private readonly resend: Resend

  constructor () {
    this.resend = new Resend(envs.RESEND_APIKEY)
  }

  async sendEmail (email: Email) {
    try {
      return await this.resend.emails.send({
        from: `Administrator <${envs.RESEND_FROM_EMAIL}>`,
        to: email.to,
        subject: email.subject,
        html: email.html
      })
    } catch (error) {
      throw new BadRequestException('There was an error sending the email')
    }
  }

  async sendBatcEmail (emails: Email[]) {
    return await this.resend.batch.send(
      emails.map((email) => ({
        from: `Administrator <${envs.RESEND_FROM_EMAIL}>`,
        to: email.to,
        subject: email.subject,
        html: email.html
      }))
    )
  }
}
