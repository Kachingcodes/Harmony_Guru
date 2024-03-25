import React from "react";
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Capture3 from '../../assets/Capture3.png'

const Footer =() =>{
    return(
        <div className="footer-con">
             <hr/>

            <div className="footer">

            <div className="logo-foot">
                <img src={Capture3} alt="" />
            </div>
           
            <div className="social">
                <img src={Github} alt=""/>
                <img src={Instagram} alt=""/>
                <img src={LinkedIn} alt=""/>
            </div>

           
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
        </div>
    )
}

export default Footer