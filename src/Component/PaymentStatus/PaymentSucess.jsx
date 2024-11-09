import React, { useEffect } from 'react'
import { PiSealCheckFill } from "react-icons/pi";
import { useLocation } from 'react-router-dom';  // Import useLocation
import './paymentStatus.css'
import { postRequest } from '../../Services/ApiController';
import { Link } from 'react-router-dom';
const PaymentSucess = () => {
    const location = useLocation();
    const { sessionId } = location.state || {};
    useEffect(() => {
        postRequest(`/stripe/update-payment-status/${sessionId}/`, (err, res) => {
            if (err) {
                console.log("error in payment verication ", err);
            } else {
                console.log("or bhai ab tho ho gyi payment", res);
            }
        });
    }, [sessionId]);
    return (
        <div className='paymentStatusContainer'>
            <div className="paymentStatusWrapper">
                <div className="paymentDesc">
                    <PiSealCheckFill />
                    <h1>Payment Successful!</h1>
                    <p>Receipt has been sent to your email. Your order is being prepared. Visit Order History for updates on your meal status.</p>
                </div>
                <Link to="/orderHistory">
                    <div className="redirectBtn">
                        <button>View Order History</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default PaymentSucess
