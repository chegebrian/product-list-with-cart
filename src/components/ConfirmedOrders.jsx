import React from 'react'
import { useDessertsApi } from '../contexts/DataContext'
import Orders from './Orders'

function ConfirmedOrders() {
   const {cart} = useDessertsApi()
  return (
    <div>
        {cart?.map((item, index) =>  <Orders item={item} key={index}/>)}
    </div>
  )
}

export default ConfirmedOrders