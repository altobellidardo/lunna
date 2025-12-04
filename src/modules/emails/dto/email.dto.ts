import z from 'zod'

export const emailSchema = z.object({
  to: z.email().array(),
  subject: z.string(),
  html: z.string()
})

export type Email = z.infer<typeof emailSchema>
