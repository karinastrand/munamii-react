/*Show Cart */
import React,{useState,useRef ,useLayoutEffect,useEffect} from 'react'
import CartItem from '../components/CartItem';
import Menu from '../components/Menu';
import Footer from '../components/Footer'
import './ShowCart.css'
export default function ShowCart() {
  /*Hooks*/
    const [Cart,setCart]=useState([{cartid:0}])
    const [isButtonDisabled,setButtonDisabled]=useState(false);
    /*To ensure useLayoutEffetcs only runs before the page is rendered*/
    const firstUpdate=useRef(true)
    
    /*Loads the array of cartitems, Cart with items from localStorage */
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
        firstUpdate.current=false;
        return;
      }
     })

    /*All items in Cart will be sent to CartItem for display with pops  */ 
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
    /*Calculates the sum of the items in the cart */  
    const totalsum=()=>
    {
      let cartsum=0
      let cartres=0
      for(let i=0;i<Cart.length;i++)
      {
        cartsum+=Cart[i].sum
      }
        
      if (typeof(cartsum)!="number")
      {
        cartres=0
      }  
      else if (cartsum>0)
      {
        cartres=+cartsum
        cartres=cartsum.toFixed(2)
      }
     return cartres
    }
    let cartres=totalsum()

    /*When user clicks on clear cart */
    function HandleClick()
    { /*Clear localStorage */
      localStorage.clear();
      let copyCart=[{cartid:0}]
      setCart(copyCart)
      setButtonDisabled(true)
      cartres=0;
    }
    /*When user clicks on check out, need to be improved */
    function HandleClick2()
    {
      localStorage.clear();
      let copyCart=[{cartid:0}]
      setCart(copyCart)
      cartres=0;
      
    }
  return (
    <div >
        <Menu />
        <div className='cartpage' >
          <div >
              <h2>Cart</h2>
              {Cart.map(allItems)}
              <label style={{fontSize:17, fontWeight:"bold"} }>In total: ${cartres}<br/></label>
              <button onClick={HandleClick} disabled={isButtonDisabled}>ClearCart</button>
          </div>
          <div className='cartpage2'>
            <h2>Check out</h2>
            <h3>Info</h3>
            <p style={{fontSize:14, alignItems:"center"}}>
                Fill in name and email. Click on 'Check out'.<br/> You will get an email with <br/>
                confirmation and details about payment.<br/> When you click on check out your <br/>
                cart will be emptied.<br/> Thank you for shopping here!
            </p>
              <div className='checkout'>
              <label>Name: <br/><input style={{width:270}}></input></label><br/><br/>
              <label>Email: <br/><input style={{width:270}}></input></label><br/><br/>
              <label>Message:<br/><textarea cols={35} rows={5}></textarea></label><br/><br/>
              <button onClick={HandleClick2}>Check out</button>
          </div>
        </div>
       </div>
       < Footer/>
    </div>
  );
}
