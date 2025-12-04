import { z } from 'zod'
import { createZodDto } from 'nestjs-zod'
import { AuthProviderEnum, UserStatusEnum } from 'generated/prisma/enums'
import { uuidSchema } from 'src/common/dtos'

// 1. DEFINIMOS EL NÚCLEO (Los datos que el usuario ingresa)
const UserCoreSchema = z.object({
  name: z.string().min(5).optional(),
  lastName: z.string().min(5).optional(),
  email: z.email(),
  password: z.string().min(8).optional(),
  phone: z.string().optional(),
  avatar: z.url().optional(),
  country: z.string().length(2).default('AR'),
  language: z.string().length(5).default('es-ES'),

  status: z.enum(UserStatusEnum).default(UserStatusEnum.ACTIVE),
  authProvider: z.enum(AuthProviderEnum).default(AuthProviderEnum.LOCAL),
})

export class CreateUserDto extends createZodDto(UserCoreSchema) {}

const GetUserSchema = UserCoreSchema
  .pick({ email: true }).partial({ email: true }).extend({ id: uuidSchema.optional() })
export class GetUserDto extends createZodDto(GetUserSchema) {}

const UpdateUserSchema = UserCoreSchema.partial().extend({ id: uuidSchema })
export class UpdateUserDto extends createZodDto(UpdateUserSchema) {}

export const UserResponseSchema = UserCoreSchema.extend({
  id: uuidSchema,
  emailConfirm: z.boolean(),
  phoneConfirm: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type UserResponse = z.infer<typeof UserResponseSchema>
