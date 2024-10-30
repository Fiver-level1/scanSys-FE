import React from "react";
import { MdOutlineEuroSymbol } from "react-icons/md";
import "./listFoodCard.css";
import { MdDelete } from "react-icons/md";

const ListFoodCard = ({ Qty, productData }) => {
    // console.log("productData: ", productData);
    return (
        <div className="wrapper">
            <div className="firstArea">
                <div className="img-area">
                    <div className="inner-area">
                        <img
                            src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="secondArea">
                <h2>{productData.title}</h2>
                <p>{productData.description}</p>
                <div className="priceTag">
                    <h1><MdOutlineEuroSymbol /> {productData.price}</h1>
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
                    <div className="deleteItemIcon">
                        <MdDelete />
                    </div>
                    :
                    <></>
            }
        </div>
    )
}

export default ListFoodCard