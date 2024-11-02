import React from "react";
import './banner.css'
import bannerIcon from '../../assets/banner2.jpeg'
import { useContext } from "react";
import { AppContext } from "../../context/myContext";
const Banner = () => {
  const { adjustScroll } = useContext(AppContext);
  return (
    <div className="BannerContainer">
      <div className="bannerWrapper">
        <div className="companyDesc">
          <h1>Food'F</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam alias eos, distinctio laudantium veritatis placeat quaerat! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum corrupti sint maiores eveniet. Nostrum.</p>
          <a onClick={(e) => adjustScroll(e, "filterNav")}>
            <button class="exploreButton">
              <svg class="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
              Explore
            </button>
          </a>
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
