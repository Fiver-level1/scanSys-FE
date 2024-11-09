import React from 'react';
import "../FoodCardHome/listFoodCard.css"

const OrderHistory = () => {
    return (
        <div>
            <div className="headerPrimary">
                <h1>Almost There – Your Feast Awaits!</h1>
                <p>Review your delicious picks! Make sure everything looks perfect before you checkout. Add or adjust items to satisfy your cravings, and get ready for a quick and tasty delivery!</p>
            </div>
            <div className='foodCardHolder'>
                <div className="foodCardWrapper">

                    <div className="lisProductWrapper">

                        <div className="wrapper">
                            <div className="firstArea">
                                <div className="img-area">
                                    <div className="inner-area">
                                        {/* <img
                            src={`${BASE_URL}${productData?.image}`}
                            alt=""
                        /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="secondArea">
                                {/* <h2>{productData?.name}</h2>
                <p>{productData?.description}</p> */}
                                <div className="priceTag">
                                    {/* <h1><MdOutlineEuroSymbol /> {productData?.price}</h1> */}
                                    {
                                        // Qty ?
                                        //     <>
                                        //         <span>|</span>
                                        //         <h2>Qty : {Qty}</h2>
                                        //     </>
                                        //     :
                                        //     <></>
                                    }
                                </div>
                            </div>

                            {/* <div> Order</div> */}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default OrderHistory;