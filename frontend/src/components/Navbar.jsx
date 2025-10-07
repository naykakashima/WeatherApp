// Navbar.jsx
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 shadow-lg px-6">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">☁️ WeatherNow</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar