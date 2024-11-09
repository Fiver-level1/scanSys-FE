import React, { useContext, useEffect, useState } from 'react';
import "../FoodCardHome/listFoodCard.css"
import "./OrderHistory.css";
import { getRequestAuth } from '../../Services/AuthControllerWithoutToken';
import { getRequest } from '../../Services/ApiController';
import { AuthContext } from '../../context/AuthContext';
import BackNavigate from '../BackNavgate/BackNavigate';

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
                    <h1>Almost There – Your Feast Awaits!</h1>
                    <p>Review your delicious picks! Make sure everything looks perfect before you checkout. Add or adjust items to satisfy your cravings, and get ready for a quick and tasty delivery!</p>
                </div>
                <div className='foodCardHolder'>

                    <div className="foodCardWrapper">
                        <div className="lisProductWrapper">
                            {orderData.length > 0 && orderData.map((order, index) => {
                                return (<div className="wrapper order-history-wrapper">
                                    <div className='order-history-card' key={index}>
                                        <p>{new Date(order?.created_at).toDateString()}</p>

                                        <p>Order Number - {order?.id}</p>
                                        <div className='allStatus'>
                                            <div className='status'>
                                                Order Status
                                                <p
                                                    // className={`${orderStatus}`}
                                                    className={`${order.order_status.toLowerCase()}`}
                                                >{order?.order_status}</p>
                                            </div>
                                            <div className={'status'}>
                                                Payment Status
                                                <p
                                                    // className={`${orderStatus}`}
                                                    className={`${order.payment_status.toLowerCase()}`}
                                                >{order?.payment_status}</p>
                                            </div>
                                        </div>
                                        <div className='border-order-card'></div>
                                        <h5>${order.total_amount}</h5>
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