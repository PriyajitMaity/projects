import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearAllCart, decreaseItem, increaseItem, removeItem } from '../slice/cartSlice';

const Cart = () => {
   
    const cartItems =useSelector(state =>state.cart.cartItems)
    const dispatch =useDispatch();
    
   

    const handleRemove =(itemsId) =>{
        dispatch(removeItem(itemsId));
    }
    const handleIncrement =(itemsId) =>{
        dispatch(increaseItem(itemsId));
    }
    const handleDecrement =(itemsId) =>{
        dispatch(decreaseItem(itemsId));
    }
    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);


    if(cartItems.length ===0){
        return(
            <div className="cart-empty">
                <h1>My Cart is Empty...</h1>
            </div>
        )
    }
  return (
    
        <div className="cart">
            <div className="cart-content">
                <h2 style={{textAlign: 'center'}}>My Bag</h2>
                <div className="cart-body">
                    {
                            cartItems.map((items) =>{
                                const {img, title, price, quantity} =items;
                                return(
                                    <div className="cart-items" key={items.id}>
                                        
                                            <img src={img} alt={title} />
                                        <div className="items-info">
                                            <h4>{title}</h4>
                                            <h4 className="item-price">₹ {price}</h4>
                                            <button className='remove-btn' onClick={() =>handleRemove(items.id)}>remove</button>
                                        </div>
                                        <div className="inc-dcr-btns">
                                            <button className='amount-btn' onClick={() =>handleDecrement(items.id)}>-</button>
                                            <p className='amount'>{quantity}</p>
                                            <button className='amount-btn' onClick={() =>handleIncrement(items.id)} >+</button>
                                        
                                        </div>
                                    </div>
                                    
                                )
                         })
                    }
                        <hr />
                    <footer>
                        <div className="cart-total">
                            <h4>Total <span>₹ {cartTotal.toLocaleString()}</span></h4>
                        </div>
                        <button className='clear-btn' onClick={() =>dispatch(clearAllCart())}>clear cart</button>
                    </footer>
                </div>
            </div>
        </div>  
    

  )
}

export default Cart;