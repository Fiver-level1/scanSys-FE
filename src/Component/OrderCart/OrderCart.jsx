import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './orderCart.css'
import { IoArrowBack } from "react-icons/io5";
import ListFoodCard from '../FoodCardHome/ListFoodCard';
import { AppContext } from '../../context/myContext';

const OrderCart = () => {
    const [subTotal, setSubTotal] = useState(0);
    const [myCartItems, setMyCartItems] = useState([]);
    const { myCart } = useContext(AppContext);

    useEffect(()=>{
        setMyCartItems([...myCart]);
        const newSubTotal = myCart.reduce((acc, item) => acc + (item.price * item.qty), 0);
        setSubTotal(newSubTotal.toFixed(2));
    }, [myCart]);

    // console.log("myCart is  ", myCartItems);

    return (
        <div className="cartContainer">
            <div className="cartWrapper">
                <Link to='/'><div className="BackIcon">
                    <IoArrowBack />
                </div>
                </Link>
                <div className="cartContentHolder">
                    <div className="ListOfOrders">
                        {myCartItems.map((item, index) => {
                            return (
                                <div className="ListFoodCardWrapper" key={index}>
                                    <ListFoodCard Qty={item.qty} productData={item} />
                                </div>
                            )
                        })}
                    </div>
                    <div className="OrderSummary">
                        <h1>Cart Summary</h1>
                        <div className="summaryDesc">
                            <div className="summaryLine">
                                <span>Subtotal:</span>
                                <span>${subTotal}</span>
                            </div>
                            <div className="summaryLine">
                                <span>Tax:</span>
                                <span>$2.0</span>
                            </div>
                            <div className="summaryLine">
                                <span>Discount:</span>
                                <span style={{ color: "green" }}>$1.0</span>
                            </div>
                            <div className="summaryLine total">
                                <span>Total:</span>
                                <span>$11.0</span>
                            </div>
                        </div>
                        <div className="OrderNow">
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <></>
    )
}

export default OrderCart
