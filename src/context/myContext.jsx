import React, { createContext, useRef, useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import { getCartItems } from "../Services/CartApis";
import { AuthContext } from "./AuthContext";
import { postRequest } from "../Services/ApiController";
const AppContext = createContext("");
const AppDispatchContext = createContext("");

const AppProvider = ({ children }) => {

    const { isLogin, setisLogin } = useContext(AuthContext);
    const [cookie, setCookie, removeCookie] = useCookies(["myCart"]);
    const [showPopup, setShowPopup] = useState(false);
    const [signinPopUp, setSigninPopUp] = useState(false);
    const [redirectTo, setredirectTo] = useState('/');
    const [arrowClick, setArrowClick] = useState(false);
    const [myCart, setMyCart] = useState([]);
    const [showCookiesPopUp, setShowCookiesPopUp] = useState(false);
    const [showProductDesc, setShowProductDesc] = useState(false);
    const [productdata, setProductdata] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [deleteItem, setDeleteItem] = useState(false);
    const [itemAdded, setItemAdded] = useState(false);
    const [isLoader, setIsLoader] = useState(true);
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

    useEffect(() => {
        // debugger;

        const fetchCartDetails = async()=>{
            if(isLogin){
                // if (localStorage.getItem("access_token")) {
                    // console.log(myCart)
                    // let data = { items: [] };
                    // myCart.forEach((item, index)=>{
                    //     let m = {};
                    //     m.product_id = item.id;
                    //     m.quantity = item.quantity;
                    //     data.items.push(m);
                    // })
                    // console.log(data)
                    // await postRequest("/api/cart/", (error, response)=>{
                    //     if(error){
                    //         console.log("error in posting:  ", error);
                    //     }
                    //     if(response){
                            
                    //     }
                    // }, data)
                    await getCartItems((error, response) => {
                        if (error) {
                            console.error("Error fetching products:", error);
                        } else {
                            console.log("response.data.cart_items",response.data.cart_items)
                            // setMy(response.data.cart_items);
                            setMyCart(response.data.cart_items)
                        }
                        setIsLoader(false)
                    });
                // }
                
            }else{
                setIsLoader(false);
                setMyCart(cookie.myCart)
            }
        }
        
        
        fetchCartDetails();
    }, [ isLogin]);




    // console.log("my cart: ", myCart);
    console.log(isLoader)


    return (
        <AppContext.Provider value={{ showPopup, arrowClick, hidePopup, handlePopUpVisibility, handleArrowClickVisibility, hideArrowClick, myCart, showCookiesPopUp, setShowCookiesPopUp, setredirectTo, redirectTo, showProductDesc, productdata, searchValue, adjustScroll, sidebarRef, productDesRef, deleteItem, itemAdded, signinPopUp, setSigninPopUp, isLoader }}>
            <AppDispatchContext.Provider value={{ setMyCart, setShowProductDesc, setProductdata, setSearchValue, setShowPopup, setArrowClick, setDeleteItem, setItemAdded, setIsLoader }}>
                {children}
            </AppDispatchContext.Provider>
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext, AppDispatchContext };
