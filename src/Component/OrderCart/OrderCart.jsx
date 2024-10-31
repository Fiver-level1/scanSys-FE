import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './orderCart.css'
import { IoArrowBack } from "react-icons/io5";
import ListFoodCard from '../FoodCardHome/ListFoodCard';
import { AppContext, AppDispatchContext } from '../../context/myContext';
import ProductDescCard from '../ProductDescCard/ProductDescCard';

const OrderCart = () => {
    const [subTotal, setSubTotal] = useState(0);
    const [myCartItems, setMyCartItems] = useState([]);
    const [deleteItem, setDeleteItem] = useState(true);
    const { myCart, handleArrowClickVisibility, setredirectTo, redirectTo, showProductDesc } = useContext(AppContext);
    const { setShowProductDesc } = useContext(AppDispatchContext);
    const [productDesData, setShowProductDescData] = useState({});

    useEffect(() => {
        setMyCartItems([...myCart]);
        const newSubTotal = myCart.reduce((acc, item) => acc + (item.price * item.qty), 0);
        setSubTotal(newSubTotal.toFixed(2));
    }, [myCart]);

    useEffect(() => {
        console.log(deleteItem)
    }, [deleteItem])

    console.log("deleteItem: ", deleteItem)
    const handleShowProductDesc = (productId) => {
        const productDescDataT = myCartItems.filter((val) => val.id === productId);
        if (deleteItem) {
            setShowProductDesc(true);
        }
        setShowProductDescData(...productDescDataT);
    };


    const handelOrderNow = () => {
        if (!myCartItems.length) {
            return;
        }
        handleArrowClickVisibility();
        setredirectTo('/orderNow')
    }

    return (
        <div className="cartContainer">
            <div className="cartWrapper">
                <Link to='/'><div className="BackIcon">
                    <IoArrowBack />
                </div>
                </Link>
                <div className="headerPrimary">
                    <h1>Almost There – Your Feast Awaits!</h1>
                    <p>Review your delicious picks! Make sure everything looks perfect before you checkout. Add or adjust items to satisfy your cravings, and get ready for a quick and tasty delivery!</p>
                </div>
                <div className="cartContentHolder">
                    <div className="ListOfOrders">
                        {(myCartItems && myCartItems.length > 0) ? myCartItems.map((item, index) => {
                            return (
                                <div className="ListFoodCardWrapper" key={index} onClick={() => handleShowProductDesc(item.id)}>
                                    <ListFoodCard Qty={item.qty} productData={item} setDeleteItem={setDeleteItem} />
                                </div>
                            )
                        }) : <>
                            <div className="NoContent">
                                <h1>No Item on Cart</h1>
                            </div>
                        </>}
                    </div>
                    <div className="OrderSummary">
                        <div className="summaryDesc">
                            <h1>Cart Summary</h1>
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
                        <div
                            className={myCartItems.length ? "OrderNow activeOrderNow" : "OrderNow inActiveOrderNow"}
                        >
                            <button onClick={handelOrderNow}>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={!showProductDesc ? "PopUpCardsDescInactive" : "PopUpCardsDescActive"}>
                {
                    showProductDesc && deleteItem ? <ProductDescCard
                        closeProductDesc={() => setShowProductDesc(false)}
                        productDesData={productDesData}
                    /> : <></>
                }
            </div>
        </div>
        // <></>
    )
}

export default OrderCart
