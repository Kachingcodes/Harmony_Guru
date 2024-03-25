import react from "react";
import './Guru.css';
import Header from "./Header/Header";
import guru2_bg from '../assets/guru2_bg.png';
import yinyang2 from "../assets/yinyang2.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import {motion} from 'framer-motion'



const Guru =()=> {

   const transition ={type: 'spring', duration: 3}

    return(
        <div className="guru">
            <div className="blur guru-blur"></div>
            <div className="leftside"> 
                 <Header/> 
                 
                 {/*The best ad section starts here*/} 
                    <div className="the-best">

                        <motion.div

                            initial={{left:'238px'}}
                            whileInView={{left:'8px'}}
                            transition={{...transition, type:'tween'}}

                            ></motion.div>

                        <span>The best yoga group you can get</span>
                    </div>


                    {/*Guru heading starts here*/} 
                    <div className="guru-text">
                            <div>
                                <span className="stroke-text">Begin </span>
                                <span>Your Yoga</span>
                            </div>

                            <div>
                                <span>Journey</span>
                                <span className="stroke-text"> Here</span>
                            </div>

                            <div>
                                <span>Here we will help to guide you on your yoga journey through mindful movement and surrounded by a compassionate community.
                                </span>
                            </div>
                    </div>


                    {/*Figures*/}
                    <div className="figs">
                        <div> 
                            <span>+100</span>
                            <span>expert teachers</span>
                        </div>

                        <div>
                            <span>+600</span>
                            <span>members joined</span>
                        </div>

                        <div>
                            <span>+50</span>
                            <span>yoga studios</span>
                        </div>
                    </div>

                    
                    {/*Guru Buttons*/}
                    <div className="g-button">
                        <buttons className="btn">Get Started</buttons>
                        <buttons className="btn">Learn More</buttons>
                    </div>

            </div>

            <div className="rightside">
                <button className="btn">Join Now</button>


                
                    
                <motion.div

                    initial={{right:'-1rem'}}
                    whileInView={{right:'4rem'}}
                    transition={transition}
                    className="heart-rate">

                    <img src={Heart} alt=""></img>
                        <span>Heart Rate</span>
                        <span>116 bpm</span>

                </motion.div>

                   <img src={guru2_bg} alt="" className="guru2_bg"/>
                    <motion.img 
                    initial={{right: '3rem'}}
                    whileInView={{right:'12rem'}}
                    transition={transition}
                    
                    
                    src={yinyang2} alt="" className="yinyang2"/>

                {/*Calories*/}
                <motion.div 

                initial={{right:"37rem"}}
                whileInView={{right:"28rem"}}
                transition={transition}
                className="calories">

                    <img src={Calories} alt="" />
                        <div>
                            <span>Calories Burned</span>
                            <span>220 kcal</span>

                        </div>

                </motion.div>

                
            </div>

        </div>
    
    )
}

export default Guru;