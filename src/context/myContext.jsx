import React, { createContext, useRef, useState } from "react";
import { useCookies } from "react-cookie";

const AppContext = createContext("");
const AppDispatchContext = createContext("");

const AppProvider = ({ children }) => {

    const [cookie, setCookie, removeCookie] = useCookies(["myCart"]);
    const [showPopup, setShowPopup] = useState(false);
    const [redirectTo, setredirectTo] = useState('/');
    const [arrowClick, setArrowClick] = useState(false);
    const [myCart, setMyCart] = useState(cookie.myCart ? cookie.myCart : []);
    const [showCookiesPopUp, setShowCookiesPopUp] = useState(false);
    const [showProductDesc, setShowProductDesc] = useState(false);
    const [productdata, setProductdata] = useState([]);
    const [signInPopUp, setSigninPopUp] = useState(false)
    const [searchValue, setSearchValue] = useState("");
    const sidebarRef = useRef(null);
    const productDesRef = useRef(null);


    const hidePopup = () => {
        setShowPopup(false);
    }

    const handlePopUpVisibility = () => {
        setShowPopup(true);
    }

    const handleArrowClickVisibility = () => {
        setArrowClick(true);
    }

    const hideArrowClick = () => {
        setArrowClick(false);
    }
    function adjustScroll(event, targetId) {
        if (event) {
            event.preventDefault();
        }
        const targetElement = document.getElementById(targetId);
        let yOffset = -32;
        if (targetId === "filterNav") {
            yOffset = -90;
        }
        const yPosition = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }

    // console.log("my cart: ", myCart);


    return (
        <AppContext.Provider value={{ showPopup, arrowClick, hidePopup, handlePopUpVisibility, handleArrowClickVisibility, hideArrowClick, myCart, showCookiesPopUp, setShowCookiesPopUp, setredirectTo, redirectTo, showProductDesc, productdata, searchValue, adjustScroll, sidebarRef, productDesRef, setSigninPopUp, signInPopUp }}>
            <AppDispatchContext.Provider value={{ setMyCart, setShowProductDesc, setProductdata, setSearchValue, setShowPopup, setArrowClick }}>
                {children}
            </AppDispatchContext.Provider>
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext, AppDispatchContext };
