import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./home.css";
import Sidebar from '../Sidebar/Sidebar';
import Banner from '../Banner/Banner';
import ListFoodCard from '../FoodCardHome/ListFoodCard';
import FilterNav from '../Filter/FilterNav';

const Home = () => {

    return (
        <div >
            <Navbar />
            <Sidebar />
            <Banner />
            <FilterNav />
            <section className="foodCardContainer">
                <div className="foodCardHolder">
                    <h1 className='secondaryHeader'>Ontbijt</h1>
                    <div className="foodCardWrapper">
                        <ListFoodCard />
                        <ListFoodCard />
                        <ListFoodCard />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
