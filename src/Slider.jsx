import React from "react";
import Slider from "react-slick";

const ImageSlider = ({ data }) => {
 const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,              
  autoplaySpeed: 0,         
  cssEase: "linear",       
  arrows: false,
  pauseOnHover: true,  
 
    
};



  return (
    <Slider {...settings} className="m-40 ">
        
      {data.map((item, index) => (
        <div key={index} className="px-4">
          <div className=" shadow-md flex items-center justify-center  md:flex-col">
            <img
              src={item.img}
              alt="company"
              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110 rounded-xl border-4 border-white "
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;