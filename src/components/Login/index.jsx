import React from 'react'

const Login = () => {
  return (
    <div className='container px-6'>
      <form className='w-full md:w-[450px] mx-auto'>
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
          className='w-full px-2 py-2 mt-5 bg-teal-600 text-white font-bold font-mono tracking-wider border border-teal-600 hover:bg-transparent hover:text-teal-600 transition-all duration-300 '
        />
      </form>
    </div>
  )
}

export default Login
