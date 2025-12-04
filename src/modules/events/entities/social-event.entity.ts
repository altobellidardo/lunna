export class SocialEvent {
  id: string
  name: string
  slug: string
  descripcion: string | null
  url: string | null
  image: string | null
  startDate: Date | null
  endDate: Date | null
  status: string
  producerId: string | null
  createdAt: Date
  updatedAt: Date
}
