'use client';
import React from 'react'
import cookies from 'js-cookie';

const RemoveFromCart = () => {
  return (
    <div>
        
            {/* when removing we need to give only the name of the parameter */}
        <button className='btn btn-primary' onClick={() => 
            {cookies.remove("response")}}>Remove</button>
    </div>
  )
}

export default RemoveFromCart;