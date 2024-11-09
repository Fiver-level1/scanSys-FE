import React, { useContext, useEffect, useState } from 'react';
import "../FoodCardHome/listFoodCard.css"
import "./OrderHistory.css";
import { getRequestAuth } from '../../Services/AuthControllerWithoutToken';
import { getRequest } from '../../Services/ApiController';
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
                setOrderData(response.data)
            }
        })
        // }
    }, [])

    return (
        <div className="cartContainer">
            <div className="cartWrapper">
                <BackNavigate />
                <div className="headerPrimary">
                    <h1>Your Order History & Current Status</h1>
                    <p>Review your past orders and the current one. Track the status, payment, and progress of each order, from pending to delivered.</p>
                </div>
                <div className='foodCardHolder'>

                    <div className="foodCardWrapper">
                        <div className="lisProductWrapperOrderHistory">
                            {orderData.length > 0 && orderData.map((order, index) => {
                                return (<div className="wrapper order-history-wrapper">
                                    <div className='order-history-card' key={index}>
                                        <p className='orderDate'>{new Date(order?.created_at).toDateString()}</p>

                                        <p className='OrderNumber'>Order Number : #{order?.id}</p>
                                        <div className='allStatus'>
                                            <div className='status' style={{ color: "#b53b3b" }}>
                                                Order Status :
                                                <p
                                                    // className={`${orderStatus}`}
                                                    className={`${order.order_status.toLowerCase()}`}
                                                ><PiCookingPotDuotone />{order?.order_status.toLowerCase()}</p>
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