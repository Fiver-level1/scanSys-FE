import React from 'react'
import './orderNow.css'
import { IoIosCard } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";

const OrderNow = () => {
    return (
        <div className='OrderNowContainer'>
            <div className="orderNowHolder1">
                <div className="orderNowTop">
                    <Link to='/'><div className="BackIcon">
                        <IoArrowBack />
                    </div>
                    </Link>
                    <div className="headerPrimary">
                        <h1>Ready to Dine? Confirm and Pay</h1>
                        <p>Select your table, choose how you'd like to pay, and add your email to receive a receipt. With just a few quick steps, your meal will be on its way!</p>
                    </div>
                </div>
                <div className="orderNowWrapper">
                    <div className="form-container">
                        <div className="formGroupHolder">
                            <div className="form-group">
                                <label htmlFor="tableNo">
                                    Select number of tables:
                                </label>
                                <select className="form-select" id="tableNo">
                                    <option value={1}>1 tafel</option>
                                    <option value={2}>2 tafels</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div className="form-group form-checkbox-label">
                                <input type="checkbox" className="form-checkbox" id="offers" />
                                <label htmlFor="offers">
                                    Send me exclusive offers from TaDa and Gare Maritime (optional) <Link to='/'>privacy policy</Link>
                                </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address:</label>
                                <input
                                    type="email"
                                    className="form-input"
                                    id="email"
                                    placeholder="Email address"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="comments">
                                    Do you have any further comments with your order?
                                </label>
                                <textarea
                                    className="form-textarea"
                                    id="comments"
                                    placeholder="Comments"
                                    defaultValue={""}
                                />
                            </div>
                        </div>
                        <h1>How would you like to pay <span>€6.70 ?</span></h1>
                        <div className="payOptionWrapper">
                            <div className="payment-option">
                                <FaApple />
                                <span className='payOptMid'>apple pay</span>
                                <span className="payOptSm">pay</span>
                            </div>
                            <div className="payment-option">
                                <IoLogoGoogle />
                                <span className='payOptMid'>google pay</span>
                                <span className="payOptSm">pay</span>
                            </div>
                            <div className="payment-option">
                                <IoIosCard />
                                <span className='payOptMid'>Card</span>
                                <span className="payOptSm">pay</span>
                            </div>
                        </div>
                        <div className="submitBtn">
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderNow
