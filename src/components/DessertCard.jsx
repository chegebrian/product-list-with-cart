import React from 'react'


function DessertCard({ dessert }) {
    const { image: { thumbnail, mobile, tablet, desktop }, name, category, price } = dessert
    const formatter = new Intl.NumberFormat("en-us", { currency: "USD", style: "currency" })
    return (
        <div className='max-w-xs'>
          

            <img src={mobile} alt={name} className='rounded-lg'/>
        
            <div>
                <div className="relative flex items-center justify-center">

                    <button className='flex items-center absolute cursor-pointer gap-2 bg-amber-50 py-2 px-6 font-semibold border text-amber-950 border-amber-700 rounded-full'><img src="/assets/images/icon-add-to-cart.svg" alt="add-to-cart-icon" />Add to Cart</button>
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

