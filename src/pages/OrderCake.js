/*Order page for cakes */
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import './OrderCake.css';
import { Link, useLocation } from "react-router-dom";
import React,{useEffect, useState ,useRef ,useLayoutEffect} from 'react';
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
  /* Hooks */
  const [Counter,setCounter]=useState(1)
  const [selectedOption,setSelectedOption]=useState("vanilla");
  const [selectedOption2,setSelectedOption2]=useState("10");
  const [isButtonDisabled,setButtonDisabled]=useState(true);
  const [Cart,setCart]=useState([{cartid:0}])
  /*For controlling att LayoutEffect only will run once */
  const firstUpdate=useRef(true);
  /*For getting data from link */
  const location=useLocation();
  const data =location.state;

  /*destruct data from link */
  const {id,type,name,price,description}=data;
  const formatedNumber=price.toFixed(2);
  /*matching image with the choosen product */
  const imgarray=[Img16,Img17,Img18,Img19,Img20,Img21,
    Img22,Img23,Img24,Img25,Img26,Img27,Img28,Img29,Img30,
    Img31,Img32,Img33,Img34,Img35]
  let src=imgarray[id-16];
  let portionprice=price;
  /*Before the page is shown will data from localStorage be put in Cart(array of cartitem objects) */
  useLayoutEffect(()=>
  { /*UseRef*/
    if(firstUpdate.current)
    { 
      /*puts the content in a copy of Cart*/
      let copyCart=JSON.parse(localStorage.getItem("Cart"))
      /*If there are products in the storage they will be put in Cart else will cartid=0 */
        if(copyCart)
        {
          setCart(copyCart);
        }
        else
        {
          copyCart=({cartid:0,cartName:"empty"})
          setCart(copyCart)
        }
      firstUpdate.current=false;
      return;
    }
  })
  /*takes care of the radio buttons for filling */
  function onValueChange(event)
  {
    setSelectedOption(event.target.value)
  }
  /*takes care of the radio buttons for portions */
  function onValueChange2(event)
  {
    setSelectedOption2(event.target.value)
  }
  /*When user has clicked 'Add to cart' */ 
  function handleClick()
  {
    /*price for selected number of portions */
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
    let cakeprice=portionprice.toFixed(2);
    console.log(typeof(cakeprice))
    setButtonDisabled(true)
    /*If the Cart is empty*/
    if(Cart.cartid===0)
    {setCart([{cartid:1,cakename:name,price:cakeprice,size:selectedOption2,sizestring:"Portions: ",filling:selectedOption,number:Counter,sum:(portionprice*Counter)}]);}
    else
    {
      /*Puts the current item last in Cart */
      let nextid=Cart.length+1;
      setCart([...Cart,{cartid:nextid,cakename:name,price:cakeprice,size:selectedOption2,sizestring:"Portions: ",filling:selectedOption,number:Counter,sum:(portionprice*Counter)}]);
    }
    
  }
  /*When the item is placed in the cart it's time for localStorage to be updated, if it is empty the 'show cart' 
  will be disabled */
  useEffect(()=>
  {
  
    localStorage.setItem("Cart",JSON.stringify(Cart));
    console.log(Cart)
    if(Cart.cartid===0)
    setButtonDisabled(true);
    else
    setButtonDisabled(false)
  },[Cart]);
    
  return (
    <div>
      <Menu />
      <div className='order'>
        <div className='infoaboutcake'>
          <img 
            src={src}
            alt="cake"
          >
          </img>
          <h3>Description</h3>
          <div className='description'>
            {description}
          </div>
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
              onChange={onValueChange2} 
            />
            10 portions
          </label><br/>
          <label>
            <input 
              type='radio' 
              value="15"
              checked={selectedOption2==="15"}
              onChange={onValueChange2} 
            />
            15 portions (+$5.00)
          </label><br/>
          <label>
            <input 
              type='radio' 
              value="30" 
              checked={selectedOption2==="30"}
              onChange={onValueChange2} 
            />
            30 portions (+$20.00)
          </label><br/>
          <label>
            <input 
              type='radio' 
              value="40" 
              checked={selectedOption2==="40"}
              onChange={onValueChange2} 
            />
            40 portions (+$25.00)
          </label><br/>            
          <h4> Choose filling</h4>
          <label>
            <input 
              type='radio' 
              value="vanilla"
              checked={selectedOption==="vanilla"}
              onChange={onValueChange} 
            />
            vanilla
          </label><br/>
          <label>
            <input 
              type='radio' 
              value="chocholate"
              checked={selectedOption==="chocholate"}
              onChange={onValueChange} 
            />
            chocholate
          </label><br/>
          <label>
            <input 
              type='radio' 
              value="nutella" 
              checked={selectedOption==="nutella"}
              onChange={onValueChange} 
            />
            nutella
          </label><br/>
          <label>
            <input 
              type='radio' 
              value="red satin"
              checked={selectedOption==="red satin"}
              onChange={onValueChange} 
            />
            red satin
          </label><br/>
          <br/>
          <button onClick={()=>Counter===1?setCounter(1):setCounter(Counter-1)}>-</button>
          <input className='inputbutton' readOnly value={Counter} ></input>
          <button onClick={()=>setCounter(Counter+1)}>+</button><br/><br/>
          <button onClick={handleClick}> Add to cart</button><br/><br/>
          <Link to="/showcart" >
            <button disabled={isButtonDisabled}>ShowCart</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
