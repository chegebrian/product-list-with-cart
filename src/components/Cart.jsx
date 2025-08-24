import React from 'react'
import CartItem from './CartItem'
import { useDessertsApi } from '../contexts/DataContext'

function Cart() {
    const { cart } = useDessertsApi()
    const formatter = new Intl.NumberFormat("en-us", { style: "currency", currency: "USD" })
    const itemsInCart = cart?.map((item) => item.quantity)

    const numberOfItemsInCart = itemsInCart.reduce((acc, curr) => acc + curr, 0)

    const cost = cart?.map((item) => item.quantity * item.price)
    console.log(cost);
    const totalCost = cost.reduce((acc, currValue) => acc + currValue, 0)

    return (
        <div className='p-4 rounded-lg shadow-amber-600 shadow-sm bg-slate-50'>
            <h2 className='text-amber-600 capitalize font-bold text-lg'>your cart ({numberOfItemsInCart})</h2>
            {!cart?.length ? "No desserts in cart" : cart?.map((item, index) => <CartItem dessert={item} key={index} />)}
            {cart?.length && <div className='flex flex-col gap-4'>

                <div className='flex items-center justify-between'>
                    <span className='capitalize text-amber-900'>order total</span>
                    <span className='text-2xl font-semibold text-amber-950'>{formatter.format(totalCost)}</span>
                </div>
                <p className='text-amber-900 flex items-center gap-2 justify-center bg-amber-50 py-2 px-4 rounded-md'><img src="/assets/images/icon-carbon-neutral.svg" alt="carbon-neutral-svg" /> This is a <span className='text-amber-950 font-semibold'>carbon-neutral</span>  delivery</p>
                <button className='capitalize bg-amber-600 cursor-pointer rounded-full py-2 px-4 text-amber-50 font-semibold'>confirm order</button>
            </div>}
        </div>
    )
}

export default Cart