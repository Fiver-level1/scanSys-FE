import React, { useContext } from 'react'
import "./Popup.css";
import { AppContext } from '../../context/myContext';
import "../Sidebar/sidebar.css";

const Popup = () => {
    const {hideArrowClick} = useContext(AppContext);
    

    return (
        <div className='fixed top-0 left-0 w-screen h-screen bright-black z-10'>

        <div className='fixed top-20 right-1/2 translate-x-1/2 text-center text-pink-600 w-min text-lg opacity-100 	 bg-white rounded-lg'>
        <span className="float-right text-[#354259]" onClick={hideArrowClick}>
        <svg className="h-8 w-8 inline mb-5 rounded-full bg-white p-px m-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15"  /></svg>  
       
        </span>    
        <div className='bg-[#354259] text-white p-14 pb-5 text-xl rounded-tl-lg rounded-tr-lg '>Choose an option to continue</div> 
            <ul className='bg-[#f3f0e369] p-3 rounded-lg'>
                <li className='popup-li bg-black text-white '>
                 
                    <svg class="h-8 w-8 text-white float-left"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7c-3 0-4 3-4 5.5 0 3 2 7.5 4 7.5 1.088-.046 1.679-.5 3-.5 1.312 0 1.5.5 3 .5s4-3 4-5c-.028-.01-2.472-.403-2.5-3-.019-2.17 2.416-2.954 2.5-3-1.023-1.492-2.951-1.963-3.5-2-1.433-.111-2.83 1-3.5 1-.68 0-1.9-1-3-1z" />  <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" /></svg> Continue with Apple
                    
               </li>
                <li className='popup-li bg-white text-[#354259]'>
                <svg class="h-8 w-8 text-[#354259] inline float-left"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M17.788 5.108A9 9 0 1021 12h-8" /></svg>
                Continue with Google</li>
                <li className='popup-li bg-facebook text-white '><svg class="h-8 w-8 text-white inline float-left"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> Continue with Facebook</li>
                <li className='popup-li bg-white text-[#354259]'>Choose with email and password</li>
                <li> Or </li>
                <li className='popup-li bg-white text-[#354259]'>Start without an account</li>
            </ul>
        </div>
        </div>
    )
}

export default Popup