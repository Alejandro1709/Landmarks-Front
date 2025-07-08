import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navbar from '../components/Navbar'

export default function AppLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <ToastContainer />
    </>
  )
}
