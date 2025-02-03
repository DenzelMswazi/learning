import { Link } from 'lucide-react'
import React from 'react'

const NonDashboardNavbar = () => {
  return (
   <nav className="nondashboard-navbar">
     <div className="nondashboard-navbar__container">
      <Link href="/" className="nondashboard-navbar__brand">
        EDROH
      </Link>
     </div>
   </nav>
  )
}

export default NonDashboardNavbar