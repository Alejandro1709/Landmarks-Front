import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import IndexPage from './pages/IndexPage'
import AddLandmarkPage from './pages/AddLandmarkPage'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<IndexPage />} index />
          <Route path="/landmarks/create" element={<AddLandmarkPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
