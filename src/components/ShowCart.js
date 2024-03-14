import React,{useState,useRef ,useLayoutEffect,useEffect} from 'react'
import CartItem from './CartItem';
import Layout from './Layout';

export default function ShowCart() {
    const [Cart,setCart]=useState([{cartid:0}])
    const [isButtonDisabled,setButtonDisabled]=useState(false);
    const firstUpdate=useRef(true)
    
    useLayoutEffect(()=>
    {
      if(firstUpdate.current)
      {
        
        let copyCart=JSON.parse(localStorage.getItem("Cart"))
          if(copyCart)
          {
            setCart(copyCart);
            setButtonDisabled(false);
            
            
          }
          else
          {
            copyCart=([{cartid:0}])
            setCart(copyCart)
            setButtonDisabled(true);
           
          }
        console.log(Cart)
        firstUpdate.current=false;
        return;
      }
     })

    
    const allItems=(value)=>
    {   
       
        return(
          <div  key={value.cartid}>
          <CartItem
          cartid={value.cartid}
          cakename={value.cakename}
          sizestring={value.sizestring}
          size={value.size}
          filling={value.filling}
          number={value.number}
          sum={value.sum}
          
          />
          </div>
        
        );
        
    }    
    
     const totalsum=()=>
    {
        let cakesum=0
        for(let i=0;i<Cart.length;i++)
        {cakesum=cakesum+Cart[i].sum}
        return cakesum
    }
    let totsum=totalsum()
      function HandleClick()
      {
        localStorage.clear();
        let copyCart=[{cartid:0}]
        setCart(copyCart)
        setButtonDisabled(true)
     
      }

  return (
   
    <div style={{marginLeft:20}}>
        <Layout />
        <h2>Cart</h2>
        {Cart.map(allItems)}
        <label style={{fontSize:17, fontWeight:"bold"} }>Totalt: {totsum}<br/></label>
       <button onClick={HandleClick} disabled={isButtonDisabled}>ClearCart</button>
    </div>
  );
}
