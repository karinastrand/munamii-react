import React, {useState} from 'react'

export default function CartItem(props) {
  const{cartid, cakename, sizestring,size,number,sum}=props
  return(
    
      <div>
      cartid: {cartid},
      cakename:{cakename},
      sizestring:{sizestring},
      size:{size},
      number:{number},
      sum:{sum}
   
      </div>
    );

}
