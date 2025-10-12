import { useNavigate } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  let navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  }

  const goLogin = () => {
    navigate('/LoginPage');
  }

  const goRegister = () => {
    navigate('/RegisterPage');
  }

  return (
    <nav className="navbar bg-base-100 shadow-lg px-6">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">☁️ WeatherNow</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-primary" onClick={goHome}>Home</button>
        <button className="btn btn-secondary ml-2" onClick={goLogin} >Login</button>
        <button className="btn btn-accent ml-2" onClick={goRegister} >Register</button>
      </div>
    </nav>
  )
}

export default Navbar