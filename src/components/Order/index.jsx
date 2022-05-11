import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Order = () => {
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetch('http://localhost:5000/orders', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return navigate('/login')
        }
        return res.json()
      })
      .then((data) => {
        console.log(data)
      })
  }, [navigate])

  return (
    <div>
      <h1 className='my-10 text-3xl text-center font-medium font-mono'>
        This is Order Page
      </h1>
    </div>
  )
}

export default Order
