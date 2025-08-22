import React from 'react'

function DessertCard() {
    return (
        <div className='max-w-xs'>
            <img src="/images/image-creme-brulee-mobile.jpg" alt="" />
            <div>
                <button>Add to Cart</button>
                <div>
                    <span>creme brulee</span>
                    <span>vanilla bean creme brulee</span>
                    <span>$6.50</span>
                </div>
            </div>
        </div>
    )
}

export default DessertCard