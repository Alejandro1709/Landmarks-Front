import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navbar from '../components/Navbar'

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex flex-1">
        <Outlet />
      </main>

      <ToastContainer />
    </div>
  )
}
