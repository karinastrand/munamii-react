import React, {useState} from 'react'

export default function CartItem(props) {
  const{cartid, cakename,price, sizestring,size,filling,number,sum}=props
  
  if (cartid>0)
  {
  return(
    
      <div style={{fontSize:12}}>
      
      <label style={{fontWeight:"bold", fontSize:15}}>{cakename}<br/></label>
      price: ${price}<br/>
      {sizestring} 
      {size}<br/>
      filling: {filling}<br/>
      number: {number}<br/>
      <label style={{fontWeight:"bold", fontSize:14}}>sum: ${sum.toFixed(2)}</label><br/>
      ------------------------------
      </div>
    );
  }
  else
  {
    return(
      <p>Your cart is empty</p>
    )
  }
}
