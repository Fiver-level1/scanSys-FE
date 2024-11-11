import React, { useContext, useState, useEffect } from 'react'
import './orderNow.css'
import { IoIosCard } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { FaApple } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import BackNavigate from '../BackNavgate/BackNavigate';
import { AppContext, AppDispatchContext } from '../../context/myContext';
import { postRequest } from '../../Services/ApiController';
import { AuthContext } from '../../context/AuthContext';
import Loader from '../Loader/Loader';
import { getRequest } from '../../Services/ApiController';
import { toast, ToastContainer } from "react-toastify";
const OrderNow = () => {

    const { myCart, isLoader } = useContext(AppContext);
    const { role } = useContext(AuthContext);
    const { setIsLoader, setMyCart } = useContext(AppDispatchContext);
    const [subTotal, setSubTotal] = useState(0);
    const [selectedTable, setSelectedTable] = useState(1);
    const [listOfTable, setlistOfTable] = useState([]);
    const [checkoutPaylod, setCheckoutPayload] = useState({
        "seat_number": selectedTable.toString(),
        "items": [],
        "comment": ""
    })
    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        const newSeatNumber = event.target.value;
        setSelectedTable(newSeatNumber);

        setCheckoutPayload(prevPayload => ({
            ...prevPayload,
            seat_number: newSeatNumber.toString()
        }));
    };
    const handleCommentsChange = (event) => {
        setCheckoutPayload({
            ...checkoutPaylod,
            comment: event.target.value
        });
    };

    useEffect(() => {
        if (!myCart || !myCart.length) {
            navigate("/cart")
            return;
        }
        const cartItems = myCart.map(val => ({
            price: val.product.stripe_price_id,
            quantity: val.quantity
        }));

        setCheckoutPayload(prevPayload => ({
            ...prevPayload,
            items: cartItems
        }));

        const newSubTotal = myCart.reduce((acc, item) =>
            acc + (Number(item.product?.price || 0) * (item.quantity || 0)),
            0
        );
        setSubTotal(newSubTotal.toFixed(2));
    }, [myCart]);

    useEffect(() => {
        getRequest("/api/seats", (err, res) => {
            if (err) {
                // toast.error("please contact Resturant for Table Number");
            } else {
                const data = res.data;
                setlistOfTable(data);
            }
        })
    }, [])

    const handleCheckout = () => {
        setIsLoader(true)
        postRequest("/stripe/create-checkout-session", (err, res) => {
            if (err) {
                console.log("error in checkout : ", err);
            } else {
                setMyCart([]);
                if (role.toLowerCase() === "waiter") {
                    navigate("/payment-successful", { state: { waiter: true } });
                } else {
                    window.location.href = res.data.url;
                }
            }
            setIsLoader(false);
        }, checkoutPaylod)
    }
    return (
        <>
            {isLoader ?
                <Loader /> :
                <div className='OrderNowContainer'>
                    <div className="orderNowHolder1">
                        <div className="orderNowTop">
                            <BackNavigate />
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
                                            Select the table Number:
                                        </label>
                                        <select
                                            className="form-select"
                                            id="tableNo"
                                            value={selectedTable}
                                            onChange={handleSelectChange}
                                        >
                                            {
                                                listOfTable.map((val, ind) => {
                                                    return <option key={ind} value={val.seat_number}>{val.seat_number}</option>
                                                })
                                            }
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>
                                    {/* <div className="form-group form-checkbox-label">
                                <input type="checkbox" className="form-checkbox" id="offers" />
                                <label htmlFor="offers">
                                    Want to get payment receipt by email. Read our <Link to='/'>Privacy Policy</Link>.
                                </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address:</label>
                                <input
                                    required
                                    type="email"
                                    className="form-input"
                                    id="email"
                                    placeholder="Email address"
                                />
                            </div> */}
                                    <div className="form-group">
                                        <label htmlFor="comments">
                                            Do you have any further comments with your order?
                                        </label>
                                        <textarea
                                            className="form-textarea"
                                            id="comments"
                                            placeholder="Comments"
                                            value={checkoutPaylod.comment}
                                            onChange={handleCommentsChange}
                                        />
                                    </div>
                                </div>
                                <h1>Total amount to pay : <span>€{subTotal}</span></h1>
                                {/* <div className="payOptionWrapper">
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
                        </div> */}
                                <div className="submitBtn" onClick={handleCheckout}>
                                    <button>Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <ToastContainer />
        </>
    )
}

export default OrderNow
