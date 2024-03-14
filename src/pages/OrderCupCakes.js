/*Page for ordering cupcakes */
import Menu from "../components/Menu";
import Footer from "../components/Footer"
import "./OrderCake.css"
import { Link, useLocation } from "react-router-dom"
import React,{useEffect, useState,useRef,useLayoutEffect} from 'react';
import Img1 from '../Images/CupCake1.png';
import Img2 from '../Images/CupCake2.png';
import Img3 from '../Images/CupCake3.png';
import Img4 from '../Images/CupCake4.png';
import Img5 from '../Images/CupCake5.png';
import Img6 from '../Images/CupCake6.png';
import Img7 from '../Images/CupCake7.png';
import Img8 from '../Images/CupCake8.png';
import Img9 from '../Images/CupCake9.png';
import Img10 from '../Images/CupCake10.png';
import Img11 from '../Images/CupCake11.png';
import Img12 from '../Images/CupCake12.png';
import Img13 from '../Images/CupCake13.png';
import Img14 from '../Images/CupCake14.png';
import Img15 from '../Images/CupCake15.png';

export default function OrderCupCakes() {
  /*Hooks */
  const [Counter,setCounter]=useState(1)
  const [selectedOption,setSelectedOption]=useState("vanilla");
  const [selectedOption2,setSelectedOption2]=useState("10");
  const [isButtonDisabled,setButtonDisabled]=useState(true);
  const [Cart,setCart]=useState([{cartid:0}])
  /*For getting data from link */
  const location=useLocation();
  const data =location.state;
  /*For controlling att LayoutEffect only will run once */
  const firstUpdate=useRef(true);

  /*destruct data from link */
  const {id,type,name,price,description}=data;
  const formatedNumber=price.toFixed(2);
  /*matching image with the choosen product */
  const imgarray=[Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9,Img10,
    Img11,Img12,Img13,Img14,Img15]
  let src=imgarray[id-1];
  /*takes care of the radio buttons for filling */
  function onValueChange(event)
  {
    setSelectedOption(event.target.value)
  }
  /*takes care of the radio buttons for box size */
  function onValueChange2(event)
  {
    setSelectedOption2(event.target.value)
  }
  /*Before the page is shown will data from localStorage be put in Cart(array of cartitem objects) */
  useLayoutEffect(()=>
  {
    /*useRef */
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
  /*When user has clicked 'Add to cart' */
  function handleClick()
  {/*If the Cart is empty*/
    setButtonDisabled(true)
    if(Cart.cartid===0)
      {setCart([{cartid:1,cakename:name,price:formatedNumber,size:selectedOption2,sizestring:"Boxsize: ",filling:selectedOption,number:Counter,sum:(+selectedOption2*price*Counter)}]);}
    else
    {/*Puts the current item last in Cart */
    console.log(+selectedOption2)
      let nextid=Cart.length+1;
      setCart([...Cart,{cartid:nextid,cakename:name,price:formatedNumber,size:selectedOption2,sizestring:"Box size: ",filling:selectedOption,number:Counter,sum:(+selectedOption2*price*Counter)}]);
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
        <div className="infoaboutcake">
          <img 
            src={src}
            alt="cake"
          >
          </img>
          <h3>Description</h3>
          <div className="description">
            {description}
          </div>
        </div>
        <div>
          <h2>{name}</h2>
          <h3>${formatedNumber}</h3>
          <h4> Choose box size</h4>
          <label>
            <input 
              type='radio' 
              value="1"
              checked={selectedOption2==="1"}
              onChange={onValueChange2} 
            />
            1 cupcake
          </label><br/>
          <label>
            <input 
              type='radio' 
              value="6"
              checked={selectedOption2==="6"}
              onChange={onValueChange2} 
            />
           6 cupcakes
          </label><br/>
          <label>
            <input 
              type='radio' 
              value="12" 
              checked={selectedOption2==="12"}
              onChange={onValueChange2} 
            />
            12 cupcakes
          </label><br/>
          <label>
            <input 
              type='radio' 
              value="25" 
              checked={selectedOption2==="25"}
              onChange={onValueChange2} 
            />
            25 cupcakes
          </label><br/>
          <h4> Choose filling</h4>
          <label>
            <input 
              type='radio' 
              value="vanilla"
              checked={selectedOption==="vanilla"}
              onChange={onValueChange} 
            />
            vanilla</label><br/>
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
  );
}