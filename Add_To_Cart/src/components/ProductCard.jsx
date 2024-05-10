import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../slice/cartSlice';

const ProductCard = ({items}) => {
  const[isAdded,  setIsAdded] =useState(false);
  const dispatch =useDispatch();
    const{ img, rating, title, price} =items;

    const handleAddToCart =() =>{
      const item ={...items};
      dispatch(addItem(item));
      setIsAdded(true);
      setTimeout(() => {
        setIsAdded(false);
      }, 3000);
    }
  return (
    <div className='product-card'>
        <figure>
            <img src={img} alt={title} />
        </figure>
        <strong className='rating'>{rating}</strong>
        <h4 className='title'>{title}</h4>
        <h3 className='price'>₹ {price.toLocaleString()}</h3>
        <button className='btn' onClick={handleAddToCart}>{isAdded ? 'Added' : 'Add To Cart'}</button>
    </div>
  )
}

export default ProductCard;