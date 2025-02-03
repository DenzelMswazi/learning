import  Link  from 'next/link'
import React from 'react'

const NonDashboardNavbar = () => {
  return (
   <nav className="nondashboard-navbar">
     <div className="nondashboard-navbar__container">
      <Link href="/" className="nondashboard-navbar__brand">
        EDROH
      </Link>
      <div className="flex items-center gap-4">
        <div className="relative group"></div>
      </div>
     </div>
   </nav>
  )
}

export default NonDashboardNavbar