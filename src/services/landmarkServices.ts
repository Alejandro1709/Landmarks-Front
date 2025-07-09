import axios, { isAxiosError } from 'axios'

export const getLandmarks = async () => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/landmarks`
    )

    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}

export const createLandmark = async (formData: FormData) => {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/v1/landmarks`,
      formData
    )

    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}
