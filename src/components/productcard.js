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
        className='imgstyle'
        />
        <br/>
        <item className='name' >
          {name}
        </item>
        <br/>
        <item className='price' >
          {price}
        </item>
        <br/>
        <button>Buy</button>

    </div>
  )
}
