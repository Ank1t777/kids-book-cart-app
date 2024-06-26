import React from 'react'
import '../styles/cart.css'

const Cart = ({cart, setCart}) => { //getting items from Cart.jsx where cart and setCart are props
const [price, setPrice] = React.useState(0);

React.useEffect(() => {
    const totalPrice = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
    setPrice(totalPrice)
},[cart])

const addToCart = (item) => {
    const updatedCart = cart.map((cartItem => 
        cartItem.id === item.id ? {...cartItem, quantity: (cartItem.quantity || 1) + 1} : cartItem
    ))
    if(!cart.some(cartItem => cartItem.id === item.id)) {
        updatedCart.push({ ...item, quantity: 1});
    }
    setCart(updatedCart)
}
const removeFromCart = (item) => {
    if ((item.quantity || 1) <= 1) {
        // If quantity is 1 or undefined, remove the item completely
        setCart(cart.filter(cartItem => cartItem.id !== item.id));
    } else {
        // Otherwise, just decrement the quantity
        const updatedCart = cart.map((cartItem) =>
            cartItem.id === item.id 
                ? { ...cartItem, quantity: (cartItem.quantity || 1) - 1 }
                : cartItem
        );
        setCart(updatedCart);
    }
}

  return (
    <div>
      {
        cart?.map((item) => (
            <div className='cart--box' key={item.id}>
                <div className='cart--image'>
                    <img src={item.img} alt='children books '/>
                </div>
                    <div className='cart-items-details'>
                        <p>{item.author}</p>
                        <p>Quantity: {item.quantity || 1}</p>
                        <button onClick={() => addToCart(item)}>+</button>
                        <button onClick={() => removeFromCart(item)}>-</button>
                    </div>
            </div>
        ))
      }
        <div className='cart-total'>
            {price === 0.00 ? <h1 className='cart--empty'>Oops! your cart is empty <i class="fa-regular fa-face-frown"></i></h1> 
            : <h3 className='cart--total'>Total Price:  ₹{price.toFixed(2)}</h3>}
        </div>
    </div>
  )
}

export default Cart
