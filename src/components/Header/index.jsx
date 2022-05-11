import React from 'react'
import { Link } from 'react-router-dom'

const links = [
  ['/', 'Home'],
  ['/order', 'Order'],
  ['/inventory', 'Inventory'],
  ['/login', 'Login'],
  ['/register', 'Register'],
]

const Header = () => {
  return (
    <header className='bg-teal-900'>
      <nav className='container px-6 flex flex-row justify-center items-center gap-6 py-5 text-white'>
        {links?.map(([to, value], i) => (
          <Link
            key={i}
            to={to}
            className='text-lg font-mono font-medium px-1 border-b border-b-transparent hover:border-b-white transition-colors duration-300'
          >
            {value}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header
