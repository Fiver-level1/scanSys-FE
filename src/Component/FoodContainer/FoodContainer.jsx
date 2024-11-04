import React, { useContext, useEffect, useState } from 'react';
import ListFoodCard from '../FoodCardHome/ListFoodCard';
import { productList } from '../../content/productData';
import ProductDescCard from '../ProductDescCard/ProductDescCard';
import '../../index.css'
import './foodContainer.css'
import { AppContext, AppDispatchContext } from '../../context/myContext';
import ClickBoundary from '../onBlur/ClickBoundary';

const FoodContainer = () => {
    
    const { setShowProductDesc, setProductdata } = useContext(AppDispatchContext);
    const { showProductDesc, productdata, searchValue, productDesRef } = useContext(AppContext);
    const [productDesData, setShowProductDescData] = useState({});

    useEffect(() => {
        groupedDataFunc();
    }, []);
    // console.log("productData: ",productdata);

    function groupedDataFunc(productListFilter){
        const productListTemp = searchValue !== "" ? productListFilter: productList;
        const groupedData = productListTemp.reduce((acc, item) => {
            const categoryName = item.category.name;
            if (!acc[categoryName]) {
                acc[categoryName] = { category: categoryName, data: [] };
            }
            acc[categoryName].data.push(item);
            return acc;
        }, {});

        setProductdata(Object.values(groupedData));
    }

    useEffect(()=>{
        let searchValueTemp = searchValue.trim();
        // console.log(searchValueTemp, productList);
        const productDataFilter = productList.filter((item, index)=> item.title.toLowerCase().includes(searchValueTemp.toLowerCase()));
        
        if(searchValueTemp === ""){
            groupedDataFunc([]);
        }else{
            groupedDataFunc(productDataFilter);
        }
       

    }, [searchValue])



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
                            <div key={ind} >
                                {/* <a href={`#${val.category}`}></a> */}
                                <h1 className='secondaryHeader' id={val.category} >{val.category}</h1>
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
                    showProductDesc ?
                    <ClickBoundary ref={productDesRef} onOutsideClick={()=>setShowProductDesc(false)}>
                    <ProductDescCard
                        closeProductDesc={() => setShowProductDesc(false)}
                        productDesData={productDesData}
                    /> </ClickBoundary>  : <></>
                }
            </div>
        </>
    );
};

export default FoodContainer;
