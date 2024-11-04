import React, { useContext, useEffect, useRef } from 'react'
import "./Popup.css";
import { AppContext, AppDispatchContext } from '../../context/myContext';
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { AiTwotoneMail } from "react-icons/ai";
import { AiTwotoneLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { PiUserListDuotone } from "react-icons/pi";
import ClickBoundary from '../onBlur/ClickBoundary';
const Popup = () => {
    const { hideArrowClick, redirectTo, setredirectTo } = useContext(AppContext);
    const { setArrowClick } = useContext(AppDispatchContext);
    const navigate = useNavigate();
    const loginRef = useRef(null);

    const HandleGuestRequest = () => {
        hideArrowClick();
        const valRedirectTo = redirectTo;
        setredirectTo('/');
        navigate(valRedirectTo);
    };


    return (
        <div className="singinContainer">
            <ClickBoundary ref={loginRef} onOutsideClick = {()=>setArrowClick(false)}>
            <div className="content" ref={loginRef}>
                <div className="text">Register</div>
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
                    <button className="button">Sign in</button>
                    <div className="loginOptions">
                        <p>--- Or ---</p>
                        <button className="btn-singin">
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
