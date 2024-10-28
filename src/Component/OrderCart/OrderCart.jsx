import React from 'react'
import { Link } from 'react-router-dom';
import './orderCart.css'
import { IoArrowBack } from "react-icons/io5";
import ListFoodCard from '../FoodCardHome/ListFoodCard';
const OrderCart = () => {
    return (
        <div className="cartContainer">
            <div className="cartWrapper">
                <Link to='/'><div className="BackIcon">
                    <IoArrowBack />
                </div>
                </Link>
                <div className="cartContentHolder">
                    <div className="ListOfOrders">
                        <div className="ListFoodCardWrapper">
                            <ListFoodCard Qty={10} />
                        </div>
                        <div className="ListFoodCardWrapper">
                            <ListFoodCard />
                        </div>
                        <div className="ListFoodCardWrapper">
                            <ListFoodCard />
                        </div>
                    </div>
                    <div className="OrderSummary">
                        <h1>Cart Summary</h1>
                        <div className="summaryDesc">
                            <div className="summaryLine">
                                <span>Subtotal:</span>
                                <span>$10.0</span>
                            </div>
                            <div className="summaryLine">
                                <span>Tax:</span>
                                <span>$2.0</span>
                            </div>
                            <div className="summaryLine">
                                <span>Discount:</span>
                                <span style={{ color: "green" }}>$1.0</span>
                            </div>
                            <div className="summaryLine total">
                                <span>Total:</span>
                                <span>$11.0</span>
                            </div>
                        </div>
                        <div className="OrderNow">
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderCart
