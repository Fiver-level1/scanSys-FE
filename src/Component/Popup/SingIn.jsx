import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import "./Popup.css";
import { AiTwotoneMail } from "react-icons/ai";
import { AiTwotoneLock } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { AppContext, AppDispatchContext } from '../../context/myContext';
import { useContext } from 'react';
import ClickBoundary from '../onBlur/ClickBoundary';
import { CLIENT_ID, CLIENT_SECRET } from '../../Services/Constant';
import { postRequestAuth } from '../../Services/AuthControllerWithoutToken';
import { getRequest } from '../../Services/ApiController';
import { AuthContext } from '../../context/AuthContext';

const SignIn = () => {
    const { hideArrowClick, setSigninPopUp } = useContext(AppContext);
    const { setUserName, setRole } = useContext(AuthContext);
    const { setArrowClick } = useContext(AppDispatchContext);

    const [loginInput, setLoginInput] = useState({
        "client_secret": CLIENT_SECRET,
        "client_id": CLIENT_ID,
        "username": "",
        "password": "",
        "grant_type": "password"
    })
    const loginRef = useRef(null);
    const hideCloseArrow = () => {
        setSigninPopUp(false)
        hideArrowClick();
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };
    const handleFormLogin = (e) => {
        e.preventDefault();
        postRequestAuth("auth/token", (err, res) => {
            setSigninPopUp(false);
            if (err) {
                console.error("Error in authentication:", err);
            } else {
                const accessToken = res?.data?.access_token;
                if (accessToken) {
                    localStorage.setItem("access_token", accessToken);
                    getRequest("/api/profile/", (err, res) => {
                        if (err) {
                            console.log("error ", err);
                        } else {
                            setRole(res.data.type);
                            setUserName(res.data.first_name);
                        }
                    })
                }
            }
        }, loginInput);
    };

    return (
        <div className="singinContainer">
            <ClickBoundary ref={loginRef} onOutsideClick={() => setArrowClick(false)} >
                <div className="content" ref={loginRef}>
                    <div className="text">Login</div>
                    <form action="#">
                        <div className="field">
                            <input required type="text" className="input" name='username' value={loginInput.username} onChange={handleInputChange} placeholder='Email' />
                            <span className="span">
                                <AiTwotoneMail />
                            </span>
                        </div>
                        <div className="field">
                            <input required="" type="password" className="input" name='password' value={loginInput.password} onChange={handleInputChange} placeholder='Password' />
                            <span className="span">
                                <AiTwotoneLock />
                            </span>
                        </div>
                        <button className="button" onClick={handleFormLogin}>Login</button>
                    </form>
                    <div className="closePopUp" onClick={hideCloseArrow}>
                        <IoClose />
                    </div>
                </div>
            </ClickBoundary>
        </div>
    )
}

export default SignIn
