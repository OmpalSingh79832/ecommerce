import React from 'react';
import Home1 from "../../assets/images/home1.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomeSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Having all types of Jeans world of grocery",
      description: "Most Exclusive and demanding Jeans in the world...",
      discount: "-30% Off",
      offer: "Exclusive Offer",
      image: Home1,
      buttonText: "Shop Now →",
    },
    {
      id: 2,
      title: "Discover the Latest Trends in Grocery Fashion",
      description: "Get the best styles at the best prices...",
      discount: "-20% Off",
      offer: "Limited Offer",
      image: Home1,
      buttonText: "Explore Now →",
    },

  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div key={slide.id}>
          <div className="my-5">
            <div className="grid grid-cols-1 lg:grid-cols-12 home-bg1 py-10 rounded-lg shadow-md items-center">
              {/* Text Section */}
              <div className="lg:col-span-6 col-span-12 px-5 lg:pl-20">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm font-semibold text-gray-600">
                    {slide.offer}
                  </span>
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {slide.discount}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  {slide.title.split("<br />").map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h1>
                <p className="text-gray-600 mt-4 text-sm md:text-base">
                  {slide.description}
                </p>
                <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
                  {slide.buttonText}
                </button>
              </div>

              {/* Image Section */}
              <div className="lg:col-span-6 col-span-12 sm:hidden lg:flex justify-end items-center mt-6 lg:mt-0">
                <img
                  src={slide.image}
                  alt="Slider Image"
                  className="lg:w-2/5 md:w-3/5 w-4/5 max-w-xs lg:max-w-md bg-transparent object-contain"
                />
              </div>

            </div>
          </div>
        </div>
      ))}
    </Slider>

  );
};

export default HomeSlider;
