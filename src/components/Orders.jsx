import React from 'react'

function Orders({ item }) {
    const { name, price, image: { thumbnail }, quantity } = item;
    const formatter = new Intl.NumberFormat("en-us", { style: "currency", currency: "USD" })
    const totalCost = quantity * price
    return (
        <div className='flex items-center justify-between py-4'>
            <div className='flex items-center gap-4'>

                <img src={thumbnail} alt={`${name}-image`} className='rounded-md w-20' />
                <div className='flex flex-col items-start gap-4'>
                    <h3 className='text-amber-950 capitalize font-semibold text-lg'>{name}</h3>
                    <div className='flex items-center gap-3'>
                        <span className='text-amber-600 font-semibold'>{quantity}x</span>
                        <span className='text-amber-900'>@{formatter.format(price)}</span>
                    </div>

                </div>
            </div>
            <div>
                <span className='text-amber-900 font-semibold'>{formatter.format(totalCost)}</span>
            </div>
        </div>
    )
}

export default Orders