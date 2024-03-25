import React from "react";
import './Reasons.css'
import acro1 from '../../assets/acro1.jpg';
import yoga4 from '../../assets/yoga4.jpg';
import acro3 from '../../assets/acro3.jpg';
import yoga6 from '../../assets/yoga6.jpg';
import yinyang from '../../assets/yinyang.png';
import bend_bg from '../../assets/bend_bg.png';
import image5 from '../../assets/image5-new.png';
import lotus_bg from '../../assets/lotus_bg.png';


const Reasons = () =>{
    return(
        <div className="Reasons" id="reasons">
            <div className="left-reas">

                <img src={acro1} alt=""/>
                <img src={yoga4} alt=""/>
                <img src={acro3} alt=""/>
                <img src={yoga6} alt=""/>

            </div>


            <div className="right-reas">
                <span>Some reasons</span>

                <div>
                    <span className="stroke-text">Why </span>
                    <span>choose us?</span>
                </div>

                <div className="details-r">
                    <div>
                        <img src={lotus_bg} alt=""/>
                        <span>Over 100+ expert instructors</span>
                    </div>

                    <div>
                        <img src={lotus_bg} alt=""/>
                        <span>Train smarter and better than before</span>
                    </div>

                    <div>
                        <img src={lotus_bg} alt=""/>
                        <span>1 free program for new members</span>
                    </div>

                    <div>
                        <img src={lotus_bg} alt=""/>
                        <span>Reliable partners</span>
                    </div>

                </div>
                <span style={{
                    color: "purple", 
                    fontWeight: "bold",
                }                 
                }>OUR PARTNERS</span>

                <div className="partners">
                    <img src={bend_bg} alt=""/>
                    <img src={yinyang} alt=""/>
                    <img src={image5} alt=""/>
                </div>
            </div>

        </div>
    )
}

export default Reasons