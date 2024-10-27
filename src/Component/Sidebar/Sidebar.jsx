import React, { useContext } from 'react'
import "./sidebar.css"
import { AppContext } from '../../context/myContext';
import { navLang, navlist } from '../../content/navList';
import Arrow from '../../assets/svg/arrow';

const Sidebar = () => {
  const { showPopup, hidePopup, handleArrowClickVisibility } = useContext(AppContext);

  const handleSidebarList = (item) => {
    if (item === "Your Billy-account") {
      hidePopup();
      handleArrowClickVisibility();
    }
  }

  return (
    <div className={`sidebar sidebar-min-width ${!showPopup ? "sidebar-unactive" : "sidebar-active"}`}>
      <ul className='sidebar-ul sidebar-min-width'>
        {navlist.map((item, index) => {
          return (
            <li className='sidebar-li' key={index} onClick={() => handleSidebarList(item)}>
              {item === "navlang" ? navLang.map((lang, i) => {
                return (<span className='sidebar-li-lang' key={i}>{lang}</span>)
              }) : <>
                {item} <Arrow />
              </>}
            </li>
          )
        })}

      </ul>

    </div>
  )
}

export default Sidebar