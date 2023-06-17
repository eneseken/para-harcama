import React from 'react'
import BasketItem from './BasketItem'

export default function Basket({basket, resetBasket, applyBasket, products, total}) {
  return (
    <>
        {basket.map(item => (
            <BasketItem item={item} product={products.find(p => p.id === item.id)} />
        ))}

        <div>
            <span className='fw-bold fs-4'>${total}</span>/Toplam
        </div>

     <div className='d-flex gap-2'>
      <button className='btn btn-danger' onClick={resetBasket}>Sepeti Sıfırla</button>
    <button className='btn btn-success' onClick={applyBasket}>Sepeti Onayla</button>
     </div>   
    

    </>
  )
}
