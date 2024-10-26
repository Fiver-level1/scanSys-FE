import React, { useContext } from 'react'
import "./sidebar.css"
import { AppContext } from '../../context/myContext';

const Sidebar = () => {
    const {showPopup, hidePopup, handleArrowClickVisibility} = useContext(AppContext);

  return (
    <div className={`sidebar z-10 sidebar-min-width ${!showPopup? "sidebar-unactive": "sidebar-active"}`}>
        <ul className='bg-[#ECE5C7] h-screen sidebar-min-width inline-block pt-8'>
            <li  onClick={()=>{hidePopup(); handleArrowClickVisibility()}} className='sidebar-li'>Your Billy-account
            <svg class="h-6 w-6 text-[#354259]"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="9 18 15 12 9 6" /></svg>
            </li>
            <li  onClick={hidePopup} className='sidebar-li'>Help  <svg class="h-6 w-6 text-[#354259]"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="9 18 15 12 9 6" /></svg></li>
            <li  onClick={hidePopup} className='sidebar-li'>Cookies  <svg class="h-6 w-6 text-[#354259]"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="9 18 15 12 9 6" /></svg></li>
            <li  onClick={hidePopup} className='sidebar-li'>Terms and conditions  <svg class="h-6 w-6 text-[#354259]"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="9 18 15 12 9 6" /></svg></li>
            <li  onClick={hidePopup} className='sidebar-li'>Privacy Policy  <svg class="h-6 w-6 text-[#354259]"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="9 18 15 12 9 6" /></svg></li>
            <li  onClick={hidePopup} className='sidebar-li'>Billy in your venue?   <svg class="h-6 w-6 text-[#354259]"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="9 18 15 12 9 6" /></svg></li>
            <li  onClick={hidePopup} className='sidebar-li'>
               <span className='sidebar-li-lang'>NL</span>
               <span className='sidebar-li-lang'>FR</span>
               <span className='sidebar-li-lang'>EN</span>
               <span className='sidebar-li-lang'>ES</span>
               <span className='sidebar-li-lang'>DE</span>
               <span className='sidebar-li-lang'>IT</span>
            </li>
        </ul>
       
    </div>
  )
}

export default Sidebar