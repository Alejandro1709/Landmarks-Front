import { Link, Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <>
      <header className="flex items-center h-16 bg-[#011627] text-white">
        <div className="flex justify-between items-center w-full mx-6">
          <Link to="/">
            <h2 className="text-2xl font-medium">Landmarks</h2>
          </Link>

          <nav role="navigation">
            <ul>
              <li>
                <Link
                  className="p-2 bg-[#FF3366] rounded-lg"
                  to="/landmarks/create"
                >
                  Create
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}
