import React, { useContext, useEffect, useState } from 'react'
import "./home.css";
import Banner from "../Banner/Banner";
import FilterNav from '../Filter/FilterNav';
import FoodContainer from '../FoodContainer/FoodContainer';
import Loader from '../Loader/Loader';
import { AppContext, AppDispatchContext } from '../../context/myContext';
import { toast, ToastContainer } from 'react-toastify';

const Home = () => {
    const {isLoader, productList} = useContext(AppContext)

    return (
        <div >
            <Banner />
            {isLoader ? <Loader /> : <>
                <FilterNav />
                <FoodContainer productList={productList} />
            </>
            }
            <ToastContainer position="top-right"/>
        </div>
    )
}

export default Home
