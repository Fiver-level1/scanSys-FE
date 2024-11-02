import React, { useContext } from 'react'
import "./sidebar.css"
import { AppContext } from '../../context/myContext';
import { navLang, navlist } from '../../content/navList';
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const { showPopup, hidePopup, handleArrowClickVisibility, setShowCookiesPopUp, adjustScroll } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSidebarList = (item) => {
    hidePopup();
    if (item === "Profile") {
      handleArrowClickVisibility();
    }
    if (item === "Cookies") {
      setShowCookiesPopUp(true);
    }
    if (item === "Home") {
      navigate('/')
    }
    if (item === "Menu") {
      const currentUrl = window.location.pathname;
      navigate('/');
      if (currentUrl === '/') {
        adjustScroll('', "filterNav");
        return;
      }
      setTimeout(() => {
        adjustScroll('', "filterNav");
      }, 0)
    }
    if( item === "Terms and conditions"){
      navigate("/termsAndCondition");
    }
    if( item === "Privacy Policy"){
      navigate("/privacyPolicy")
    }
  }
  const handelLogout = () => {
    hidePopup();
  }

  return (
    <div className={`sidebar sidebar-min-width ${!showPopup ? "sidebar-unactive" : "sidebar-active"}`}>
      <ul className='sidebar-ul sidebar-min-width'>
        {navlist.map((item, index) => {
          return (
            <li className='sidebar-li' key={index} onClick={() => handleSidebarList(item.tittle)}>

              <div className="optName">
                {item.icon} {item.tittle}
              </div>

            </li>
          )
        })}

      </ul>
      <div className="logOutBtn" onClick={handelLogout}>
        <AiOutlineLogout /> <span>logout</span>
      </div>
    </div>
  )
}

export default Sidebar