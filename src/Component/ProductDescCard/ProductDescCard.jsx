import React, { useContext, useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import './productDescCard.css'
import { BsDash } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { AppContext, AppDispatchContext } from '../../context/myContext';
import { useCookies } from 'react-cookie';
import { expireTime, MY_CART } from '../../Constants/cookieConst';

const ProductDescCard = ({ closeProductDesc, productDesData }) => {

    const { setMyCart } = useContext(AppDispatchContext);
    const { myCart, productDesRef } = useContext(AppContext);
    const [itemState, setItemState] = useState(0);
    const [cookie, setCookie, removeCookie] = useCookies([MY_CART]);

    // console.log(productDesRef)
    const handleDecrementItem = () => {
        if (itemState > 0) {
            setItemState(itemState - 1);
        }
    }

    useEffect(() => {
        const existingItem = myCart.find((item) => item === productDesData);
        const itemCount = existingItem ? existingItem.qty : 1;
        setItemState(itemCount);
    }, [])

    const handleAddToCart = () => {
        let myCartItems = myCart;
        const existingItem = myCartItems.find(item => item.id === productDesData.id);
        if (itemState != 0) {
            productDesData.qty = itemState;
            if (existingItem) {
                existingItem.qty = itemState;
                myCartItems = [...myCartItems];
            } else {
                myCartItems.push(productDesData);
            }
        } else {
            if (existingItem) {
                myCartItems = myCartItems.filter((val, i) => val !== productDesData);
            }
        }

        setMyCart(myCartItems);
        setCookie("myCart", myCartItems, { path: '/', expires: expireTime });
        closeProductDesc(false)
    }
    const getRandomMatteColor = () => {
        const r = Math.floor(180 + Math.random() * 40);
        const g = Math.floor(130 + Math.random() * 40);
        const b = Math.floor(90 + Math.random() * 40);
        return { r, g, b };
    };

    // Helper function to determine contrasting text color
    const getContrastColor = (r, g, b) => {
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
        return luminance > 186 ? "#333" : "#fff";
    };


    return (
        <div className='productDescWrapper' ref={productDesRef}>
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
                <div className="DetailsWrapper">
                    <div className="name">{productDesData.title}</div>
                    <div className="about">{productDesData.description}</div>
                    <div className="social-icons">
                        {
                            productDesData.ingredients.map((ingredient, index) => {
                                const { r, g, b } = getRandomMatteColor();
                                const backgroundColor = `rgb(${r}, ${g}, ${b})`;
                                const textColor = getContrastColor(r, g, b);
                                return (
                                    <a href="#" className="fb" onClick={(e) => e.preventDefault()} key={index} style={{
                                        backgroundColor
                                    }}>
                                        <p style={{
                                            color: textColor
                                        }}>{ingredient.name}</p>
                                    </a>
                                )
                            })
                        }
                    </div>
                    <div className="buttons">
                        {/* <button>Message</button> */}
                        <div className="selectionBtn">
                            <button onClick={() => setItemState(itemState + 1)} ><FaPlus /></button>
                            <span>{itemState}</span>
                            <button onClick={handleDecrementItem} disabled={itemState == 0}><BsDash strokeWidth={1} /></button>
                        </div>
                        <button onClick={handleAddToCart} disabled={itemState == 0}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDescCard
