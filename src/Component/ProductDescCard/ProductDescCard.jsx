import React from 'react'
import { RxCross2 } from "react-icons/rx";
import './productDescCard.css'
import { BsDash } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
const ProductDescCard = ({ closeProductDesc }) => {
    return (
        <div className='productDescWrapper'>
            <div className="wrapper">
                <div className="img-area">
                    <div className="inner-area">
                        <img
                            src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                            alt=""
                        />
                    </div>
                </div>
                <div className="icon arrow">
                    {/* <RxCross2 /> */}
                </div>
                <div className="icon dots" onClick={() => closeProductDesc(false)}>
                    <RxCross2 />
                </div>
                <div className="name">Turkish eggs with Lebanese flatbread</div>
                <div className="about">2 poached organic eggs, chili butter, lemon yogurt & avocado</div>
                <div className="social-icons">
                    <a href="#" className="fb">
                        <p>hello</p>
                    </a>
                    <a href="#" className="twitter">
                        <p>hello</p>
                    </a>
                    <a href="#" className="insta">
                        <p>hello</p>
                    </a>
                    <a href="#" className="yt">
                        <p>hello</p>
                    </a>
                </div>
                <div className="buttons">
                    {/* <button>Message</button> */}
                    <div className="selectionBtn">
                        <button><FaPlus /></button>
                        <span>2</span>
                        <button><BsDash strokeWidth={1} /></button>
                    </div>
                    <button>Add</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDescCard
