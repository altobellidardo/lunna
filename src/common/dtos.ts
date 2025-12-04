import z from 'zod'

export const uuidSchema = z.uuid({ message: 'ID inválido' })
export const slugSchema = z.string()
  .min(3)
  .regex(/^[a-z0-9-]+$/, 'El slug solo puede contener minúsculas, números y guiones')
