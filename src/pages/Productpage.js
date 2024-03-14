/*Productpage, the main items here are productcards */
import React from 'react';
import Menu from '../components/Menu.js';
import Data from "../components/Data.json";
import Productcard from "../components/Productcard.js";
import './Productpage.css';
import Footer from '../components/Footer.js';
import AnchorLink  from "react-anchor-link-smooth-scroll";
const Productpage= () =>
{ 
  /* selects all products with type 'Cupcake'in the productlist (Data.json) and
  sends the content as props do Productcard  */
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
        description={values.description}
        />
      </div>
    );
  }
  /* selects all products with type 'Birthdaycake'in the productlist (Data.json) and
  sends the content as props do Productcard  */
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
        description={values.description}
        />
      </div>
    );
  }
  /* selects all products with type 'WeddingCake'in the productlist (Data.json) and
  sends the content as props do Productcard  */
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
        description={values.description}
        />
      </div>
    );
  }
  return (
    <div>
        <Menu />
        <div className='products'>
          <h1>Products</h1>
          <div  className="cakes">
            <h2 id="Cupcakes">CupCakes</h2>
            <AnchorLink href="#Birthdaycakes">
              <button >Birthdaycakes</button>
            </AnchorLink>
            <AnchorLink href="#Weddingcakes">
              <button >Weddingcakes</button>
          </AnchorLink>
            {/* All cupcakes  */}
            <div className="cakedisplay">
              {Data.map(allCupCakes)}
            </div>
          </div>
            <div className='cakes'>
            <h2 id="Birthdaycakes">BirthdayCakes</h2>
            <AnchorLink href="#Cupcakes">
              <button >Cupcakes</button>
            </AnchorLink>
            <AnchorLink href="#Weddingcakes">
              <button >Weddingcakes</button>
            </AnchorLink>
            {/* All birthdaycakes  */}
            <div className="cakedisplay">
              {Data.map(allBirthdayCakes)}
            </div>
            </div>
            <div className='cakes'>
            <h2 id="Weddingcakes">WeddingCakes</h2>
            <AnchorLink href="#Cupcakes">
              <button >Cupcakes</button>
            </AnchorLink>
            <AnchorLink href="#Birthdaycakes">
              <button >Birthdaycakes</button>
          </AnchorLink>
            {/* All weddingcakes */}
            <div className="cakedisplay">
              {Data.map(allWeddingCakes)}
            </div>
            </div>
            <br/><br/>
          </div> 
        <Footer />
    </div>
  )
}
export default Productpage;
