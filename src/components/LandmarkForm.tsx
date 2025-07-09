import { useForm } from 'react-hook-form'
import type { LandmarkFormData } from '../types'
import { createLandmark } from '../services/landmarkServices'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function LandmarkForm() {
  const navigate = useNavigate()

  const initialValues: LandmarkFormData = {
    title: '',
    image: '',
    latitude: '0',
    longitude: '0',
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: initialValues })

  const handleCreate = (formData: LandmarkFormData) => {
    const form = new FormData()
    form.append('title', formData.title)
    form.append('latitude', formData.latitude)
    form.append('longitude', formData.longitude)
    form.append('image', formData.image[0])

    createLandmark(form)
      .then((data) => {
        toast.success(data.message)

        reset()

        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit(handleCreate)}
      noValidate
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="title">Title:</label>
        <input
          className="bg-white border p-2 rounded-md"
          type="text"
          id="title"
          placeholder="Vacaciones en Roma"
          {...register('title', {
            required: 'A title is required',
          })}
        />
        {errors.title ? (
          <p className="text-red-400">{errors.title.message}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="image">Image:</label>
        <input
          className="bg-white border p-2 rounded-md"
          type="file"
          id="image"
          {...register('image', {
            required: 'An image is required',
          })}
        />
        {errors.image ? (
          <p className="text-red-400">{errors.image.message}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="latitude">Latitude:</label>
        <input
          className="bg-white border p-2 rounded-md"
          type="number"
          id="latitude"
          {...register('latitude', {
            required: 'The latitude is required',
            min: {
              value: -90,
              message: 'Invalid Latitude',
            },
            max: {
              value: 90,
              message: 'Invalid Latitude',
            },
          })}
        />
        {errors.latitude ? (
          <p className="text-red-400">{errors.latitude.message}</p>
        ) : null}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="longitude">Longitude:</label>
        <input
          className="bg-white border p-2 rounded-md"
          type="number"
          id="longitude"
          {...register('longitude', {
            required: 'The longitude is required',
            min: {
              value: -180,
              message: 'Invalid longitude',
            },
            max: {
              value: 180,
              message: 'Invalid longitude',
            },
          })}
        />
      </div>

      <input
        className="p-2 bg-[#FF3366] mt-2 rounded-lg font-bold text-white w-full cursor-pointer"
        type="submit"
        value="Save Landmark"
      />
    </form>
  )
}
