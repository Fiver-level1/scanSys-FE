import React, { useContext } from 'react'
import "./Popup.css";
import { AppContext } from '../../context/myContext';
import { IoClose } from "react-icons/io5";
const Popup = () => {
    const { hideArrowClick } = useContext(AppContext);


    return (
        // popup-overlay
        // 'fixed top-0 left-0 w-screen h-screen bright-black z-10'
        // <div className="popup-overlay">

        // <div className="popup-content">
        // <span className="popup-close" onClick={hideArrowClick}>
        // <svg className="popup-close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15"  /></svg>  

        // </span>    
        // <div className='popup-header'>Choose an option to continue</div> 
        //     <ul className='bg-[#f3f0e369] p-3 rounded-lg'>
        //         <li className='popup-li bg-black text-white '>

        //             <svg class="h-8 w-8 text-white float-left"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7c-3 0-4 3-4 5.5 0 3 2 7.5 4 7.5 1.088-.046 1.679-.5 3-.5 1.312 0 1.5.5 3 .5s4-3 4-5c-.028-.01-2.472-.403-2.5-3-.019-2.17 2.416-2.954 2.5-3-1.023-1.492-2.951-1.963-3.5-2-1.433-.111-2.83 1-3.5 1-.68 0-1.9-1-3-1z" />  <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" /></svg> Continue with Apple

        //        </li>
        //         <li className='popup-li bg-white text-[#354259]'>
        //         <svg class="h-8 w-8 text-[#354259] inline float-left"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M17.788 5.108A9 9 0 1021 12h-8" /></svg>
        //         Continue with Google</li>
        //         <li className='popup-li bg-facebook text-white '><svg class="h-8 w-8 text-white inline float-left"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> Continue with Facebook</li>
        //         <li className='popup-li bg-white text-[#354259]'>Choose with email and password</li>
        //         <li> Or </li>
        //         <li className='popup-li bg-white text-[#354259]'>Start without an account</li>
        //     </ul>
        // </div>
        // </div>
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
                        <a href="#"><p>Continue as a guest</p></a>

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
