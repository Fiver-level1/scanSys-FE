import React, { createContext, useState } from "react";

const AppContext = createContext("");
const AppDispatchContext = createContext("");

const AppProvider = ({ children }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [arrowClick, setArrowClick] = useState(false);

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

    return (
        <AppContext.Provider value={{showPopup, arrowClick, hidePopup, handlePopUpVisibility, handleArrowClickVisibility, hideArrowClick}}>
            <AppDispatchContext.Provider value={{}}>
                {children}
            </AppDispatchContext.Provider>
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext, AppDispatchContext };
