import React, { useContext, useState, useEffect } from 'react'
import './filterNav.css'
import { IoSearch } from "react-icons/io5";
import { AppContext, AppDispatchContext } from '../../context/myContext';
import { RxCross2 } from "react-icons/rx";
const FilterNav = () => {
    const { productdata } = useContext(AppContext);
    const { setSearchValue } = useContext(AppDispatchContext);
    const [input, setInput] = useState("");

    const handleSearchValue = (e) => {
        setInput(e.target.value);
    }

    useEffect(() => {
        const timerId = setTimeout(() => {
            setSearchValue(input);
        }, 500);
        return () => clearTimeout(timerId);
    }, [input]);

    function adjustScroll(event, targetId) {
        event.preventDefault();
        console.log(targetId);
        const targetElement = document.getElementById(targetId);
        let yOffset = -90;
        const yPosition = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }


    const [tooglSearch, setToogleSearch] = useState(false);
    return (
        <nav className="FilterNavContainer" id='filterNav'>
            <div className="FilterNavWrapper">
                <span className="SearchIcon" onClick={() => setToogleSearch((prev) => !prev)}>
                    {!tooglSearch ?
                        <IoSearch /> :
                        <RxCross2 strokeWidth={1} onClick={() => { setSearchValue(""); setInput("") }} />}
                </span>
                <div className={!tooglSearch ? "inActivefield" : "fieldActive"}>
                    <div className="field">
                        <input required="" type="text" className="input" placeholder='Search' value={input} onChange={handleSearchValue} />
                    </div>
                </div>
                <div className="filters">
                    {
                        productdata.map((item, index) => {
                            return <a key={index} onClick={(e) => adjustScroll(e, `${item.category}`)}><li>{item.category}</li></a>
                        })
                    }
                </div>
            </div>
        </nav>
    )
}

export default FilterNav