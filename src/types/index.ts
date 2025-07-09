import { z } from 'zod'

export const landmarkSchema = z.object({
  _id: z.string(),
  title: z.string(),
  image: z.string(),
  latitude: z.number(),
  longitude: z.number(),
})

export const LandmarksSchema = z.array(landmarkSchema)

export type Landmark = z.infer<typeof landmarkSchema>

export type Landmarks = z.infer<typeof LandmarksSchema>

export type LandmarkFormData = Pick<
  Landmark,
  'title' | 'image' | 'latitude' | 'longitude'
>
