import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen">
      {/* Ajoutez votre header ici */}
      <main>
        <Outlet />
      </main>
      {/* Ajoutez votre footer ici */}
    </div>
  )
} 