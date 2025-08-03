import React, {  useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { getData } from "../Context/DataContext";
import Category from "./Category";


const Carousel = () => {
  const { data, fetchAllProducts } = getData()
  //console.log(data);

  useEffect(() => {
    fetchAllProducts();
  },[] );

// back vala 
 const SimplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ zIndex:3 }}
      >
        < IoIosArrowBack
          className="arrows"
          style={{
       ...style,
            display: "Block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "5px",
            left: "70px",
          }}
           onMouseOver={(e) => {
             e.currentTarget.style.backgroundColor = "blue";
           }}
        />
      </div>
    );
  };
 // samne vala 
  const SimpleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ zIndex:3 }}
      >
        <IoIosArrowForward
          className="arrows"
          style={{
            ...style,
            display: "Block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "1px",
            right: "40px",
          }}
           onMouseOver={(e) => {
             e.currentTarget.style.backgroundColor = "blue";
           }}
        />
      </div>
    );
  };
 
  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    pauseOnHover:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SimpleNextArrow to="next" />,
    prevArrow: <SimplePrevArrow to="prev" />,
  };
  return (
    <div>
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10 ">
                
                {/******************** * Start a Carousel API Data Show  In UI ************************************** */}

              <div className="flex flex-col md:flex-row gap-10 justify-center  my-20 md:my-0 h-[600px] items-center px-4">
                <div className="md:space-y-6 space-y-3 ">
                  <h3 className="text-red-500  font-semibold font-sans text-sm">
                    Powering Your World witch the Best in Electronics{" "}
                  </h3>
                  <h1 className=" md:text-4xl text-xl  font-bold uppercase md:line-clamp-3 line-clamp-2 md:w-[500px] text-white">
                    {item.title}
                  </h1>
                  <p className="md:w-[500px] line-clamp-3 text-gray-500 pr-7">
                    {item.description}
                  </p>
                  <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 p-4 rounded-md cursor-pointer mt-2">
                    Shop Now
                  </button>
                </div>
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-full w-[550px] hover:scale-105 transition-all shadow-2xl shadow-red-400 "
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <Category/>
    </div>
  );
};

export default Carousel;
