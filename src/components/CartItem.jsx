import React from 'react'

function CartItem({dessert}) {
    const { image: { thumbnail, mobile, tablet, desktop }, name, category, price } = dessert
    const formatter = new Intl.NumberFormat("en-us",{style:"currency", currency:"USD"})
    const numberOfDesserts = 2
    const cost = price * numberOfDesserts
    return (
        <div className='py-4 flex items-center justify-between'>
            <div>

                <h3 className='text-amber-950 capitalize font-semibold text-lg'>{name}</h3>
                <div className='flex items-center gap-4'>

                    <span className='text-amber-600 font-semibold'>1x</span>
                    <span className='text-amber-900'>@{formatter.format(price)}</span>
                    <span className='text-amber-900 font-semibold'>{formatter.format(cost)}</span>
                </div>
            </div>
            <span className='border border-amber-900 w-4 h-4 rounded-[100%] cursor-pointer p-1 flex items-center justify-center'><img src="/assets/images/icon-remove-item.svg" alt="cross-image" /></span>
        </div>
    )
}

export default CartItem