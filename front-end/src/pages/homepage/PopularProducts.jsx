import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import {getTopProducts } from '../../redux/slices/productReduer';
import Slider from "react-slick";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const PopularProducts = () => {
    const { popuarproducts } = useSelector((state) => state.product)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTopProducts())
    }, [dispatch]);

    const popular = Array.isArray(popuarproducts) ? popuarproducts : popuarproducts.products || [];

    const sliderRef = useRef(null);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Adjust speed (3 seconds)
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
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


    return (
        <>
            {/* Our Top Products */}
            <div className='text-center py-6'>
                <div className="w-fit mx-auto">
                    <h1 className="text-3xl text-center text-gray-900">
                        Our <span className="text-[#27497b] font-bold">Popular Products</span>
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
                            <FaCircleChevronLeft size={30} />
                        </button>
                        <button
                            className="bg-gray-800 text-white p-2 hover:bg-gray-600 transition"
                            onClick={() => sliderRef.current.slickNext()}
                        >
                            <FaCircleChevronRight size={30} />
                        </button>
                    </div>
                </div>

                <div className="mx-auto sm:py-10">
                    <Slider ref={sliderRef} {...sliderSettings}>
                        {popular.slice(0, 20).map((item) => (
                            <Link key={item._id} to={`/product-details/${item._id}`} className="group px-2">
                                <img
                                    src={item?.images[0]}
                                    alt={item?.name}
                                    className="aspect-square w-full rounded-lg bg-gray-200 group-hover:opacity-75 xl:aspect-[7/8]"
                                />
                                <h3 className="mt-4 text-lg font-bold">{item?.name}</h3>
                                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                                    Get More →
                                </button>
                            </Link>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default PopularProducts;
