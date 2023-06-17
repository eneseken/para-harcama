import React from 'react'

export default function BasketItem( {item, product} ) {
  return (
    <div> 
        {product.title} x {item.amount}
    </div>
  )
}
