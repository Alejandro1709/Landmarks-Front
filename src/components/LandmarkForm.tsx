export default function LandmarkForm() {
  return (
    <form className="flex flex-col gap-2" noValidate>
      <div className="flex flex-col gap-1">
        <label htmlFor="title">Title:</label>
        <input
          className="bg-white border p-2 rounded-md"
          type="text"
          name="title"
          id="title"
          placeholder="Vacaciones en Roma"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="latitude">Latitude:</label>
        <input
          className="bg-white border p-2 rounded-md"
          type="text"
          name="latitude"
          id="latitude"
          placeholder="Vacaciones en Roma"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="longitude">Longitude:</label>
        <input
          className="bg-white border p-2 rounded-md"
          type="text"
          name="longitude"
          id="longitude"
          placeholder="Vacaciones en Roma"
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
