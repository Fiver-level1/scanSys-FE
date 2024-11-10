import React, { useContext, useEffect, useState } from 'react'
import "./home.css";
import Banner from "../Banner/Banner";
import FilterNav from '../Filter/FilterNav';
import FoodContainer from '../FoodContainer/FoodContainer';
import Loader from '../Loader/Loader';
import { AppContext, AppDispatchContext } from '../../context/myContext';
import { getProducts } from '../../Services/ProductApis';

const Home = () => {
    const {isLoader} = useContext(AppContext)
    const [productList, setProductList] = useState([])
    const { setIsLoader, } = useContext(AppDispatchContext);
    console.log(isLoader)

    useEffect(() => {
        getProducts((error, response) => {
            if (error) {
                console.error("Error fetching products:", error);
            } else {
                setProductList(response.data);
            }
            setIsLoader(false);
        });

    }, []);
    
    return (
        <div >
            <Banner />
            {isLoader ? <Loader /> : <>
                <FilterNav />
                <FoodContainer productList={productList} />
            </>
            }
        </div>
    )
}

export default Home
