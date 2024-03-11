import React,{useEffect, useState} from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { useLocation } from "react-router-dom";
import './OrderCake.css'
import Cart from '../components/Cart'
import CartItem from '../components/CartItem';
import Img16 from '../Images/BirthdayCake1.png';
import Img17 from '../Images/BirthdayCake2.png';
import Img18 from '../Images/BirthdayCake3.png';
import Img19 from '../Images/BirthdayCake4.png';
import Img20 from '../Images/BirthdayCake5.png';
import Img21 from '../Images/BirthdayCake6.png';
import Img22 from '../Images/BirthdayCake7.png';
import Img23 from '../Images/BirthdayCake8.png';
import Img24 from '../Images/BirthdayCake9.png';
import Img25 from '../Images/BirthdayCake10.png';
import Img26 from '../Images/WeddingCake1.png';
import Img27 from '../Images/WeddingCake2.png';
import Img28 from '../Images/WeddingCake3.png';
import Img29 from '../Images/WeddingCake4.png';
import Img30 from '../Images/WeddingCake5.png';
import Img31 from '../Images/WeddingCake6.png';
import Img32 from '../Images/WeddingCake7.png';
import Img33 from '../Images/WeddingCake8.png';
import Img34 from '../Images/WeddingCake9.png';
import Img35 from '../Images/WeddingCake10.png';
export default function OrderCake() {
  const [Counter,setCounter]=useState(1)
  const[selectedOption,setSelectedOption]=useState("vanilla");
  const[selectedOption2,setSelectedOption2]=useState("10");
  const [OrderSum,setOrderSum]=useState(0);
  const location=useLocation();
  const [Cart,setCart]=useState([])
  const[updatecart,setupdatecart]=useState(false)
  const[newid,setNewId]=useState(Cart.length)
// const[shoppingcart,setShoppingCart]=useState([])
  const data =location.state;
  const {id,type,name,price,description}=data;
  const formatedNumber=price.toFixed(2);
  
    const imgarray=[Img16,Img17,Img18,Img19,Img20,Img21,
      Img22,Img23,Img24,Img25,Img26,Img27,Img28,Img29,Img30,
      Img31,Img32,Img33,Img34,Img35]
    let src=imgarray[id-16];
    let portionprice=price
    
   
    function onValueChange(event)
    {
      setSelectedOption(event.target.value)
    }
    function onValueChange2(event)
    {
      setSelectedOption2(event.target.value)
    }
   
    function handleClick()
    {
      switch(selectedOption2)
      {
        case "15":
          portionprice=price+5.0
          break;
        case "30":
          portionprice=price+20.0
          break;
        case "40":
          portionprice=price+30.0
          break;
          default:
          portionprice=price;
          break;
      }
      setOrderSum(portionprice*Counter)
      setupdatecart(true);
      
    }
      useEffect(()=>{
       
       let copyCart=[...Cart];
       
       setCart([copyCart,{cartid:newid,cakename:name,size:selectedOption2,sum:OrderSum}])
       console.log(Cart)
       setupdatecart(false);
       setNewId(newid+1);
      },[updatecart])

    const allItems=(value)=>
    {
      if (value.cartid>0)
      
      return(
        <div  key={value.cartid}>
          <CartItem
          cartid={value.cartid}
          cakename={value.cakename}
          sizestring={value.sizestring}
          size={value.size}
          number={value.number}
          sum={value.sum}
          />
         
        </div>
      );
    }
    
    return (
    
    <div>
      <Layout />
      <div className='order'>
          <div className='infoaboutcake'>
            
            <img 
              src={src}
              alt="cake"
            >
            </img>
            <h3>Description</h3>
            {description}
          </div>
          <div>
          
            <h2>{name}</h2>
            <h3>${formatedNumber}</h3>
            <h4>Choose portions</h4>
            <label>
              <input 
                type='radio' 
                value="10"
                  checked={selectedOption2==="10"}
                onChange={onValueChange2} />
            
            10 portions</label><br/>
            <label>
              <input 
                type='radio' 
                value="15"
                checked={selectedOption2==="15"}
                onChange={onValueChange2} />
            15 portions (+$5.00)</label><br/>
            <label>
              <input 
                type='radio' 
                value="30" 
                checked={selectedOption2==="30"}
                onChange={onValueChange2} />
            30 portions (+$20.00)</label><br/>
            <label>
              <input 
                type='radio' 
                value="40" 
                checked={selectedOption2==="40"}
                onChange={onValueChange2} />
              
            40 portions (+$25.00</label><br/>
            
            <h4> Choose filling</h4>
            <label>
              <input 
                type='radio' 
                value="vanilla"
                  checked={selectedOption==="vanilla"}
                onChange={onValueChange} />
            
            vanilla</label><br/>
            <label>
              <input 
                type='radio' 
                value="chocholate"
                checked={selectedOption==="chocholate"}
                onChange={onValueChange} />
            chocholate</label><br/>
            <label>
              <input 
                type='radio' 
                value="nutella" 
                checked={selectedOption==="nutella"}
                onChange={onValueChange} />
              
            nutella</label><br/>
            <label>
              <input 
                type='radio' 
                value="red satin"
                checked={selectedOption==="red satin"}
                onChange={onValueChange} />
              red satin</label><br/>
            <br/>
           
            <label style={{fontWeight:'bold'}}>Message<br/>
            <textarea rows={8} cols={40}></textarea><br/></label>
            <br/>
            <button onClick={()=>Counter===1?setCounter(1):setCounter(Counter-1)}>-</button>
            
            <input className='inputbutton' readOnly value={Counter} ></input>
             
 
            <button onClick={()=>setCounter(Counter+1)}>+</button><br/><br/>
            <button onClick={handleClick}>
           
              Add to cart</button>
              {Cart.map(allItems)}
          </div>
          
    </div>
    <Footer />
      </div>
      
  )
}
