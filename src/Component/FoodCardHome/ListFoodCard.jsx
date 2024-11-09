import React, { useContext } from "react";
import { MdOutlineEuroSymbol } from "react-icons/md";
import "./listFoodCard.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AppContext, AppDispatchContext } from "../../context/myContext";
import { useCookies } from "react-cookie";
import { MY_CART } from "../../Constants/cookieConst";
import { BASE_URL } from "../../Services/Constant";
import { deleteCartItem } from "../../Services/CartApis";
import FoodContainer from "../FoodContainer/FoodContainer";

const ListFoodCard = ({ Qty, productData }) => {
    // console.log("productData: ", productData);


    const [cookies, setCookies] = useCookies([MY_CART]);
    const { myCart, deleteItem } = useContext(AppContext);
    const { setMyCart, setDeleteItem } = useContext(AppDispatchContext);



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

export const deleteItemInCart = async(productData, setDeleteItem) => {
    await deleteCartItem((error, response)=>{
        if(error){
            console.log("error: ", error);
        }
        if(response){
            console.log("response: ", response)
        }
    }, productData)

    setDeleteItem((prev)=>!prev);
}

export default ListFoodCard