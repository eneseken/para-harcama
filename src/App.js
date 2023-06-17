import './App.css'
import Header from './components/Header'
import {useState, useEffect} from 'react'
import Product from './components/Product'
import Basket from './components/Basket'
import products from './products.json'
import { FaShoppingBasket } from 'react-icons/fa'
import { Howl } from 'howler';
import applePay from './sound/applePay.mp3';

function App() {

  const [money, setMoney] = useState(1000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0)

  const resetBasket = () => {
    setBasket([])
  }

  const applyBasket = () => {
    alert("Sepetiniz Onaylandı!")
    setBasket([])

    const sound = new Howl({
      src: applePay,
      volume: 0.5
    });
    
    sound.play();
    
  }

  useEffect ( ()=>{
    setTotal(
      basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    }, 0),
    )
  }, [basket] )

  return (
    <>
    <Header total={total} money={money}/>  
    
    <div className="container d-flex flex-wrap gap-2">

    {products.map(product => (
      <Product key={product.id} basket={basket} setBasket={setBasket} total={total} money={money} product={product}/>
    ))}

    
    </div>
  
    <div className='container card-header p-5 text-bg-light d-flex flex-column align-items-center gap-2'>
    <FaShoppingBasket size={30} /> {total > 0 ?  

      <Basket resetBasket={resetBasket} applyBasket={applyBasket} products={products} total={total} basket={basket} /> 
    
    : <h4>Sepetiniz boş</h4>}
    
    </div>
    
    </>
    
  );
}

export default App;
