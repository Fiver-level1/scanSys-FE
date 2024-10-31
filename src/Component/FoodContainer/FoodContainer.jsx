import React, { useContext, useEffect, useState } from 'react';
import ListFoodCard from '../FoodCardHome/ListFoodCard';
import { productList } from '../../content/productData';
import ProductDescCard from '../ProductDescCard/ProductDescCard';
import '../../index.css'
import { AppContext, AppDispatchContext } from '../../context/myContext';

const FoodContainer = () => {
    const [productdata, setProductdata] = useState([]);
    const { setShowProductDesc } = useContext(AppDispatchContext);
    const { showProductDesc } = useContext(AppContext);
    const [productDesData, setShowProductDescData] = useState({});

    useEffect(() => {
        const groupedData = productList.reduce((acc, item) => {
            const categoryName = item.category.name;
            if (!acc[categoryName]) {
                acc[categoryName] = { category: categoryName, data: [] };
            }
            acc[categoryName].data.push(item);
            return acc;
        }, {});

        setProductdata(Object.values(groupedData));
    }, []);
    // console.log("productData: ",productdata);



    const handleShowProductDesc = (productId) => {
        const productDescDataT = productList.filter((val) => val.id === productId);
        setShowProductDesc(true);
        setShowProductDescData(...productDescDataT);

    };


    return (
        <>
            <section className="foodCardContainer">
                <div className="foodCardHolder">
                    {
                        productdata.map((val, ind) => (
                            <div key={ind}>
                                <h1 className='secondaryHeader'>{val.category}</h1>
                                <div className="foodCardWrapper">
                                    {
                                        val.data.map((obj, index) => (
                                            <div
                                                className="lisProductWrapper"
                                                key={index}
                                                onClick={() => handleShowProductDesc(obj.id)}
                                            >
                                                <ListFoodCard productData={obj} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

            </section>
            <div className={!showProductDesc ? "PopUpCardsDescInactive" : "PopUpCardsDescActive"}>
                {
                    showProductDesc ? <ProductDescCard
                        closeProductDesc={() => setShowProductDesc(false)}
                        productDesData={productDesData}
                    /> : <></>
                }
            </div>
        </>
    );
};

export default FoodContainer;
