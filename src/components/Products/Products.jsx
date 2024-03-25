import React from "react";
import './Products.css'
import strap3 from '../../assets/strap3.jpg'
import wheel  from '../../assets/wheel.jpg'
import tripod3 from '../../assets/tripod3.jpg'
import block4 from '../../assets/block4.jpg'
import { productsData } from "../../data/productsData";


const Products = () =>{

    return(
        <div className="product-cont">

            <div className="prod-head">
                
                <span className="stroke-text">YOGA EQUIPMENT</span>
            
            </div>

            <div className="prod-cont">
                <div className="equip-types">         
                    
                    <img src={strap3} alt=""/>
                    <img src={wheel} alt=""/>
                    <img src={block4} alt=""/>
                    <img src={tripod3} alt=""/>
            
                </div>

                <div className="equipment">
                    {productsData.map((product) =>(
                        <div className="equip">
                            <span>{product.name}</span>
                            <span>{product.review}</span>
                            <span>{product.status}</span>
                        </div>
                    ))}
                    

                </div>
            </div>
           


        </div>
    )
}

export default Products