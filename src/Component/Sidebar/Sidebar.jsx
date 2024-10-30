import React, { useContext } from 'react'
import "./sidebar.css"
import { AppContext } from '../../context/myContext';
import { navLang, navlist } from '../../content/navList';
import Arrow from '../../assets/svg/arrow';

const Sidebar = () => {
  const { showPopup, hidePopup, handleArrowClickVisibility, setShowCookiesPopUp } = useContext(AppContext);

  const handleSidebarList = (item) => {
    hidePopup();
    if (item === "Your Billy-account") {
      handleArrowClickVisibility();
    }
    if (item === "Cookies") {
      setShowCookiesPopUp(true);
    }
  }

  return (
    <div className={`sidebar sidebar-min-width ${!showPopup ? "sidebar-unactive" : "sidebar-active"}`}>
      <ul className='sidebar-ul sidebar-min-width'>
        {navlist.map((item, index) => {
          return (
            <li className='sidebar-li' key={index} onClick={() => handleSidebarList(item.tittle)}>

              <div className="optName">
                {item.icon} {item.tittle}
              </div> <Arrow />

            </li>
          )
        })}

      </ul>

    </div>
  )
}

export default Sidebar