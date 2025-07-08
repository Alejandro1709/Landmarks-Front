import { z } from 'zod'

export const landmarkSchema = z.object({
  _id: z.string(),
  title: z.string(),
  latitude: z.number(),
  longitude: z.number(),
})

export type Landmark = z.infer<typeof landmarkSchema>

export type LandmarkFormData = Pick<
  Landmark,
  'title' | 'latitude' | 'longitude'
>
