import React, { useState } from 'react'
import './filterNav.css'
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const FilterNav = () => {
    const [tooglSearch, setToogleSearch] = useState(false);
    return (
        <nav className="FilterNavContainer" id='filterNav'>
            <div className="FilterNavWrapper">
                <span className="SearchIcon" onClick={() => setToogleSearch((prev) => !prev)}>
                    {!tooglSearch ?
                        <IoSearch /> :
                        <RxCross2 strokeWidth={1} />}
                </span>
                <div className={!tooglSearch ? "inActivefield" : "fieldActive"}>
                    <div className="field">
                        <input required="" type="text" className="input" placeholder='Search' />
                    </div>
                </div>
                <div className="filters">
                    <li>shake</li>
                    <li>shake papnlajbk </li>
                    <li>shake haaklnaln</li>
                    <li>chicken</li>
                    <li>shake</li>
                    <li>chicken</li>
                    <li>shake</li>
                    <li>chicken</li>
                    <li>shake</li>
                    <li>chicken</li>
                    <li>shake</li>
                    <li>chicken</li>
                </div>
            </div>
        </nav>
    )
}

export default FilterNav
