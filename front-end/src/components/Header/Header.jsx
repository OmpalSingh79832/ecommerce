import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo1.png"
import { FaPhone } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import "./header.css"
import Typewriter from "typewriter-effect/dist/core";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };
  const typewriterRef = useRef(null);
  useEffect(() => {
    if (typewriterRef.current) {
      new Typewriter(typewriterRef.current, {
        strings: ["Welcome to D-Gold Denim Jeans", "Manufacturer and Exporter!", "All Kinds Of Jeans Available"],
        autoStart: true,
        loop: true,
        delay: 75,
      });
    }
  }, []);

  return (
    <>
      <nav>
        <div className=" bg-black text-white text-center">
          <p className='py-2 text-lg top-menu' ref={typewriterRef}></p>
        </div>
        <div className="w-[90%] mx-auto py-2">
          <div className="sm:hidden md:hidden lg:block">
            <div className="flex flex-col lg:flex-row justify-between items-center text-center gap-4 ">
              {/* Logo Section */}
              <div className="w-[60%] lg:w-[15%] flex justify-center">
                <Link to={"/"}><img src={Logo} alt="logo" className="w-full rounded-md" /></Link>
              </div>

              {/* Phone Number Section */}
              <div className="flex items-center gap-2 text-xl middle-menu-phone">
                <FaPhone className="text-2xl" />
                <p>+91 9266-116358</p>
              </div>

              {/* Social Icons Section */}
              <div className="middle-menu-icon">
                <ul className="flex justify-center gap-4">
                  <li><FaLinkedinIn className="text-xl" /></li>
                  <li><FaFacebookF className="text-xl" /></li>
                  <li><SiInstagram className="text-xl" /></li>
                  <li><Link to={"/dashboard"}><IoLogoYoutube className="text-xl" /></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="last-menu-main bg-[#01132D]">
          {/* Toggle Button for Mobile */}
          <div className="lg:hidden flex justify-between p-4">
            <div className="sm:block md:block lg:hidden">
              <img src={Logo} alt="" className="w-[25%] rounded-sm" />
            </div>
            <button
              className="text-white text-3xl border-2 border-white p-1 h-fit "
              onClick={toggleMenu}
            >
              {isMenuOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>

          {/* Menu */}
          <div
            className={`down-menu ${isMenuOpen ? "block" : "hidden"
              } lg:block transition-all duration-500`}
          >
            <ul className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-10 text-center list-none">
              <li className="text-white uppercase text-lg py-2 relative cursor-pointer " onClick={handleMenuItemClick}>
                <Link to={"/"}>Home</Link>
              </li>
              <li className="text-white uppercase text-lg py-2 relative cursor-pointer " onClick={handleMenuItemClick}>
                <Link to={"/about-us"}>About Us</Link>
              </li>
              <li className="text-white uppercase text-lg py-2 relative cursor-pointer " onClick={handleMenuItemClick}>
                <Link to={"/catalogue"}>Catalogue</Link>
              </li>
              <li className="text-white uppercase text-lg py-2 relative cursor-pointer" onClick={handleMenuItemClick}>
                <Link to={"/our-partner"}>Our Partners</Link>
              </li>
              <li className="text-white uppercase text-lg py-2 relative cursor-pointer" onClick={handleMenuItemClick}>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li className="text-white uppercase text-lg py-2 relative cursor-pointer" onClick={handleMenuItemClick}>
                <Link to={"/contact-us"}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header

