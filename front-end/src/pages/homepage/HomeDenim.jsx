import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom"
import MenImg1 from "../../assets/products/p1.1.webp";
import KidsImg1 from "../../assets/products/p2.1.webp";
import WomenImg1 from "../../assets/products/p3.1.webp";
import woImg1 from "../../assets/products//p4.1.webp";
import Img11 from "../../assets/images/what-we-do1.jpg";
import Img12 from "../../assets/images/what-we-do2.jpg";
import Img13 from "../../assets/images/what-we-do3.jpg";
import ClientReview from './ClientReview';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularProducts, getTopProducts } from '../../redux/slices/productReduer';
import Slider from "react-slick";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import PopularProducts from './PopularProducts';




const HomeDenim = () => {

  const { topproducts, popuarproducts } = useSelector((state) => state.product)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopProducts())
    dispatch(getPopularProducts())
  }, [dispatch]);

  const popular = Array.isArray(popuarproducts) ? popuarproducts : popuarproducts.products || [];
  const top = Array.isArray(topproducts) ? topproducts : topproducts.products || [];


  console.log(popular, 'popular')

  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Adjust speed (3 seconds)
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const items = [
    {
      id: 1,
      title: "Jeans Manufacturing",
      description: "We are a reputed jeans manufacturer in India for quality jeans manufacturing.",
      image: Img11,
    },
    {
      id: 2,
      title: "Jeans Wholesale",
      description: "We are the largest wholesaler in India with maximum coverage across India and worldwide.",
      image: Img12,
    },
    {
      id: 3,
      title: "Jeans Exports",
      description: "We export our jeans worldwide with our quality-driven services and manufacturing.",
      image: Img13,
    },
  ];
  return (
    <>
      <div className="relative text-center py-6">
        <div className="w-fit mx-auto">
          <h1 className="text-3xl text-center text-gray-900">Our <span className="text-[#27497b] font-bold">Top Products</span>
          </h1>
          <div className="border-b-2 border-black w-[80%] mx-auto mt-4"></div>
        </div>
        {/* Header with Navigation Buttons */}
        <div className="flex justify-end items-center mx-auto px-4">
          <div className="flex gap-3">
            <button
              className="bg-gray-800 text-white p-2 hover:bg-gray-600 transition"
              onClick={() => sliderRef.current.slickPrev()}
            >
              < FaCircleChevronLeft size={30} />
            </button>
            <button
              className="bg-gray-800 text-white p-2 hover:bg-gray-600 transition"
              onClick={() => sliderRef.current.slickNext()}
            >
              <FaCircleChevronRight size={30} />
            </button>
          </div>
        </div>

        <div className="md:py-4 sm:py-10">
          <Slider ref={sliderRef} {...sliderSettings}>
            {top.slice(0, 20).map((item, index) => (
              <div key={index} className="px-2">
                <Link to={`/product-details/${item._id}`} className="group">
                  <img
                    src={item?.images[0]}
                    alt="Product"
                    className="aspect-square w-full rounded-lg bg-gray-200 group-hover:opacity-75 xl:aspect-[7/8]"
                  />
                  <h3 className="mt-4 text-lg font-bold">{item.name}</h3>
                  <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                    Get More →
                  </button>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>


      {/* About Us Component */}

      < div className="bg-gray-300 py-20 px-5 lg:px-20" >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-16">
          {/* Text Section */}
          <div className="lg:col-span-7">
            <div className="w-fit mb-4">
              <h1 className="text-3xl text-gray-900">
                About <span className="text-[#27497b] font-bold">D-Gold Denim Jeans India</span>
              </h1>
              <div className="border-b-2 border-black w-[80%] mt-4"></div>
            </div>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              <strong>D-Gold Clothing Company</strong>, with its establishment in the <strong>year 2005</strong>,
              is earning huge accolades in the market for dealing in Fashion Jeans. With diligent efforts
              of <strong>Founder, Mr. Rashid Malik </strong>, the company is excellently
              catered to the needs of Fashion Jeans Lovers. The array includes Designer jeans in various fits
              like Skinny Jeans, Bootcut Jeans, Slim Jeans, Stretch Jeans, Straight Jeans, High Waisted Jeans,
              Ripped Jeans, Low Rise Jeans, and many more.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              <strong>Infrastructure:</strong> Our state-of-the-art infrastructure is one of the vital
              elements of our staggering success. The production unit in Delhi, Quality control unit,
              packaging unit, warehousing facility, strong network, etc., all comprise our robust
              infrastructure. This has helped in quality and quantity production of the Denim Jeans that
              are a perfect match to the international standards.
            </p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-full  hover:bg-blue-700 transition">
              More About Us →
            </button>
          </div>

          {/* Image Section */}
          <div className="lg:col-span-5 relative">
            {/* White Border */}
            <div className="absolute rotate-[-10deg] top-0 left-0 right-0 bottom-0 border-[8px] border-white rounded-lg pointer-events-none z-0"></div>

            {/* Image */}
            <div className="relative w-full h-full z-10">
              <img
                src={MenImg1}
                alt="Denim Models"
                className=" sm:h-[300px] sm:w-[100%] md:h-[400px] md:w-full lg:w-[500px] lg:h-[500px] rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* What We Do  */}
      < div className="py-10" >
        <div className="w-fit mx-auto">
          <h1 className="text-3xl text-center text-gray-900">
            What  <span className="text-[#27497b] font-bold">We Do?</span>
          </h1>
          <div className="border-b-2 border-black w-[80%] mx-auto mt-4"></div>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-8">What We Do</h2>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-l shadow-2xl "
            >
              {/* Image with Hover Effect */}
              <div className="relative w-full h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
                />
              </div>
              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div >

      {/* Explore Every part */}

      < div className='mt-6' >
        <div className='explore-every-part bg-cover bg-center'>
          <div className="item-center w-[90%] mx-auto px-6 lg:px-20 xl:px-36 py-10">
            <div className='grid grid-cols-12 gap-6 lg:gap-20'>
              {/* Left Column */}
              <div className='col-span-12 lg:col-span-6'></div>

              {/* Right Column */}
              <div className='col-span-12 lg:col-span-6'>
                <h4 className='text-[#27497b] text-2xl md:text-3xl lg:text-4xl uppercase leading-[1.2] font-bold'>
                  Explore Every Part of This Product
                </h4>
                <p className='text-gray-700 text-base md:text-lg mt-4'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ratione incidunt at recusandae nostrum nisi error voluptate, sunt! Explicabo qui natus voluptate earum voluptatum amet nihil placeat dolorem est quibusdam.
                </p>
                <button className="mt-6 lg:mt-10 bg-blue-600 text-white px-4 py-2 rounded-sm hover:bg-blue-700 transition">
                  Get Start →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div >

      {/* Our Top Products */}
      <PopularProducts />


      {/* Testomonials Section */}
      < ClientReview />


    </>
  )
}

export default HomeDenim