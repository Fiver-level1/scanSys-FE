import React from 'react'
import './filterNav.css'
import { IoSearch } from "react-icons/io5";
const FilterNav = () => {
    return (
        <nav className="FilterNavContainer">
            <div className="FilterNavWrapper">
                <div className="field">
                    <input required="" type="text" className="input" placeholder='Search' />
                    <span className="span">
                        <IoSearch />
                    </span>
                </div>
                <div className="filters">
                    <li>shake</li>
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
