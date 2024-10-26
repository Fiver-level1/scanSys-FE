import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./home.css";
import Sidebar from '../Sidebar/Sidebar';
import Banner from '../Banner/Banner';

const Home = () => {

    return (
        <div >
            <Navbar/>
            <Sidebar/>
            <Banner/>
        </div>
    )
}

export default Home
