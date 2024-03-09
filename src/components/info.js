import React from 'react'
import './Info.css'
import Img from '../Images/munamii.png';
import {Link} from 'react-router-dom';
export default function Info() 
{
  
  
  return (
    <div className='info'>
      <img src={Img} alt="logo" />
      <div className='infotext'>
            
            <h2>We deliver to your home!</h2>
            <p>Hi!<br/>
            Welcome to Munamii Cakery!<br/>
            We offer you the most delicious <br/> cakes and cupcakes <br/>
            for all kinds of events and celebrations.<br/> 
            Browse around to discover what <br/>you would like to buy.</p>
       </div>  
       <Link to="/Products">
        <button className='buttonlink'>Products</button> 
       </Link>
     </div>        
  );
}
