import React from "react";
import './Join.css'
import emailjs from '@emailjs/browser'
import { useRef } from "react";

const Join =() =>{

    const form =useRef();

    const sendEmail =(e) =>{
        e.preventDefault();

        emailjs.sendForm('YOUR_SEVRICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        .then((result) => {
            console.log(result.text);

        }, (error) => {
            console.log(error.text);
        });
    };

    return(
        <div className="join" id="join-us">

            <div className="left-j">
                <hr/>
                <div>
                    <span className="stroke-text">READY TO </span>
                    <span>LEVEL UP</span>
                    
                </div>

                <div>
                    
                    <span>YOUR BODY </span>
                    <span className="stroke-text">WITH US?</span>
                </div>
               
            </div>
            
            <div className="right-j">

                <form ref={form} className="email-cont" onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder="Enter Your Email Address"/>
                        <button className="btn btn-j">Join Now</button>
                </form>

            </div>
       
        </div>
    )
}

export default Join