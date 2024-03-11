import Layout from "../components/Layout";
import Footer from "../components/Footer"
import { useState } from 'react';
import "./OrderCake.css"
import { useLocation } from "react-router-dom";   
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


export default function OrderCupCakes(props) {
  const[selectedOption,setSelectedOption]=useState("vanilla");
  const[selectedOption2,setSelectedOption2]=useState("10"); 
    const [Counter,setCounter]=useState(1)
  const location=useLocation();
  const data =location.state;
  
  const {id,type,name,price,description}=data;
  const imgarray=[Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9,Img10,
    Img11,Img12,Img13,Img14,Img15]
  let src=imgarray[id-1];
 
  function onValueChange(event)
  {
    setSelectedOption(event.target.value)
  }
  function onValueChange2(event)
  {
    setSelectedOption2(event.target.value)
  }
    return(
        <div>
        <Layout />
        <div className='order'>
          <div className="infoaboutcake">
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
            <h3>{price}</h3>
            <h4> Choose box size</h4>
            <label>
              <input 
                type='radio' 
                value="1"
                  checked={selectedOption2==="10"}
                onChange={onValueChange2} />
            
            1 cupcake</label><br/>
            <label>
              <input 
                type='radio' 
                value="6"
                checked={selectedOption2==="6"}
                onChange={onValueChange2} />
            6 cupcakes</label><br/>
            <label>
              <input 
                type='radio' 
                value="12" 
                checked={selectedOption2==="12"}
                onChange={onValueChange2} />
            12 portions</label><br/>
            <label>
              <input 
                type='radio' 
                value="12" 
                checked={selectedOption2==="25"}
                onChange={onValueChange2} />
            25 portions</label><br/>
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
            
            <label style={{fontWeight: 'bold'}}>Message<br/>
            <textarea rows={8} cols={40}></textarea><br/></label>
            <br/>
            <button onClick={()=>Counter>1?setCounter(Counter-1):setCounter(1)}>-</button>
            <input className='inputbutton' value={Counter}  ></input>
            <button onClick={()=>setCounter(Counter+1)}>+</button><br/><br/>
            <button>Add to cart</button>
          </div>
          
    </div>
    <Footer />
        </div>
    );
  }