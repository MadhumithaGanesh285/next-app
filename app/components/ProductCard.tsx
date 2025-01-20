import React from 'react'
import AddToCart from './AddToCart';
import RemoveFromCart from './RemoveFromCart';
// import styles from './ProductCard.module.css';


const ProductCard = () => {
  return (
    <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-blue-500'>
        <AddToCart />
        <RemoveFromCart />
    </div>
  )
}

export default ProductCard