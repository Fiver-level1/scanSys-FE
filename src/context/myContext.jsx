import React, { createContext, useState } from "react";
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
    const [searchValue, setSearchValue] = useState("");



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
        event.preventDefault();
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
        <AppContext.Provider value={{ showPopup, arrowClick, hidePopup, handlePopUpVisibility, handleArrowClickVisibility, hideArrowClick, myCart, showCookiesPopUp, setShowCookiesPopUp, setredirectTo, redirectTo, showProductDesc, productdata, searchValue, adjustScroll }}>
            <AppDispatchContext.Provider value={{ setMyCart, setShowProductDesc, setProductdata, setSearchValue }}>
                {children}
            </AppDispatchContext.Provider>
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext, AppDispatchContext };
