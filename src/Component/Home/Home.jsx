import React from 'react'
import "./home.css";
import Banner from '../Banner/Banner';
import FilterNav from '../Filter/FilterNav';
import FoodContainer from '../FoodContainer/FoodContainer';

const Home = () => {

    return (
        <div >
            <Banner />
            <FilterNav />
            <FoodContainer />
        </div>
    )
}

export default Home
