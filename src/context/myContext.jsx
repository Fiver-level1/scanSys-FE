import React, { createContext, useRef, useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import { getCartItems } from "../Services/CartApis";
import { AuthContext } from "./AuthContext";
import { postRequest } from "../Services/ApiController";
const AppContext = createContext("");
import { COOKIE_CONSENT, expireTime } from '../Constants/cookieConst'
import { getProducts } from "../Services/ProductApis";
const AppDispatchContext = createContext("");

const AppProvider = ({ children }) => {
    ;

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
    const [productList, setProductList] = useState([])
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
        const fetchCartDetails = async () => {
            if (isLogin) {
                removeCookie('myCart', { path: '/' });
                let data = { items: [] };
                myCart.forEach((item, index) => {
                    let m = {};
                    m.product_id = item.id;
                    m.quantity = item.quantity;
                    data.items.push(m);
                })
                await postRequest("/api/cart/", (error, response) => {
                    if (error) {
                        console.log("error in posting:  ", error);
                    }
                    if (response) {
                        
                    }
                }, data)
                await getCartItems((error, response) => {
                    if (error) {
                        console.error("Error fetching products:", error);
                    } else {
                        setMyCart(response.data.cart_items)
                    }
                    setIsLoader(false)
                });
                // }

            } else {
                if (!localStorage.getItem("access_token")) {
                    setMyCart(cookie.myCart ? cookie.myCart : [])
                }
                setIsLoader(false);
            }
        }

        fetchCartDetails();
    }, [isLogin]);

    useEffect(() => {
        setCookie(COOKIE_CONSENT, 'true', { path: '/', expires: expireTime });
    }, [])

    useEffect(() => {
        getProducts((error, response) => {
            if (error) {
                console.error("Error fetching products:", error);
            } else {
                setProductList(response.data);
                setCookieProductListChange(response.data);

            }
            setIsLoader(false);
        });

    }, []);

    const setCookieProductListChange = (products)=>{
        const productsArray = cookie.myCart.map((cp) => {
            const productT = products.find((p) => p?.id === cp?.id);
            if (productT) {
                return { ...productT, quantity: cp?.quantity };
            }
            return null; // Handle the case where the product is not found
        }).filter(Boolean); 

        setMyCart(productsArray);
        if(!isLogin){
            setCookie("myCart", productsArray, { path: '/', expires: expireTime });
        }
    }


    return (
        <AppContext.Provider value={{ showPopup, arrowClick, hidePopup, handlePopUpVisibility, handleArrowClickVisibility, hideArrowClick, myCart, showCookiesPopUp, setShowCookiesPopUp, setredirectTo, redirectTo, showProductDesc, productdata, searchValue, adjustScroll, sidebarRef, productDesRef, deleteItem, itemAdded, signinPopUp, setSigninPopUp, isLoader, productList }}>
            <AppDispatchContext.Provider value={{ setMyCart, setShowProductDesc, setProductdata, setSearchValue, setShowPopup, setArrowClick, setDeleteItem, setItemAdded, setIsLoader, setProductList }}>
                {children}
            </AppDispatchContext.Provider>
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext, AppDispatchContext };
