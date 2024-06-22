import React from 'react'
import NavBar from './components/NavBar'
import Shop from './components/Shop'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  const [cart, setCart] = React.useState([]);
  const [warning, setWarning] = React.useState(false)
  const [showCart, setShowCart] = React.useState(true)

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if(item.id === product.id)
        isPresent = true;
  })
    if(isPresent)
      {
        setWarning(true);
        setTimeout(() => {
          setWarning(false)
        },2000)
        return;
      }
    setCart([...cart,item])
  }

  return (
    <div>
      <NavBar cartSize={cart.length} setShowCart={setShowCart}/>
      {
        showCart ? <Shop handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart}/> 
      }     
      {warning && <div className='warning'>Item is already present in your cart!</div>}
    </div>
  )
}

export default App
