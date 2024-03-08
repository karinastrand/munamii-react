import React from 'react'
import "./Productcard.css"
export default function Productcard(Data) {
  const {id, type, name, price,src}=Data;
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
        <div className='name' >
          {name}
        </div>
        <br/>
        <div className='price' >
          {price}
        </div>
        <br/>
        <button>Buy</button>

    </div>
  )
}
