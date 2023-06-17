import React from 'react'
import { moneyFormat } from './Helper'

export default function Header( {total, money} ) {

    

  return (
    <div className='header z-3 text-center fs-2 mb-4 position-sticky top-0 w-100 header bg-success bg-gradient p-3 text-white'  >

    {total > 0 ? (

      <>
        Mevcut Bakiyeniz : <span className='fw-bold text-white'>{moneyFormat(money - total)}</span> 
      </>

    ) : (
      <>
        Mevcut Bakiyeniz : <span className='fw-bold text-white'>{moneyFormat(money)}</span> 
      </>
      
    )}


    </div>
  )
}
