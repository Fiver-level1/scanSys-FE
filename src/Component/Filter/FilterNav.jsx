import React, { useContext } from 'react'
import './filterNav.css'
import { IoSearch } from "react-icons/io5";
import { AppContext, AppDispatchContext } from '../../context/myContext';
const FilterNav = () => {

    const { productdata, searchValue } = useContext(AppContext);
    const { setSearchValue } = useContext(AppDispatchContext);

    const handleSearchValue = (e)=>{
        setSearchValue(e.target.value);
    }

    return (
        <nav className="FilterNavContainer">
            <div className="FilterNavWrapper">
                <div className="field">
                    <input required="" type="text" className="input" placeholder='Search' value={searchValue} onChange={handleSearchValue}/>
                    <span className="span">
                        <IoSearch />
                    </span>
                </div>
                <div className="filters">
                {
                        productdata.map((item, index) => {
                            return <a href={`#${item.category}`}><li key={index} >{item.category}</li></a>
                        })

                    }
                </div>
            </div>
        </nav>
    )
}

export default FilterNav