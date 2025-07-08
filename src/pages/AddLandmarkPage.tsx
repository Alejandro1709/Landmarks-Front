import LandmarkForm from '../components/LandmarkForm'

export default function AddLandmarkPage() {
  return (
    <>
      <div className="max-w-4xl space-y-3 mx-auto my-6">
        <h1 className="text-4xl font-bold">Create a landmark</h1>

        <LandmarkForm />
      </div>
    </>
  )
}
