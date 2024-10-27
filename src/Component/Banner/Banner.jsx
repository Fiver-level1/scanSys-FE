import React from "react";
import './banner.css'
import bannerIcon from '../../assets/banner.jpg'
const Banner = () => {
  return (
    <div className="BannerContainer">
      <div className="bannerWrapper">
        <div className="companyDesc">
          <h1>Prince Raj</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam alias eos, distinctio laudantium veritatis placeat quaerat! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum corrupti sint maiores eveniet. Nostrum.</p>
        </div>
        <div className="imageContainer">
          <div className="imageHolder">
            <img src={bannerIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
