import React from 'react'
import { moneyFormat } from './Helper'
import purchaseSound from '../sound/purchaseSound.mp3';
import sold from '../sound/sold.mp3';
import { Howl } from 'howler';


export default function Product( {product, basket, setBasket, total, money} ) {


    const basketItem = basket.find(item => item.id === product.id)


    /* Basket ekle */
    const addBasket = () =>{
        const checkBasket = basket.find(item => item.id === product.id)

        const sound = new Howl({
            src: purchaseSound,
            volume: .5 // Ses düzeyi %50
        });
        
          // Ses çalma
        sound.play();
        
        if(checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
            
        }else{
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !==  product.id)
        currentBasket.amount -= 1

        const sound = new Howl({
            src: sold,
            volume: .5 
        });
        
        sound.play();

        if(currentBasket.amount === 0) {
            setBasket([...basketWithoutCurrent])
        } else {
            setBasket([...basketWithoutCurrent, currentBasket])

        }
        
    }


return (
    <div className='container border-2 mt-2 col-lg-3 rounded'>
    <img className='w-100 h-50 object-fit-contain' src={product.image} alt='product' />
    <h5  className=''>{product.title}</h5>
    <div className='price'>{moneyFormat(product.price)}</div>
    <div className='actions d-flex flex-row gap-2 mt-2 align-items-center'>
        <button disabled={!basketItem} className='btn btn-danger rounded-2' onClick={removeBasket}> Sat </button>
        <button disabled={total + product.price > money} className='btn btn-success rounded-2' onClick={addBasket}> Satın Al </button>
        <span className='amount rounded-5 text-secondary'>{basketItem ? basketItem.amount : 0}</span>
    </div>
</div>

)
}
