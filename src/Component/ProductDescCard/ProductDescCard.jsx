import React, { useContext, useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import './productDescCard.css'
import { BsDash } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { AppContext, AppDispatchContext } from '../../context/myContext';
import { useCookies } from 'react-cookie';
import { MY_CART } from '../../Constants/cookieConst';

const ProductDescCard = ({ closeProductDesc, productDesData }) => {

    const { setMyCart } = useContext(AppDispatchContext);
    const { myCart } = useContext(AppContext);
    const [itemState, setItemState] = useState(0);
    const [cookie, setCookie, removeCookie] = useCookies([MY_CART]);

    const handleDecrementItem = () => {
        if (itemState > 0) {
            setItemState(itemState - 1);
        }
    }

    useEffect(() => {
        const existingItem = myCart.find((item) => item === productDesData);
        const itemCount = existingItem ? existingItem.qty : 0;
        setItemState(itemCount);
    }, [])

    const handleAddToCart = () => {
        let myCartItems = myCart;
        const existingItem = myCartItems.find(item => item.id === productDesData.id);
        if (itemState != 0) {
            productDesData.qty = itemState;
            if (existingItem) {
                existingItem.qty = itemState;
            } else {
                myCartItems.push(productDesData);
            }
        } else {
            if (existingItem) {
                myCartItems = myCartItems.filter((val, i) => val !== productDesData);
            }
        }

        setMyCart(myCartItems);
        setCookie("myCart", myCartItems, { path: '/', maxAge: 3600 });
        closeProductDesc(false)
    }

    // console.log("cookies: ", cookies.myCart? cookies.myCart: "[]")

    // console.log(myCart)

    return (
        <div className='productDescWrapper'>
            <div className="wrapper">
                <div className="img-area">
                    <div className="inner-area">
                        <img
                            src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                            alt=""
                        />
                    </div>
                </div>
                <div className="icon arrow">
                    {/* <RxCross2 /> */}
                </div>
                <div className="icon dots" onClick={() => closeProductDesc(false)}>
                    <RxCross2 />
                </div>
                <div className="name">{productDesData.title}</div>
                <div className="about">{productDesData.description}</div>
                <div className="social-icons">
                    {
                        productDesData.ingredients.map((ingredient, index) => {
                            return (
                                <a href="#" className="fb" key={index}>
                                    <p>{ingredient.name}</p>
                                </a>
                            )
                        })
                    }
                </div>
                <div className="buttons">
                    {/* <button>Message</button> */}
                    <div className="selectionBtn">
                        <button onClick={() => setItemState(itemState + 1)}><FaPlus /></button>
                        <span>{itemState}</span>
                        <button onClick={handleDecrementItem}><BsDash strokeWidth={1} /></button>
                    </div>
                    <button onClick={handleAddToCart}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDescCard
