import { z } from 'zod'
import { createZodDto } from 'nestjs-zod'
import { uuidSchema } from 'src/common/dtos'

const SessionCoreSchema = z.object({
  id: uuidSchema,
  userId: uuidSchema,
  refreshToken: z.string(),
  userAgent: z.string().optional(),
  ipAddress: z.string().optional(),
  location: z.string().optional(),
  isActive: z.boolean(),
  expiresAt: z.string().optional(),
})

const CreateSessionSchema = SessionCoreSchema
  .extend({ id: uuidSchema.optional() })
export class CreateSessionDto extends createZodDto(CreateSessionSchema) {}

const GetAllSessionsSchema = SessionCoreSchema.pick({ userId: true })
export class GetAllSessionsDto extends createZodDto(GetAllSessionsSchema) {}

const GetSessionSchema = SessionCoreSchema.pick({ id: true, userId: true })
export class GetSessionDto extends createZodDto(GetSessionSchema) {}

const GetSessionByParamsSchema = SessionCoreSchema.pick({ userId: true }).extend({ ip: z.string().optional(), userAgent: z.string().optional() })
export class GetSessionByParamsDto extends createZodDto(GetSessionByParamsSchema) {}

const UpdateSessionSchema = SessionCoreSchema.partial().extend({ id: uuidSchema })
export class UpdateSessionDto extends createZodDto(UpdateSessionSchema) {}
