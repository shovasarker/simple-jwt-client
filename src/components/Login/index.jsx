import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem('accessToken', data.accessToken)
          navigate('/order')
        }
      })
  }
  return (
    <div className='container px-6'>
      <form className='w-full md:w-[450px] mx-auto' onSubmit={handleLogin}>
        <input
          type='email'
          placeholder='Email'
          name='email'
          required
          className='w-full px-3 py-2 border focus:outline-none mt-5'
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          required
          className='w-full px-3 py-2 border focus:outline-none mt-5'
        />
        <input
          type={'submit'}
          value='Login'
          className='w-full px-2 py-2 mt-5 bg-teal-600 text-white font-bold font-mono tracking-wider border border-teal-600 hover:bg-transparent hover:text-teal-600 transition-all duration-300 cursor-pointer'
        />
      </form>
    </div>
  )
}

export default Login
