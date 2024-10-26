import React from "react";

const Banner = () => {
  return (
    <div className="relative">
        <img className="w-screen h-[400px] object-cover opacity-45	" src="https://img.freepik.com/free-photo/chocolate-cookies-glaze_23-2148837158.jpg?semt=ais_hybrid"/>
        <div className="absolute bottom-16 text-center">
            <h1 className="font-bold">HEllo World</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia amet corporis provident, saepe asperiores, tenetur quisquam consectetur reprehenderit eos mollitia eaque. Possimus, odio neque. Veritatis officiis nihil qui corrupti id.</p>
        </div>
    </div>
  );
};

export default Banner;
