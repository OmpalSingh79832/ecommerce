import React from "react";
import Slider from "react-slick";
import { IoStarSharp } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Leslie ",
    role: "Freelance React Developer",
    image: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
    review: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change."
  },
  {
    name: "Jacob Jones",
    role: "Digital Marketer",
    image: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
    review: "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users."
  },
  {
    name: "Jenny Wilson",
    role: "Graphic Designer",
    image: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
    review: "I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish."
  },
  {
    name: "Michael Smith",
    role: "Software Engineer",
    image: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
    review: "Great experience! The UI is smooth, and the features work like a charm."
  },
  {
    name: "Emma Brown",
    role: "UI/UX Designer",
    image: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
    review: "Absolutely love the service. It has helped streamline my workflow significantly!"
  }
];

const ClientReview = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Medium screens (md)
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768, // Small screens (sm)
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="py-12 bg-gray-50 sm:py-0 lg:py-20">
      <div className="px-4 mx-auto w-[100%] sm:px-0 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-3xl text-gray-900 capitalize">
              Our happy clients <span className="text-[#27497b] font-bold">say about us</span>
            </h1>
            <div className="border-b-2 border-black w-[80%] mx-auto mt-4"></div>
          </div>

          {/* Background Gradient */}
          <div className="relative mt-10 md:mt-24 w-full">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"
                }}
              />
            </div>

            {/* Slick Slider */}
            <Slider {...settings} className="relative mx-auto w-full">
              {reviews.map((review, index) => (
                <div key={index} className="p-4">
                  <div className="flex flex-col shadow-lg bg-white p-6 lg:py-8 lg:px-7 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {Array(5).fill().map((_, i) => (
                          <IoStarSharp key={i} className="text-yellow-500 text-xl ml-1" />
                        ))}
                      </div>
                      <blockquote className="flex-1 mt-4">
                        <p className="md:text-lg sm:text-sm leading-relaxed text-gray-900">{review.review}</p>
                      </blockquote>
                    </div>
                    <div className="flex items-center mt-6">
                      <img 
                        className="flex-shrink-0 object-cover rounded-full w-14 h-14" 
                        src={review.image} 
                        alt={review.name} 
                      />
                      <div className="ml-4">
                        <p className="sm:text-sm md:text-base font-bold text-gray-900">{review.name}</p>
                        <p className="mt-0.5 md:text-sm sm:text-xs text-gray-600">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
