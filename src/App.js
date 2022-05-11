import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Inventory from './components/Inventory'
import Login from './components/Login'
import Order from './components/Order'
import Register from './components/Register'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/order' element={<Order />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
