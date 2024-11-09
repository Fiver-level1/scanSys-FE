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
import { deleteItemInCart } from '../FoodCardHome/ListFoodCard';

const ProductDescCard = ({ closeProductDesc, productDesData, parent }) => {

    const { setMyCart, setItemAdded, setDeleteItem } = useContext(AppDispatchContext);
    const { myCart, productDesRef, itemAdded  } = useContext(AppContext);
    const [itemState, setItemState] = useState(0);
    const [cookie, setCookie, removeCookie] = useCookies([MY_CART]);

    // console.log(productDesRef)
    const handleDecrementItem = () => {
        if (itemState > 0) {
            setItemState(itemState - 1);
        }
    }
    // console.log(parent == "foodContainer");

    useEffect(() => {
        // console.log(myCart);
        const existingItem = myCart.find((item) => item.product?.id === productDesData.id);
        console.log(existingItem)
        const itemCount = existingItem ? existingItem.quantity : 1;
        setItemState(itemCount);
    }, [myCart])

    const handleAddToCart = async () => {
        let myCartItems = myCart; 
        const existingItem = myCartItems.find(item => item.product?.id === productDesData?.id);
        // console.log(existingItem)
        if (itemState != 0) {
            productDesData.qty = itemState;
            if (existingItem) {
                await changeCartItemQuantity((error, response)=>{
                    if (error) {
                        console.error("Error fetching products:", error);
                      } else {
                        // console.log("MY CART Products added successfully:", response.data);
                        // existingItem.quantity = itemState;
                        // myCartItems = [...myCartItems];
                      }
                }, productDesData);
                
            } else {
                await addCartItems((error, response)=>{
                    if (error) {
                        console.error("Error fetching products:", error);
                      } else {
                        // console.log("MY CART Products added successfully:", response.data);
                        // myCartItems.push(productDesData);
                      }
                }, productDesData)
                
            }
        } else {
            if (existingItem) {
                console.log(productDesData)
                await deleteCartItem((error, response)=>{
                    if(error){
                        console.log("error: ", error);
                    }
                    if(response){
                        // console.log("Delted: ", response)
                    }
                }, productDesData)
                // myCartItems = myCartItems.filter((val, i) => val !== productDesData);
            }
        }
       
        await getCartItems((error, response) => {
            if (error) {
                console.error("Error fetching products:", error);
            } else {
                // console.log("response.data.cart_items",response.data.cart_items)
                // setMy(response.data.cart_items);
                setMyCart(response.data.cart_items)
                // console.log("MY CART Products fetched successfully:", response.data);
            }
        });
        // setMyCart(myCartItems);
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
                    <div className="name">{productDesData?.title}</div>
                    <div className="about">{productDesData?.description}</div>
                    <div className="social-icons">
                        {
                            // console.log(productDesData.ing)
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
                        <button onClick={handleAddToCart} disabled={parent == "foodContainer" && itemState == 0}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDescCard
