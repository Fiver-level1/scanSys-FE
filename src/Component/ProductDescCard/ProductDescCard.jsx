import React, { useContext, useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import './productDescCard.css'
import { BsDash } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { AppContext, AppDispatchContext } from '../../context/myContext';
import { useCookies } from 'react-cookie';
import { expireTime, MY_CART } from '../../Constants/cookieConst';
import { BASE_URL } from '../../Services/Constant';
import { addCartItems, changeCartItemQuantity, deleteCartItem, getCartItems } from '../../Services/CartApis';
import { AuthContext } from '../../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { FaRegStopCircle } from "react-icons/fa";

const ProductDescCard = ({ closeProductDesc, productDesData, parent }) => {


    const { setMyCart, setItemAdded, setDeleteItem } = useContext(AppDispatchContext);
    const { myCart, productDesRef, itemAdded } = useContext(AppContext);
    const [itemState, setItemState] = useState(0);
    const [cookie, setCookie, removeCookie] = useCookies([MY_CART]);
    const { isLogin } = useContext(AuthContext);

    const handleDecrementItem = () => {
        if (itemState > 0) {
            setItemState(itemState - 1);
        }
    }

    console.log(productDesData);


    useEffect(() => {
        const existingItem = myCart.find(item => {
            if (isLogin) {
                if (item.product?.id === productDesData?.id)
                    return item.product;
            } else {
                if (item?.id === productDesData?.id)
                    return item;
            }

        });
        const itemCount = existingItem ? existingItem.quantity : 1;
        setItemState(itemCount);
    }, [myCart])


    const handleAddToCart = async () => {

        let myCartItems = myCart;
        const existingItem = myCartItems.find(item => {
            if (isLogin) {
                if (item.product?.id === productDesData?.id)
                    return item.product;
            } else {
                if (item?.id === productDesData?.id)
                    return item;
            }

        });

        if (itemState != 0) {
            productDesData.quantity = itemState;
            if (existingItem) {
                if (isLogin) {
                    await changeCartItemQuantity((error, response) => {
                        if (error) {
                            console.error("Error fetching products:", error);
                        } else {

                        }
                    }, productDesData);
                } else {
                    existingItem.quantity = itemState;
                    myCartItems = [...myCartItems];
                }

            } else {
                if (isLogin) {
                    await addCartItems((error, response) => {
                        if (error) {
                            console.error("Error fetching products:", error);
                            toast.error("please try to add again")
                        } else {

                        }
                    }, productDesData)
                } else {
                    myCartItems.push(productDesData);
                }
                toast.success("item added in cart")
            }
        }
        else {
            if (existingItem) {

                if (isLogin) {
                    await deleteCartItem((error, response) => {
                        if (error) {
                            console.log("error: ", error);
                            toast.error("please try to delete again")
                        }
                        if (response) {

                        }
                    }, productDesData)
                    // myCartItems = myCartItems.filter((val, i) => val !== productDesData);
                } else {
                    myCartItems = myCartItems.filter((val, i) => val !== productDesData);
                }
                toast.success("item deleted from cart")
            }
        }

        if (isLogin) {
            await getCartItems((error, response) => {
                if (error) {
                    console.error("Error fetching products:", error);
                } else {
                    setMyCart(response.data.cart_items)
                }
            });
        }
        else {
            setMyCart(myCartItems);
            setCookie("myCart", myCartItems, { path: '/', expires: expireTime });
        }


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
                            src={`${BASE_URL}${productDesData?.image}`}
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
                    <div className="name">{productDesData?.name}</div>
                    <div className={`type ${productDesData?.type.toLowerCase()}`}>
                        <FaRegStopCircle /> <span>{`${productDesData.type}`}</span></div>
                    <div className="about">{productDesData?.description}</div>
                    <div className="social-icons">
                        {
                            productDesData?.ingredients && productDesData.ingredients.split(",").map((ingredient, index) => {
                                const { r, g, b } = getRandomMatteColor();
                                const backgroundColor = `rgb(${r}, ${g}, ${b})`;
                                const textColor = getContrastColor(r, g, b);
                                return (
                                    <a href="#" className="fb" onClick={(e) => e.preventDefault()} key={index} style={{
                                        backgroundColor
                                    }}>
                                        <p style={{
                                            color: textColor
                                        }}>{ingredient}</p>
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
                            <button onClick={handleDecrementItem} disabled={parent == "foodContainer" && itemState == 0}><BsDash strokeWidth={1} /></button>
                        </div>
                        <button onClick={handleAddToCart}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDescCard
