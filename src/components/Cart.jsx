import React from 'react'
import CartItem from './CartItem'
import { useDessertsApi } from '../contexts/DataContext'

function Cart() {
    const { cart } = useDessertsApi()
    return (
        <div className='p-4 rounded-lg shadow-amber-600 shadow-sm bg-slate-50'>
            <h2 className='text-amber-600 capitalize font-bold text-lg'>your cart (7)</h2>
            {!cart?.length ? "No desserts in cart" : cart?.map((item, index) => <CartItem dessert={item} key={index}/>)}
            <button className='capitalize bg-amber-600 cursor-pointer rounded-full py-2 px-4 text-amber-50 font-semibold'>confirm order</button>
        </div>
    )
}

export default Cart