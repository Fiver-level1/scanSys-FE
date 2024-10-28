import React, { useEffect, useState } from 'react';
import ListFoodCard from '../FoodCardHome/ListFoodCard';
import { productList } from '../../content/productData';
import ProductDescCard from '../ProductDescCard/ProductDescCard';

const FoodContainer = () => {
    const [productdata, setProductdata] = useState([]);
    const [showProductDesc, setShowProductDesc] = useState(false);

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



    const handleShowProductDesc = (productId) => {
        const productDescData = productList.filter((val) => val.id === productId);
        setShowProductDesc(true);
        // console.log(productDescData);
    };

    return (
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
                                            <ListFoodCard />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            {showProductDesc ?
                <div className="PopUpCardsDesc">
                    <ProductDescCard closeProductDesc={() => setShowProductDesc(false)} />
                </div> : <></>
            }
        </section>
    );
};

export default FoodContainer;
