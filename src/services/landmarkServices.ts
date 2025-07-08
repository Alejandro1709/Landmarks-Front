import { isAxiosError } from 'axios'
import { LandmarksSchema, type LandmarkFormData } from '../types'
import api from '../lib/axios'

export const getLandmarks = async () => {
  try {
    const { data } = await api.get('/api/v1/landmarks')

    const response = LandmarksSchema.safeParse(data)

    if (response.success) {
      return data
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}

export const createLandmark = async (formData: LandmarkFormData) => {
  try {
    const { data } = await api.post('/api/v1/landmarks', formData)

    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}
