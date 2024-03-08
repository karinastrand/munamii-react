import React from 'react';
import Layout from '../components/Layout.js';
import Data from "../components/Data.json";
import Productcard from "../components/Productcard.js"
import './Productpage.css';
import Footer from '../components/Footer.js';

const Productpage= () =>
{ 
  const allCupCakes=(values)=>{
    if(values.type==="Cupcake")
    return(

      <div className='cake' key={values.id}>
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
    if(values.type==="Birthdaycake" )
    return(
      <div className='cake' key={values.id}>
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
      <div className='cake' key={values.id}>
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
        <Layout />
        <h1>Products</h1>
        
        <div  className="cakes">
        <h2>CupCakes</h2>
        <div className="cakedisplay">
          {Data.map(allCupCakes)}
        </div>
          
        </div>
        
        <div className='cakes'>
        <h2>BirthdayCakes</h2>
          <div className="cakedisplay">
            {Data.map(allBirthdayCakes)}
          </div>
        </div>
        
        <div className='cakes'>
        <h2>WeddingCakes</h2>
          <div className="cakedisplay">
            {Data.map(allWeddingCakes)}
          </div>
        </div>
        <br/><br/>
        
        
        <Footer />
    </div>
  )
}
export default Productpage;
