import React, { useContext } from 'react'
import "./sidebar.css"
import { AppContext } from '../../context/myContext';
import { navLang, navlist } from '../../content/navList';
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { FaRegUserCircle } from "react-icons/fa";
const Sidebar = () => {
  const { showPopup, hidePopup, handleArrowClickVisibility, setShowCookiesPopUp, adjustScroll, sidebarRef } = useContext(AppContext);
  const { role, userName } = useContext(AuthContext);
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
  }
  const handelLogout = () => {
    hidePopup();
  }
  console.log("sidebarRef: ", role);

  return (
    <div className={`sidebar sidebar-min-width ${!showPopup ? "sidebar-unactive" : "sidebar-active"}`} ref={sidebarRef}>
      <ul className='sidebar-ul sidebar-min-width'>
        {(role && role?.toLowerCase() !== "guest") ?
          <div className="userProfile">
            <FaRegUserCircle />
            <p>{userName}</p>
          </div> : <></>
        }
        {navlist.map((item, index) => {
          return (
            <li className='sidebar-li' key={index} onClick={() => handleSidebarList(item.tittle)}>
              {item.tittle === "Profile" ? (
                (!role || role.toLowerCase() === "guest") ? (
                  <div className="optName">
                    {item.icon} {item.tittle}
                  </div>
                ) : null
              ) : (
                <div className="optName">
                  {item.icon} {item.tittle}
                </div>
              )}
            </li>
          );
        })}

      </ul>
      <div className="logOutBtn" onClick={handelLogout}>
        <AiOutlineLogout /> <span>logout</span>
      </div>
    </div>
  )
}

export default Sidebar;