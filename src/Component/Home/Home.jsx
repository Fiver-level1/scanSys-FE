import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./home.css";
import Sidebar from '../Sidebar/Sidebar';
import Banner from '../Banner/Banner';
import FilterNav from '../Filter/FilterNav';
import FoodContainer from '../FoodContainer/FoodContainer';

const Home = () => {

    return (
        <div >
            <Navbar />
            <Sidebar />
            <Banner />
            <FilterNav />
            <FoodContainer />
        </div>
    )
}

export default Home
