import React,{useState,useRef ,useLayoutEffect,useEffect} from 'react'
import CartItem from '../components/CartItem';
import Menu from '../components/Menu';
import Footer from '../components/Footer'
import './ShowCart.css'
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
          price={value.price}
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
        let cartsum=0
        let cartres=0
        for(let i=0;i<Cart.length;i++)
        {cartsum+=Cart[i].sum}
        
        if (typeof(cartsum)!="number")
        {
          cartres=0
        }  
        else if (cartsum>0)
        {
          cartres=+cartsum
          cartres=cartsum.toFixed(2)
        }
        console.log(typeof(cartres))
        
        return cartres
    }
    let cartres=totalsum()
      function HandleClick()
      {
        localStorage.clear();
        let copyCart=[{cartid:0}]
        setCart(copyCart)
        setButtonDisabled(true)
        cartres=0;
      }

  return (
   
    <div style={{marginLeft:20}}>
        <Menu />
        <div style={{display:"flex"}}>
        <div style={{width:200}} >
            <h2>Cart</h2>
            {Cart.map(allItems)}
            <label style={{fontSize:17, fontWeight:"bold"} }>In total: ${cartres}<br/></label>
            <button onClick={HandleClick} disabled={isButtonDisabled}>ClearCart</button>
       </div>
       <div>
         <h2>Check out</h2>
         <h3>Info</h3>
         <p style={{fontSize:14}}>
            Fill in name and email. Click on 'Check out'. You will get an email with <br/>
            confirmation and details about payment. When you click on check out your <br/>
            cart will be emptied. Thank you for shopping here!
         </p>
         <div className='checkout'>
         
         <label>Name: <br/><input style={{width:270}}></input></label><br/><br/>
         <label>Email: <br/><input style={{width:270}}></input></label><br/><br/>
         <label>Message:<br/><textarea cols={35} rows={5}></textarea></label><br/><br/>
         <button>Check out</button>
          
         </div>
       </div>
       </div>
       < Footer/>
    </div>
  );
}
