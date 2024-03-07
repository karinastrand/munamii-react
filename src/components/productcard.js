import React from 'react'
import "./productcard.css"
export default function productcard(data) {
  const {id, type, name, price,src}=data;
  return (
    <div className='data'>
        <input type="hidden" id={id} />
        <input type="hidden" id={type} />
        <img 
        src={src}
        alt="cake" 
        max-width="30%" 
        height="auto"
        />
        <h6>{name}</h6>
        <p>{price}</p>
        <button>Buy</button>

    </div>
  )
}
