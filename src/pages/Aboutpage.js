import React from 'react'
import './Aboutpage.css'
import Menu from '../components/Menu.js'
import Footer from '../components/Footer.js';
export default function Aboutpage() {
  return (
    <div>
       <Menu />
        <div className='about'>
        <h1>About us</h1>
            <p>
                At Munamii Cakery, each cake,<br/> each box of cupcakes that we make <br/>
                has a very special value for us.<br/> We not only want to bring a dessert 
                to your table<br/> but rather a unique experience for you,<br/> 
                which will become an unforgettable memory.<br/> 
                We have been in the pastry market for more<br/> than 8 years and now 
                we offer<br/> you a new way to shop through our website.
            </p>
            </div>
        <Footer />
    </div>
  )
}
