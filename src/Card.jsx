import React from 'react'
import './styles/card.css'

const Card = ({item, handleClick}) => {
const {title, author, price, img} = item;

  return (
    <div className='cards'>
      <div className='cards--image'>
        <img src={img} alt='images'/>
      </div>
      <div className='cards--details'>
        <p>{title}</p>
        <p>{author}</p>
        <p>₹{price}</p>
        <button onClick={() => handleClick(item)}>Add to cart</button>
      </div>
    </div>
  )
}

export default Card
