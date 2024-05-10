import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const {cartItems} =useSelector(state =>state.cart);

  return (
    <header>
        <div className='container'>
            <h2>Redux Shopping cart</h2>
            <div className="cart-icon">
            <Link to={'/cart'}><span> 🛒</span> </Link>
            <span className='badge'>{cartItems.length}</span>
            </div>
        </div>
    </header>
  )
}

export default Header;