import React, { useContext, useEffect, useState } from 'react';
import "../FoodCardHome/listFoodCard.css"
import "./OrderHistory.css";
import { getRequestAuth } from '../../Services/AuthControllerWithoutToken';
import { getRequest, postRequest } from '../../Services/ApiController';
import { AuthContext } from '../../context/AuthContext';
import BackNavigate from '../BackNavgate/BackNavigate';
import { PiCookingPotDuotone } from "react-icons/pi";
import { FaMoneyCheckDollar } from "react-icons/fa6";

const OrderHistory = () => {
    const { isLogin } = useContext(AuthContext);
    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        // if(!isLogin){

        getRequest("/api/orders/", (error, response) => {
            if (error) {

            } else {
                const data = response.data;
                const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setOrderData(sortedData)
            }
        })
        // }
    }, [])
    useEffect(() => {
        if (orderData) {
            const payloadData = orderData.map((val) => {
                if (val.payment_status.toLowerCase() !== "completed") {
                    return val.stripe_checkout_id;
                }
            })
            const PaymentStatusPayload = {
                "checkout_ids": [payloadData]
            }
            postRequest("/stripe/update-payment-status", (err, res) => {
                if (err) {
                    console.log("error in getting payment status updated", err);
                } else {
                    console.log("Latest Payment get Updated here");
                }
            }, PaymentStatusPayload)
        }

    }, [orderData])

    return (
        <div className="cartContainer">
            <div className="cartWrapper">
                <BackNavigate />
                <div className="headerPrimary">
                    <h1>Your Order History & Current Status</h1>
                    <p>Review your past orders and the current one. Track the status, payment, and progress of each order, from pending to delivered.</p>
                </div>
                <div className='foodCardHolder'>

                    <div className="">
                        <div className="lisProductWrapperOrderHistory">
                            {orderData.length > 0 && orderData.map((order, index) => {
                                return (<div className="wrapper order-history-wrapper">
                                    <div className='order-history-card' key={index}>
                                        <p className='orderDate'>{new Date(order?.created_at).toDateString()} <span>{new Date(order?.created_at).toLocaleTimeString()}</span></p>

                                        <p className='OrderNumber'>Order Number : #{order?.id}</p>
                                        <div className='allStatus'>
                                            <div className='status' style={{ color: "#b53b3b" }}>
                                                Order Status :
                                                <p
                                                    // className={`${orderStatus}`}
                                                    className={`${order.order_status.toLowerCase()}`}
                                                ><PiCookingPotDuotone />{order?.order_status.toLowerCase() === "accepted" ? "Confirmed " : order?.order_status.toLowerCase()}</p>
                                            </div>
                                            <div className={'status'}>
                                                Payment Status :
                                                <p
                                                    // className={`${orderStatus}`}
                                                    className={`${order.payment_status.toLowerCase()}`}
                                                ><FaMoneyCheckDollar />{order?.payment_status}</p>
                                            </div>
                                        </div>
                                        <div className='border-order-card'></div>
                                        <h5>€ {order.total_amount}</h5>
                                    </div>

                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderHistory;