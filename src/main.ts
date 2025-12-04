import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { envs } from './config/envs'
import { Logger } from '@nestjs/common'
import cookieParser from 'cookie-parser'
import { ZodValidationPipe } from 'nestjs-zod'

async function bootstrap () {
  const logger = new Logger('App - Auth')

  const app = await NestFactory.create(AppModule)

  // app.use(helmet());
  app.use(cookieParser())

  app.setGlobalPrefix('api')

  app.enableCors({
    origin: envs.ALLOWED_ORIGINS,
    credentials: true, // Permite cookies
    // methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    // allowedHeaders: ['Content-Type', 'Authorization'],
  })

  app.useGlobalPipes(new ZodValidationPipe())

  await app.listen(process.env.PORT ?? 3000)
  logger.log('App running on PORT:')
}

bootstrap()
