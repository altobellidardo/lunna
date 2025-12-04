import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaService } from './modules/prisma/prisma.service'
import { CacheModule } from '@nestjs/cache-manager'
import KeyvRedis from '@keyv/redis'
import { EventsModule } from './modules/events/events.module'
import { PrismaModule } from './modules/prisma/prisma.module'
import { BcryptModule } from './modules/bcrypt/bcrypt.module'
import { AuthModule } from './modules/auth/auth.module'
import { EmailsModule } from './modules/emails/emails.module'
import { envs } from './config/envs'
import { UsersModule } from './modules/users/users.module'
import { SessionsModule } from './modules/sessions/sessions.module';
import { TokensModule } from './modules/tokens/tokens.module';

@Module({
  imports: [
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: () => {
        return {
          ttl: 5000,
          stores: [
            new KeyvRedis(envs.REDIS_URL),
          ],
        }
      },
    }),
    EventsModule,
    PrismaModule,
    BcryptModule,
    AuthModule,
    EmailsModule,
    UsersModule,
    SessionsModule,
    TokensModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
