import React, { useContext, useEffect, useState } from 'react'
import "./sidebar.css"
import { AppContext } from '../../context/myContext';
import { navLang, navlist } from '../../content/navList';
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { FaRegUser } from "react-icons/fa";
const Sidebar = () => {
  const { showPopup, hidePopup, handleArrowClickVisibility, setShowCookiesPopUp, adjustScroll, sidebarRef } = useContext(AppContext);
  const { role, userName, isLogin } = useContext(AuthContext);
  const [validProfile, setValidProfie] = useState(false);
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
    if (item === "Help") {
      navigate('/help')
    }
    if (item === "Terms and conditions") {
      navigate("/termsAndCondition");
    }
    if (item === "Privacy Policy") {
      navigate("/privacyPolicy")
    }
    if (item == "orderHistory") {
      navigate("/orderHistory");
    }
  }
  const handelLogout = () => {
    hidePopup();
    localStorage.removeItem("access_token");
    window.location.href = "/"
  }
  useEffect(() => {
    if (role && role != "") {
      setValidProfie(true);
    }
  }, [role])

  return (
    <div className={`sidebar sidebar-min-width ${!showPopup ? "sidebar-unactive" : "sidebar-active"}`} ref={sidebarRef}>
      <ul className='sidebar-ul sidebar-min-width'>
        {validProfile ?
          <div className="userProfile">
            <FaRegUser />
            <p>{userName}</p>
          </div> :
          <></>}
        {navlist.map((item, index) => {
          if (item.tittle.toLowerCase() === "profile") {
            return (
              !validProfile && (
                <li
                  className='sidebar-li'
                  key={index}
                  onClick={() => handleSidebarList(item.tittle)}
                >
                  <div className="optName">
                    {item.icon} {item.tittle}
                  </div>
                </li>
              )
            );
          } else if (item.tittle.toLowerCase() === "orderhistory") {
            return (
              validProfile && (
                <li
                  className='sidebar-li'
                  key={index}
                  onClick={() => handleSidebarList(item.tittle)}
                >
                  <div className="optName">
                    {item.icon} Order History
                  </div>
                </li>
              )
            );
          } else {
            return (
              <li
                className='sidebar-li'
                key={index}
                onClick={() => handleSidebarList(item.tittle)}
              >
                <div className="optName">
                  {item.icon} {item.tittle}
                </div>
              </li>
            );
          }
        })}
      </ul>
      {
        isLogin && <div className="logOutBtn" onClick={handelLogout}>
          <AiOutlineLogout /> <span>logout</span>
        </div>
      }

    </div>
  )
}

export default Sidebar;