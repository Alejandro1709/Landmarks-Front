import { isAxiosError } from 'axios'
import type { LandmarkFormData } from '../types'
import api from '../lib/axios'

export const getLandmarks = async () => {
  // TODO
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
