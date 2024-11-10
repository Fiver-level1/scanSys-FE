import React, { useEffect } from 'react'
import { PiSealCheckFill } from "react-icons/pi";
import { useLocation } from 'react-router-dom';  // Import useLocation
import './paymentStatus.css'
import { postRequest } from '../../Services/ApiController';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
const PaymentSucess = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { sessionId, waiter } = location.state || {};
    useEffect(() => {
        if (!sessionId && !waiter) {
            navigate("/");
            return;
        }
        const payload = {
            "checkout_ids": [sessionId]
        }
        postRequest(`/stripe/update-payment-status`, (err, res) => {
            if (err) {
                toast.error("Payment verification failed. Please contact the restaurant.")
            } else {
                toast.success("Payment Successful!")
            }
        }, payload);
    }, [sessionId]);
    return (
        <>
            <div className='paymentStatusContainer'>
                <div className="paymentStatusWrapper">
                    <div className="paymentDesc">
                        <PiSealCheckFill />
                        <h1>Order Successful!</h1>
                        <p>{waiter ? "Thank you for the Order. Your order is being prepared. Visit Order History for updates on your meal status." : "Receipt has been sent to your email. Your order is being prepared. Visit Order History for updates on your meal status."}</p>
                    </div>
                    <Link to="/orderHistory">
                        <div className="redirectBtn">
                            <button>View Order History</button>
                        </div>
                    </Link>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default PaymentSucess
