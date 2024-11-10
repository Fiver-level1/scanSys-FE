import React from 'react'
import './paymentStatus.css'
import { PiXCircleFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const PaymentFailed = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { afterPayment } = location.state || {};
    useEffect(() => {
        if (!afterPayment) {
            navigate("/");
            return;
        }
    }, [])
    return (
        <div className='paymentStatusContainer'>
            <div className="paymentStatusWrapper">
                <div className="paymentDesc">
                    <PiXCircleFill color='#cc3300' />
                    <h1>Payment failed!</h1>
                    <p>There was an issue with your payment. Please try again or contact support.</p>
                </div>
                <Link to="/cart">
                    <div className="redirectBtn">
                        <button>Retry Payment</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default PaymentFailed
