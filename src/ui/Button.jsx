import React, { useEffect, useState } from 'react'
import { useDessertsApi } from '../contexts/DataContext'

function Button({ dessert }) {
    const { handleCountDecrement, handleCountIncrement, cart } = useDessertsApi()

    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
    

        const cartItem = cart?.map((d) => d.name === dessert.name && d)
        console.log(cartItem);

        const selectedItem = cartItem?.find((item) => item.name === dessert.name)
        console.log(selectedItem);
        
        setQuantity(selectedItem.quantity)


    }, [cart, dessert])

    return (
        <button className='flex items-center absolute  gap-4 bg-amber-600 py-2 px-6 font-semibold text-amber-950 rounded-full'>
            <span onClick={() => handleCountDecrement(dessert)} className='border border-amber-50 w-4 h-4 rounded-[100%] cursor-pointer p-1 flex items-center justify-center'>

                <img src="/assets/images/icon-decrement-quantity.svg" alt="decrement-icon" />
            </span>
            <span className='text-amber-50'>{quantity}</span>
            <span onClick={() => handleCountIncrement(dessert)} className='border border-amber-50 w-4 h-4 rounded-[100%] cursor-pointer p-1 flex items-center justify-center' >

                <img src="/assets/images/icon-increment-quantity.svg" alt="increment-icon" />
            </span>
        </button>
    )
}

export default Button