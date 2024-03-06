import React from 'react'
import './info.css'
import Img from '../images/munamii.png';
export default function info() 
{
  return (
    <div className='info'>
            <img src={Img} alt="logo" />
            <h2>We deliver to your home!</h2>
            Hi!<br/>
            Welcome to Munamii Cakery!<br/>
            We offer you the most delicious cakes and cupcakes <br/>
            for all kinds of events and celebrations.<br/> 
            Browse around to discover what you would like to buy.
     </div>           
  );
}
