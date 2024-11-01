import React, { useContext, useState, useEffect } from 'react'
import './filterNav.css'
import { IoSearch } from "react-icons/io5";
import { AppContext, AppDispatchContext } from '../../context/myContext';
const FilterNav = () => {
    const { productdata } = useContext(AppContext);
    const { setSearchValue } = useContext(AppDispatchContext);
    const [input, setInput] = useState("");
   
    // console.log(productdata);

    const handleSearchValue = (e)=>{
        setInput(e.target.value);
    }

    // console.log(searchValue);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setSearchValue(input);
        }, 500); // 500ms delay

        // Clear timeout if input changes again within the delay
        return () => clearTimeout(timerId);
    }, [input]);


    return (
        <nav className="FilterNavContainer">
            <div className="FilterNavWrapper">
                <div className="field">
                    <input required="" type="text" className="input" placeholder='Search' value={input} onChange={handleSearchValue}/>
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