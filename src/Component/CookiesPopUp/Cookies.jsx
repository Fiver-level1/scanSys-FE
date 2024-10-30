import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../../context/myContext';
import './cookies.css'

const Cookies = () => {
    const { setShowCookiesPopUp } = useContext(AppContext);

    return (
        <div className="CookiesHolder">
            <div class="cookiesContainer">
                <div class="cookiesContent" id="cookiesPopup">
                    <button class="close" onClick={() => setShowCookiesPopUp(false)}>✖</button>
                    <img src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png" alt="cookies-img" />
                    <p>This is the only way we can guarantee the best experience. You can change your choice later under the menu "Cookies".</p>
                    <button class="accept">That's fine!</button>
                </div>
            </div>
        </div>
    )
}

export default Cookies
