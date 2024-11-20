import React, { useEffect } from 'react'
import { PiSealCheckFill } from "react-icons/pi";
import { useLocation } from 'react-router-dom';  // Import useLocation
import './paymentStatus.css'
import { postRequest } from '../../Services/ApiController';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import { AppDispatchContext } from '../../context/myContext';
import { useContext } from 'react';
import { deleteRequest } from '../../Services/ApiController';
import { AuthContext } from '../../context/AuthContext';
import { useCookies } from "react-cookie";
import { MY_CART } from '../../Constants/cookieConst';
const PaymentSucess = () => {

    const { setMyCart } = useContext(AppDispatchContext);
    const [cookie, setCookies, removeCookie] = useCookies([MY_CART]);
    const { isLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const { sessionId, waiter } = location.state || {};
    useEffect(() => {
        removeCookie('myCart', { path: '/' });
        // if (!sessionId && !waiter) {
        //     navigate("/");
        //     return;
        // }

        const payload = {
            "checkout_ids": [sessionId]
        }

        postRequest(`/stripe/update-payment-status`, (err, res) => {
            if (err) {
                toast.error("Payment verification failed. Please contact the restaurant.")
            } else {
                // toast.success("Payment Successful!")
            }
        }, payload);
        deleteRequest("/api/cart/clear/", (err, res) => {
            if (err) {
                console.error("error in delete request : ", err);
            } else {
            }
        })

    }, [sessionId]);
    return (
        <>
            <div className='paymentStatusContainer'>
                <div className="paymentStatusWrapper">
                    <div className="paymentDesc">
                        <PiSealCheckFill />
                        <h1>Order Successful!</h1>
                        {!isLogin ?
                            <p>Thank you for the Order ! Your order is being prepared</p> :
                            <p>{waiter ? "Thank you for the Order. Your order is being prepared. Visit Order History for updates on your meal status." : "Receipt has been sent to your email. Your order is being prepared. Visit Order History for updates on your meal status."}</p>
                        }
                    </div>
                    <div className="redirectBtn">
                        {
                            isLogin ?
                                <Link to="/orderHistory"><button>View Order History</button></Link> : <Link to="/"><button>Back To Home</button></Link>
                        }
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default PaymentSucess
