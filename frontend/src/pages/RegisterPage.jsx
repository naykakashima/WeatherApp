import React from 'react';
import Navbar from './../components/Navbar';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const RegisterPage = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const backendurl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

  const handleRegister = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch(`${backendurl}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      console.log("Registration response:", response);
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        window.location.href = '/';
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
      console.error('Registration error:', error);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-8">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl font-bold text-white mb-8 drop-shadow-lg"
        >
          Register
        </motion.h1>

        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card w-96 bg-base-100 shadow-2xl p-6"
        >
          <form onSubmit={handleRegister}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-full" onClick={handleRegister}>Register</button>
          </form>

          <p className="text-sm text-center text-gray-500 mt-4">
            Already have an account? <a className="text-blue-600 underline" href="/login">Login</a>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default RegisterPage;
