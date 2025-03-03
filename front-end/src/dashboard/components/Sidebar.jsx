import React from "react";
import {
  FaTachometerAlt,
  FaMoneyCheckAlt,
  FaProjectDiagram,
  FaUser,
  FaPlus,
  FaTimes,
} from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";

const Sidebar = ({ setActivePage, isOpen, toggleSidebar }) => {
  return (
    <div className="relative h-full">
      {/* Sidebar */}
      <div
        className={`fixed md:top-0 sm:top-[88px] left-0 h-full bg-gray-800 shadow-md transition-transform duration-300 ease-in-out z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:relative lg:w-56 sm:w-64`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-2xl font-bold text-white">My Dashboard</h2>
          {/* Close Button (Visible on Small Screens) */}
          <button className="text-white text-2xl lg:hidden" onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>

        <ul className="space-y-4 px-4">
          <li>
            <button
              className="w-full text-left flex items-center p-2 hover:bg-gray-200 text-white hover:text-black rounded"
              onClick={() => {
                setActivePage("addproduct");
                toggleSidebar(); // Close sidebar after selecting
              }}
            >
              <MdCloudUpload className="mr-2" />
              Add Product
            </button>
          </li>
          <li>
            <button
              className="w-full text-left flex items-center p-2 hover:bg-gray-200 text-white hover:text-black rounded"
              onClick={() => {
                setActivePage("allproduct");
                toggleSidebar();
              }}
            >
              <FaProjectDiagram className="mr-2" />
              Catalogue Product
            </button>
          </li>
          <li>
            <button
              className="w-full text-left flex items-center p-2 hover:bg-gray-200 text-white hover:text-black rounded"
              onClick={() => {
                setActivePage("popularproduct");
                toggleSidebar();
              }}
            >
              <FaProjectDiagram className="mr-2" />
              Popular Product
            </button>
          </li>
          <li>
            <button
              className="w-full text-left flex items-center p-2 hover:bg-gray-200 text-white hover:text-black rounded"
              onClick={() => {
                setActivePage("topproduct");
                toggleSidebar();
              }}
            >
              <FaProjectDiagram className="mr-2" />
              Top Product
            </button>
          </li>
          <li>
            <button
              className="w-full text-left flex items-center p-2 hover:bg-gray-200 text-white hover:text-black rounded"
              onClick={() => {
                setActivePage("profile");
                toggleSidebar();
              }}
            >
              <FaUser className="mr-2" />
              My Profile
            </button>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
