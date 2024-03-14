import React, {useState} from 'react'

export default function CartItem(props) {
  const{cartid, cakename,price, sizestring,size,filling,number,sum}=props
  if (cartid>0)
  {
  return(
    
      <div>
      
      <label style={{fontWeight:"bold", fontSize:15}}>{cakename}<br/></label>
      price: {price}<br/>
      {sizestring} 
      {size}<br/>
      filling: {filling}<br/>
      number: {number}<br/>
      <label style={{fontWeight:"bold"}}>sum: {sum}</label><br/>
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
