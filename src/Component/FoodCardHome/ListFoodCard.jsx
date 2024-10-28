import React from "react";
import { MdOutlineEuroSymbol } from "react-icons/md";
import "./listFoodCard.css";




const ListFoodCard = () => {
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
                <h2>Turkish eggs with Lebanese flatbread</h2>
                <p>2 poached organic eggs, chili butter, lemon yogurt & avocado</p>
                <div className="priceTag">
                    <h1><MdOutlineEuroSymbol /> 30.00</h1>
                </div>
            </div>
        </div>
    )
}

export default ListFoodCard