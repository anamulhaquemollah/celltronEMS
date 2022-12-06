import { useState } from "react";

import "./singleproduct.css"

import hoodie from "../../../assets/hoodie.png"; 
import shippingtruck from "../../../assets/shippingtruck.png"; 
import Rating from "./Rating";


const SingleProduct = () => {
    const [rating, setRating] = useState(2); 

  return (
    <div className='singleproduct'>
         <div className="product__container">
            <div className="product__image">
                <img src={hoodie} alt="" />
            </div>
            <div className="product__details">
                <h1 className="product__title">Lorem ipsum dolor sit amet consectet adipisicing</h1>
                <Rating rating={rating}/>
                <div className="product__details-footer">
                    <h1 className="product__price"><span className="price__currency-tag">$</span><span className="price__principal">66</span><sup className="price__decimal">24</sup></h1>
                    <div className="product__delivery">
                        <img className="product__shipping-img" src={shippingtruck} alt="" />
                        <p className="express">Express Delivery</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct