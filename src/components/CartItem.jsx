import React from 'react'

function CartItem() {
    return (
        <div className='py-4 flex items-center justify-between'>
            <div>

                <h3 className='text-amber-950 capitalize font-semibold text-lg'>classic tiramisu</h3>
                <div className='flex items-center gap-4'>

                    <span className='text-amber-600 font-semibold'>1x</span>
                    <span className='text-amber-900'>@5.50</span>
                    <span className='text-amber-900 font-semibold'>$5.50</span>
                </div>
            </div>
            <span className='border border-amber-900 w-4 h-4 rounded-[100%] cursor-pointer p-1 flex items-center justify-center'><img src="/assets/images/icon-remove-item.svg" alt="cross-image" /></span>
        </div>
    )
}

export default CartItem