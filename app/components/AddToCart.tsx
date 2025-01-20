'use client';
import React from 'react'
import cookies from 'js-cookie';

const AddToCart = () => {
  return (
    <div>
        <button className='btn btn-primary' onClick={() => 
            {cookies.set("response", "clicked", {expires: 1/24})}}>Add to Cart</button>
    </div>
  )
}

export default AddToCart