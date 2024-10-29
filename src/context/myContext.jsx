import React, { createContext, useState } from "react";
import { useCookies } from "react-cookie";

const AppContext = createContext("");
const AppDispatchContext = createContext("");

const AppProvider = ({ children }) => {

    const [ cookie, setCookie, removeCookie ] = useCookies(["myCart"]);    
    const [showPopup, setShowPopup] = useState(false);
    const [arrowClick, setArrowClick] = useState(false);
    const [myCart, setMyCart] = useState(cookie.myCart? cookie.myCart: []);

    const hidePopup = ()=>{
        setShowPopup(false);
    }

    const handlePopUpVisibility = ()=>{
        setShowPopup(true);
    }

    const handleArrowClickVisibility = ()=>{
        setArrowClick(true);
    }

    const hideArrowClick = ()=>{
        setArrowClick(false);
    }

    // console.log("my cart: ", myCart);


    return (
        <AppContext.Provider value={{showPopup, arrowClick, hidePopup, handlePopUpVisibility, handleArrowClickVisibility, hideArrowClick, myCart}}>
            <AppDispatchContext.Provider value={{ setMyCart }}>
                {children}
            </AppDispatchContext.Provider>
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext, AppDispatchContext };
