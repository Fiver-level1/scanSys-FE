import React, { useContext } from 'react'
import Popup from '../Popup/Popup';
import { AppContext } from '../../context/myContext';
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Cookies from '../CookiesPopUp/Cookies';

const Navbar = () => {
    const { showPopup, handlePopUpVisibility, hidePopup, arrowClick, showCookiesPopUp, myCart } = useContext(AppContext);

    return (

        <div className='nav-container'>
            {!showPopup ?
                <div className='menu' onClick={handlePopUpVisibility}>
                    <svg className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div> :
                <div className='menu' onClick={hidePopup}>
                    <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
                </div>}
            {arrowClick && <Popup />}
            {showCookiesPopUp && <Cookies />}

            <Link to='/cart'>
                <div className="cartIcon">
                    <FaShoppingCart />
                    <span>{myCart.length && myCart.length}</span>
                </div>
            </Link>

        </div>
    )
}

export default Navbar