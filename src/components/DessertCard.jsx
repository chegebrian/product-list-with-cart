import React from 'react'
import { useDessertsApi } from '../contexts/DataContext'
import Button from '../ui/Button'


function DessertCard({ dessert }) {
    const { image: { mobile }, name, category, price } = dessert
    const formatter = new Intl.NumberFormat("en-us", { currency: "USD", style: "currency" })
    const { setCart, cart } = useDessertsApi()
    function handleSetCart(selectedDessert) {
        const item = cart?.find((dessert) => dessert.name === selectedDessert.name)
        if (item) return  ;
        setCart((cart) => [...cart,{...selectedDessert, quantity:1}])
    }

    return (
        <div className='max-w-xs' >

            <img src={mobile} alt={name} className='rounded-lg' />

            <div>
                <div className="relative flex items-center justify-center">

                    {cart?.find((item) => item.name === name) ? <Button dessert={dessert} /> : <button onClick={() => handleSetCart(dessert)} className='flex items-center absolute cursor-pointer gap-2 bg-amber-50 py-2 px-6 font-semibold border text-amber-950 border-amber-700 rounded-full'><img src="/assets/images/icon-add-to-cart.svg" alt="add-to-cart-icon" />Add to Cart</button>}
                   
                </div>
                <div className='flex flex-col items-start gap-3 pt-8'>
                    <span className='text-amber-900 text-lg'>{category}</span>
                    <span className='font-semibold text-xl text-amber-950'>{name}</span>
                    <span className='text-amber-600 font-semibold'>{formatter.format(price)}</span>
                </div>
            </div>
        </div>
    )
}

export default DessertCard

