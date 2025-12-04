import { z } from 'zod'
import { createZodDto } from 'nestjs-zod'

// 1. CONSTANTES REUTILIZABLES
// Definimos validaciones comunes para usarlas en toda la app
const uuidSchema = z.uuid({ message: 'ID inválido' })
const slugSchema = z.string()
  .min(3)
  .regex(/^[a-z0-9-]+$/, 'El slug solo puede contener minúsculas, números y guiones')

// 2. ESQUEMA BASE (La fuente de la verdad)
// Define todas las propiedades posibles de tu entidad Evento aquí.
const EventBaseSchema = z.object({
  id: uuidSchema,

  // Usamos los nombres de tu DB (Prisma) para evitar mapeos manuales
  name: z.string().min(5, 'El nombre debe tener al menos 5 caracteres'),
  slug: slugSchema,
  descripcion: z.string().optional(),
  url: z.url().optional(),
  imagen: z.url().optional(),

  startDate: z.coerce.date().optional(), // 'coerce' transforma string ISO a Date automáticamente
  endDate: z.coerce.date().optional(),

  organizadorId: uuidSchema, // Cambiado de 'producerId' para coincidir con Prisma
})

// -------------------------------------------------------------------
// 3. DTOs DERIVADOS (Aquí ocurre la magia de la reutilización)
// -------------------------------------------------------------------

// --- CREATE ---
// Omitimos 'id' (se genera solo) y hacemos refinamiento de fechas
const CreateEventSchema = EventBaseSchema
  .omit({ id: true }) // Quitamos ID
  .extend({
    // Si necesitas hacer algún campo opcional SOLO al crear (ej: organizador si viene del token)
    organizadorId: uuidSchema.optional()
  })
  .refine((data) => {
    if (data.endDate && data.startDate) {
      return data.endDate > data.startDate
    }
    return true
  }, {
    message: 'La fecha de término no puede ser anterior a la de inicio',
    path: ['endDate'],
  })
export class CreateEventDto extends createZodDto(CreateEventSchema) {}

// --- UPDATE ---
// Reutilizamos Create, lo hacemos todo opcional (Partial), y re-agregamos ID
const UpdateEventSchema = CreateEventSchema
  .partial() // Todo se vuelve opcional
  // .extend({ id: uuidSchema }) // Forzamos que el ID venga en el body o param
  .omit({ organizadorId: true }) // No solemos dejar cambiar el dueño del evento
export class UpdateEventDto extends createZodDto(UpdateEventSchema) {}

const UpdateEventSchemaWithId = UpdateEventSchema.extend({ id: uuidSchema })
export class UpdateEventDtoWithId extends createZodDto(UpdateEventSchemaWithId) {}

// --- FILTERS (Query Params) ---
// Para búsquedas: todo opcional, agregamos paginación
const FiltersEventSchema = EventBaseSchema
  .pick({
    name: true,
    slug: true,
    organizadorId: true,
    id: true
  }) // Solo permitimos filtrar por estos campos base
  .partial() // Todo opcional
  .extend({
    // Agregamos campos extras solo para filtrado
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
    page: z.coerce.number().min(1).default(1).optional(),
  })
export class FiltersEventDto extends createZodDto(FiltersEventSchema) {}

// --- FIND ONE ---
const FindEventSchema = z.object({
  id: uuidSchema,
})
export class FindEventDto extends createZodDto(FindEventSchema) {}
