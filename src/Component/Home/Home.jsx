import React, { useContext, useEffect, useState } from 'react'
import "./home.css";
import Banner from "../Banner/Banner";
import FilterNav from '../Filter/FilterNav';
import FoodContainer from '../FoodContainer/FoodContainer';
import Loader from '../Loader/Loader';
import { AppContext, AppDispatchContext } from '../../context/myContext';
import { getProducts } from '../../Services/ProductApis';
import { AuthContext } from '../../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { useCookies } from 'react-cookie';
import { COOKIE_CONSENT, expireTime } from '../../Constants/cookieConst';

const Home = () => {
    const {isLoader, myCart} = useContext(AppContext)
    const [productList, setProductList] = useState([])
    const { setIsLoader, setMyCart } = useContext(AppDispatchContext);
    const {isLogin} = useContext(AuthContext);
    const [cookie, setCookie, removeCookie] = useCookies(["myCart"]);

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
        <div >
            <Banner />
            {isLoader ? <Loader /> : <>
                <FilterNav />
                <FoodContainer productList={productList} />
            </>
            }
            <ToastContainer position="top-right"/>
        </div>
    )
}

export default Home
