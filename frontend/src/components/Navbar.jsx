import { useNavigate } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  let navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  }

  return (
    <nav className="navbar bg-base-100 shadow-lg px-6">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">☁️ WeatherNow</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button className="btn btn-primary" onClick={goHome}>Home</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar