import React, { useContext } from "react";
import { MdOutlineEuroSymbol } from "react-icons/md";
import "./listFoodCard.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AppContext, AppDispatchContext } from "../../context/myContext";
import { useCookies } from "react-cookie";
import { expireTime, MY_CART } from "../../Constants/cookieConst";
import { BASE_URL } from "../../Services/Constant";
import { deleteCartItem, getCartItems } from "../../Services/CartApis";
import FoodContainer from "../FoodContainer/FoodContainer";
import { AuthContext } from "../../context/AuthContext";

const ListFoodCard = ({ Qty, productData }) => {
    // console.log("productData: ", productData);



    const [cookies, setCookies] = useCookies([MY_CART]);
    const { myCart, deleteItem } = useContext(AppContext);
    const { setMyCart, setDeleteItem } = useContext(AppDispatchContext);
    const { isLogin } = useContext(AuthContext);

    const deleteItemInCart = async() => {
        if(isLogin){
            await deleteCartItem((error, response)=>{
                if(error){
                    console.log("error: ", error);
                }
                if(response){
                    console.log("response: ", response)
                    setDeleteItem((prev)=>!prev);
                }
            }, productData)
            await getCartItems((error, response) => {
                if (error) {
                    console.error("Error fetching products:", error);
                } else {
                    console.log("response.data.cart_items",response.data.cart_items)
                    // setMy(response.data.cart_items);
                    setMyCart(response.data.cart_items)
                }
            });
        }else{
            let myCartItems = myCart
            myCartItems = myCartItems.filter((val, i) => val !== productData);
            // console.log(myCartItems)
            setMyCart(myCartItems);
            setCookies("myCart", myCartItems, { path: '/', expires: expireTime });
        }
    }


    return (
        <div className="wrapper">
            <div className="firstArea">
                <div className="img-area">
                    <div className="inner-area">
                        <img
                            src={`${BASE_URL}${productData?.image}`}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="secondArea">
                <h2>{productData?.name}</h2>
                <p>{productData?.description}</p>
                <div className="priceTag">
                    <h1><MdOutlineEuroSymbol /> {productData?.price}</h1>
                    {
                        Qty ?
                            <>
                                <span>|</span>
                                <h2>Qty : {Qty}</h2>
                            </>
                            :
                            <></>
                    }
                </div>
            </div>
            {
                Qty ?
                    <div className="deleteItemIcon" onClick={(e) => {
                        e.stopPropagation();
                        deleteItemInCart(productData, setDeleteItem);
                    }}>
                        <RiDeleteBin6Line /> <span>Remove</span>
                    </div>
                    :
                    <></>
            }
        </div>
    )
}


export default ListFoodCard