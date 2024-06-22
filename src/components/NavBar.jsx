import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../styles/navbar.css'

const NavBar = ({cartSize, setShowCart}) => {
  return (
    <nav>
        <div className='nav-box'>
            <span className='nav-logo'>
                C0de3xP10iT
            </span>
            <span className='cart' onClick={() => {setShowCart(false)}}>
                <span>
                    <i className='fas fa-cart-plus'></i>
                </span>
                <span>{cartSize}</span>
            </span>
        </div>
    </nav>
  )
}

export default NavBar
