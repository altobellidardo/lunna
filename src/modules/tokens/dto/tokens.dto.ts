import { AuthorizationToken } from 'src/common/enums/authorization-token'

import { z } from 'zod'
import { createZodDto } from 'nestjs-zod'
import { uuidSchema } from 'src/common/dtos'

const TokenCoreSchema = z.object({
  userId: uuidSchema,
  type: z.enum(AuthorizationToken),
  token: z.string(),
})

const CreateTokenSchema = TokenCoreSchema.pick({ userId: true, type: true }).extend({ ttl: z.number().optional() })
export class CreateTokenDto extends createZodDto(CreateTokenSchema) {}

export class TokenPayloadDto extends createZodDto(TokenCoreSchema) {}

const RevokeTokenSchema = TokenCoreSchema.pick({ userId: true, type: true })
export class RevokeTokenDto extends createZodDto(RevokeTokenSchema) {}

const TokenResponseSchema = TokenCoreSchema.pick({ token: true })
export class TokenResponseDto extends createZodDto(TokenResponseSchema) {}
