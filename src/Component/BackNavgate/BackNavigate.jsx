import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5";

const BackNavigate = () => {
    const navigate = useNavigate();
    return (
        <div className="BackIcon" onClick={() => navigate(-1)} style={{ cursor: 'pointer', margin: '10px 0px' }}>
            <IoArrowBack />
        </div>
    )
}

export default BackNavigate
