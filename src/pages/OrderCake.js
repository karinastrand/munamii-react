import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import './OrderCake.css'
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
  const location=useLocation();
  const data =location.state;
  const {id,type,name,price}=data;
    const imgarray=[Img16,Img17,Img18,Img19,Img20,Img21,
      Img22,Img23,Img24,Img25,Img26,Img27,Img28,Img29,Img30,
      Img31,Img32,Img33,Img34,Img35]
    let src=imgarray[id-16];
    return (
    <div>
      <Layout />
      <div className='order'>
          <div >
            <img 
              src={src}
              alt="cake"
              style={{padding:20}}
            >
            </img>
            <h3>Description</h3>
          </div>
          <div>
            <h2>{name}</h2>
            <h3>{price}</h3>
            <h4>Choose portions</h4>
            10 portions
            <h4> Choose filling</h4>
            vanillia
            <h4>Message to us</h4>
            <input></input>
            Number:<input></input>
            <button>Place in cart</button>
          </div>
          
    </div>
    <Footer />
      </div>
      
  )
}
