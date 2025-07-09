import axios, { isAxiosError } from 'axios'

export const getLandmarks = async () => {
  try {
    // const { data } = await axios.get(
    //   'https://landmarks-api-production.up.railway.app/api/v1/landmarks'
    // )

    const res = await fetch(
      'https://landmarks-api-production.up.railway.app/api/v1/landmarks'
    )

    const data = await res.json()

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
      'https://landmarks-api-production.up.railway.app/api/v1/landmarks',
      formData
    )

    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error)
    }
  }
}
