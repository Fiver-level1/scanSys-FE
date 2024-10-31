import React, { useContext, useEffect } from 'react'
import "./Popup.css";
import { AppContext } from '../../context/myContext';
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
const Popup = () => {
    const { hideArrowClick, redirectTo, setredirectTo } = useContext(AppContext);
    const navigate = useNavigate();

    const HandleGuestRequest = () => {
        hideArrowClick();
        const valRedirectTo = redirectTo;
        setredirectTo('/');
        navigate(valRedirectTo);
    };


    return (
        <div className="singinContainer">
            <div className="content">
                <div className="text">Login</div>
                <form action="#">
                    <div className="field">
                        <input required="" type="text" className="input" placeholder='Email or Phone' />
                        <span className="span">
                            <svg
                                className=""
                                xmlSpace="preserve"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                viewBox="0 0 512 512"
                                y={0}
                                x={0}
                                height={20}
                                width={50}
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g>
                                    <path
                                        className=""
                                        data-original="#000000"
                                        fill="#595959"
                                        d="M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z"
                                    />
                                </g>
                            </svg>
                        </span>
                    </div>
                    <div className="field">
                        <input required="" type="password" className="input" placeholder='password' />
                        <span className="span">
                            <svg
                                className=""
                                xmlSpace="preserve"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                viewBox="0 0 512 512"
                                y={0}
                                x={0}
                                height={20}
                                width={50}
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g>
                                    <path
                                        className=""
                                        data-original="#000000"
                                        fill="#595959"
                                        d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0"
                                    />
                                </g>
                            </svg>
                        </span>
                    </div>
                    <button className="button">Sign in</button>
                    <div className="loginOptions">
                        <p>--- Or ---</p>
                        <ul classname="ListLogin">
                            <li>
                                <button className="btn-singin">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ display: "inline-block", verticalAlign: "middle" }}
                                        role="img"
                                        y={128}
                                        x={128}
                                        fill="#0092E4"
                                        viewBox="0 0 24 24"
                                        height="40px"
                                        width="40px"
                                    >
                                        <path d="M21.456 10.154c.123.659.19 1.348.19 2.067c0 5.624-3.764 9.623-9.449 9.623A9.841 9.841 0 0 1 2.353 12a9.841 9.841 0 0 1 9.844-9.844c2.658 0 4.879.978 6.583 2.566l-2.775 2.775V7.49c-1.033-.984-2.344-1.489-3.808-1.489c-3.248 0-5.888 2.744-5.888 5.993c0 3.248 2.64 5.998 5.888 5.998c2.947 0 4.953-1.685 5.365-3.999h-5.365v-3.839h9.26Z" />
                                    </svg>
                                </button>
                            </li>
                            <li>
                                <button className="btn-singin">
                                    <svg
                                        id="facebook"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#1877F2"
                                        height={40}
                                        width={40}
                                    >
                                        <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.411c0-3.1 1.893-4.785 4.658-4.785 1.325 0 2.462.099 2.795.143v3.24h-1.918c-1.505 0-1.796.717-1.796 1.767v2.318h3.588l-.467 3.622h-3.121V24h6.116c.73 0 1.324-.595 1.324-1.324V1.325C24 .595 23.405 0 22.675 0z" />
                                    </svg>
                                </button>
                            </li>
                        </ul>

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
        </div>
    )
}

export default Popup
