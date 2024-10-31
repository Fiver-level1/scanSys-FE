import React from 'react'
import './orderNow.css'
import { IoIosCard } from "react-icons/io";
import { Link } from 'react-router-dom';
import { RxDividerVertical } from "react-icons/rx";
const OrderNow = () => {
    return (
        <div className='OrderNowContainer'>
            <div className="header">
                <RxDividerVertical strokeWidth={2} />
                <h2>Proceed to payment</h2>
            </div>
            <div className="orderNowWrapper">
                <div className="form-container">
                    <p>What's your table number?</p>
                    <div className="formGroupHolder">
                        <div className="form-group">
                            <select className="form-select">
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
                            <IoIosCard />
                            <span>Bancontact</span>
                        </div>
                        <div className="payment-option">
                            <IoIosCard />
                            <span>iDEAL</span>
                        </div>
                        <div className="payment-option">
                            <IoIosCard />
                            <span>Card</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderNow
