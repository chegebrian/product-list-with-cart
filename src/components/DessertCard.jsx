import React from 'react'


function DessertCard({ dessert }) {
    const { image: { thumbnail, mobile, tablet, desktop }, name, category, price } = dessert
    const formatter = new Intl.NumberFormat("en-us", { currency: "USD", style: "currency" })
    return (
        <div className='max-w-xs'>
            <img src={mobile} alt={name} />
            <div>
                <button className='flex items-center gap-2 py-4 px-6 font-semibold border border-amber-700 rounded-full'><img src="/assets/images/icon-add-to-cart.svg" alt="add-to-cart-icon" />Add to Cart</button>
                <div>
                    <span>{category}</span>
                    <span>{name}</span>
                    <span>{formatter.format(price)}</span>
                </div>
            </div>
        </div>
    )
}

export default DessertCard