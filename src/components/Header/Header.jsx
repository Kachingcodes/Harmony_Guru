import React from 'react';
import './Header.css'
import Capture3 from '../../assets/Capture3.png'

const Header = () => {
  return (
    <div className='header'>
        <img src={Capture3} alt ="" className='logo'/>
    
        <ul className='header2'>
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
        </ul>
        
    </div>
  )
}

export default Header
