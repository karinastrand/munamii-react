  import React from 'react'
  import img from './Images/StartCake.png'
  import './startpage.css'
  
  import Info from './info.js';
  import Footer from './footer.js';
  export default function startpage() {
    return (
      <div>
       
        <div className='rightSide'>
            <img src={img} alt="startcake"/>
            <Info />  
        </div>
        <Footer />
        </div>
    )
  }
  
