import { useNavigate } from 'react-router-dom'
import useAuthStore from '../data/useAuthStore.js'

const Navbar = () => {
  let navigate = useNavigate();

  const username = useAuthStore(state => state.user?.username);
  const loggedIn = useAuthStore(state => !!state.user);

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
      <div className="px-4">
        {username && <span className="ml-4 text-gray-600">Hello, {username}!</span>}
      </div>
      <div className="flex-none">
        <button className="btn btn-primary" onClick={goHome}>Home</button>
        <>
          {loggedIn ? (
            <button 
              className="btn btn-secondary ml-4"
              onClick={() => {
                useAuthStore.getState().logout();
                navigate('/');
              }}
            >
              Logout
            </button>
          ) : (
            <>
              <button className="btn btn-secondary ml-4" onClick={goLogin}>Login</button>
              <button className="btn btn-secondary ml-4" onClick={goRegister}>Register</button>
            </>
          )}
        </>
      </div>
      <div className="flex-none">
      </div>
    </nav>
  )
}

export default Navbar