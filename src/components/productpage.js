import React from 'react';
import Menu from './menu.js';
import Data from "./data.json";
import Productcard from './productcard.js';
import './productpage.css';
import Footer from './footer.js';
export default function productpage() {
  const allCupCakes=(values)=>{
    if(values.type==="Cupcake")
    return(
      <div>
        <Productcard
        src={values.src}
        name={values.name}
        price={values.price}
        id={values.id}
        type={values.type}
        />
      </div>
    );
  }
  const allBirthdayCakes=(values)=>{
    if(values.type==="Birthdaycake")
    return(
      <div>
        <Productcard
        src={values.src}
        name={values.name}
        price={values.price}
        id={values.id}
        type={values.type}
        />
      </div>
    );
  }
  const allWeddingCakes=(values)=>{
    if(values.type==="Weddingcake")
    return(
      <div>
        <Productcard
        src={values.src}
        name={values.name}
        price={values.price}
        id={values.id}
        type={values.type}
        />
      </div>
    );
  }
  return (
    <div>
        <Menu />
        <h1>Products</h1>
        <h2>CupCakes</h2>
        <div className='cakes'>
          
          {Data.map(allCupCakes)}
        </div>
        <h2>BirthdayCakes</h2>
        <div className='cakes'>
          {Data.map(allBirthdayCakes)}
        </div>
        <h2>WeddingCakes</h2>
        <div className='cakes'>
          {Data.map(allWeddingCakes)}
        </div>
        <Footer />
    </div>
  )
}
