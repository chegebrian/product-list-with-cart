import React from 'react'
import { useDessertsApi } from '../contexts/DataContext'

function CartItem({ dessert }) {
    const { name, price } = dessert
    const { setCart, cart } = useDessertsApi()
    function handleRemoveItem(selectedDessert) {
        setCart((cart) => cart?.filter((item) => item.name !== selectedDessert))
    }
    const findDessert = cart?.find((item) => item.name === name)
    console.log(findDessert.quantity);
    
    const formatter = new Intl.NumberFormat("en-us", { style: "currency", currency: "USD" })
    const numberOfDesserts = findDessert.quantity
    const cost = price * numberOfDesserts
    return (
        <div className='py-4 flex items-center justify-between'>
            <div>

                <h3 className='text-amber-950 capitalize font-semibold text-lg'>{name}</h3>
                <div className='flex items-center gap-4'>

                    <span className='text-amber-600 font-semibold'>{findDessert.quantity}x</span>
                    <span className='text-amber-900'>@{formatter.format(price)}</span>
                    <span className='text-amber-900 font-semibold'>{formatter.format(cost)}</span>
                </div>
            </div>
            <span onClick={() => handleRemoveItem(name)} className='border border-amber-900 w-4 h-4 rounded-[100%] cursor-pointer p-1 flex items-center justify-center'><img src="/assets/images/icon-remove-item.svg" alt="cross-image" /></span>
        </div>
    )
}

export default CartItem