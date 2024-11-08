
import React, { useContext, useEffect, useRef, useState } from 'react'
import "./Popup.css";
import { AppContext, AppDispatchContext } from '../../context/myContext';
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { AiTwotoneMail } from "react-icons/ai";
import { AiTwotoneLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { PiUserListDuotone } from "react-icons/pi";
import ClickBoundary from '../onBlur/ClickBoundary';
import { useGoogleLogin } from '@react-oauth/google';
import { postRequestAuth } from '../../Services/AuthControllerWithoutToken';
import { CLIENT_ID } from '../../Services/Constant';
import { AuthContext } from '../../context/AuthContext';
const Popup = () => {
    const { hideArrowClick, redirectTo, setredirectTo, setSigninPopUp } = useContext(AppContext);
    const { setArrowClick } = useContext(AppDispatchContext);
    const { isLogin, setisLogin } = useContext(AuthContext);
    const [googleAuthPaylod, setGoogleAuthPaylod] = useState({
        "grant_type": "convert_token",
        "client_id": CLIENT_ID,
        "backend": "google-oauth2",
        "token": ""
    })
    const navigate = useNavigate();
    const loginRef = useRef(null);

    const HandleGuestRequest = () => {
        hideArrowClick();
        const valRedirectTo = redirectTo;
        setredirectTo('/');
        navigate(valRedirectTo);
    };
    const handelFormLogin = () => {
        setSigninPopUp(true);
        hideArrowClick();
    }
    console.log("is login -- ", isLogin);

    const handleGoogleLogin = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            hideArrowClick();
            console.log('Google Login Success:', tokenResponse);
            const updatedPayload = {
                ...googleAuthPaylod,
                token: tokenResponse.access_token
            };
            setGoogleAuthPaylod(updatedPayload);
            postRequestAuth("/auth/convert-token", (err, res) => {
                if (err) {
                    console.log("Error in Google Auth:", err);
                } else {
                    localStorage.setItem("access_token", res.data.access_token);
                    setisLogin(true);
                }
            }, updatedPayload);
        },
        onError: (error) => {
            hideArrowClick();
            console.error('Google Login Error:', error);
        }
    });



    return (
        <div className="singinContainer">
            <ClickBoundary ref={loginRef} onOutsideClick={() => setArrowClick(false)}>
                <div className="content" ref={loginRef}>
                    <div className="text">Register</div>
                    <div className="sign-up">
                        <p>Already have an account?</p>
                        <div onClick={handelFormLogin}>
                            <span> Go to login</span>
                        </div>
                    </div>
                    <form action="#">
                        <div className="field">
                            <input required="" type="text" className="input" placeholder='Full Name' />
                            <span className="span">
                                <PiUserListDuotone />
                            </span>
                        </div>
                        <div className="field">
                            <input required="" type="text" className="input" placeholder='Email or Phone' />
                            <span className="span">
                                <AiTwotoneMail />
                            </span>
                        </div>
                        <div className="field">
                            <input required="" type="password" className="input" placeholder='Password' />
                            <span className="span">
                                <AiTwotoneLock />
                            </span>
                        </div>
                        <button className="button">Register</button>
                        <div className="loginOptions">
                            <p>--- Or ---</p>
                            <button className="btn-singin" onClick={(e) => { e.preventDefault(); handleGoogleLogin() }}>
                                <FcGoogle />
                            </button>
                        </div>
                        <div className="sign-up">
                            <p>Prefer not to join?</p>
                            <div onClick={HandleGuestRequest}>
                                <span>Continue as a guest</span>
                            </div>
                        </div>
                    </form>
                    <div className="closePopUp" onClick={hideArrowClick}>
                        <IoClose />
                    </div>
                </div>
            </ClickBoundary>
        </div>
    )
}

export default Popup

