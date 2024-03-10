import Layout from "../components/Layout";
import Footer from "../components/Footer"
import "./OrderCupCakes.css"
import { useLocation } from "react-router-dom";
import {useState} from "react-router-dom";    
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
  const location=useLocation();
  const data =location.state;
  const {id,type,name,price}=data;
  const imgarray=[Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9,Img10,
    Img11,Img12,Img13,Img14,Img15]
  let src=imgarray[id-1];
 
    return(
        <div>
        <Layout />
        <div className='order'>
          <div >
            <img 
              src={src}
              alt="cake"
              style={{padding:20 ,maxWidth:500} }
            >
            </img>
            <h3>Description</h3>
          </div>
          <div>
            <h2>{name}</h2>
            <h3>{price}</h3>
            <h4> Choose box size</h4>
            1 cupcake
            <h4> Choose filling</h4>
            vanillia
            <h4>Message to us</h4>
            <input></input>
            Number of boxes:<input></input>
            <button>Place in cart</button>
          </div>
          
    </div>
    <Footer />
        </div>
    );
  }