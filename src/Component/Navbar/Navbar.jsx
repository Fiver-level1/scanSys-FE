import React, { useContext } from 'react'
import Popup from '../Popup/Popup';
import { AppContext } from '../../context/myContext';
import "./Navbar.css";

const Navbar = () => {
    const { showPopup, handlePopUpVisibility, hidePopup, arrowClick } = useContext(AppContext);

    return (

        <div className='nav-container'>
            {!showPopup ?
                <div className='menu' onClick={handlePopUpVisibility}>
                    <svg className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div> :
                <div className='menu' onClick={hidePopup}>
                    <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
                </div>}
            {arrowClick && <Popup />}

        </div>
    )
}

export default Navbar