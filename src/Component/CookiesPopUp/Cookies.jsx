import React, { useRef } from 'react'
import { useContext } from 'react';
import { AppContext } from '../../context/myContext';
import './cookies.css'
import { COOKIE_CONSENT, expireTime } from '../../Constants/cookieConst';
import { useCookies } from 'react-cookie';
import ClickBoundary from '../onBlur/ClickBoundary';

const Cookies = () => {
    const { setShowCookiesPopUp } = useContext(AppContext);
    const [cookie, setCookie, removeCookie] = useCookies(COOKIE_CONSENT);
    const cookieRef = useRef(null);


    const handleAcceptCookie= ()=>{
        setCookie(COOKIE_CONSENT, 'true', { path: '/', expires: expireTime });
        setShowCookiesPopUp(false);
    }

    return (
        <div className="CookiesHolder">
            <div class="cookiesContainer">
                <ClickBoundary ref={cookieRef} onOutsideClick={()=> handleAcceptCookie()}>
                <div class="cookiesContent" id="cookiesPopup" ref={cookieRef}>
                    <button class="close" onClick={() => setShowCookiesPopUp(false)}>✖</button>
                    <img src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png" alt="cookies-img" />
                    <p>This is the only way we can guarantee the best experience. You can change your choice later under the menu "Cookies".</p>
                    <button class="accept" onClick={handleAcceptCookie}>That's fine!</button>
                </div>
                </ClickBoundary>
            </div>
        </div>
    )
}

export default Cookies
