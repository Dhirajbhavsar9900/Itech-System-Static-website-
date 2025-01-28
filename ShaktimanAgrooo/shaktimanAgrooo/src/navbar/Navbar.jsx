import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../img/Logo-300x150.png";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState("");

  const toggleDropdown = (menuName) => {
    setActiveMenu((prevMenu) => (prevMenu === menuName ? "" : menuName));
  };

  return (
    <nav className="flex justify-around sticky top-0 bg-white shadow-lg h-[4.7rem] z-50 items-center">
      {/* Logo Section */}
      <div className="relative top-2 flex justify-center items-center z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="114"
          viewBox="0 0 212 114"
          fill="none"
        >
          <g filter="url(#filter0_d_2665_7972)">
            <path
              d="M4 0H208L194.75 87.9786C193.276 97.7636 184.868 105 174.973 105H37.0273C27.1319 105 18.7241 97.7636 17.2504 87.9786L4 0Z"
              fill="white"
            />
          </g>
          <image x="30" y="20" href={Logo} width="150" height="75" />
        </svg>
      </div>

      {/* Navigation Items */}
      <ul className="flex font-Poppins text-sm font-normal justify-between items-center relative">
        {/* About Us Dropdown */}
        <li
          className="px-4 py-2 cursor-pointer relative"
          onClick={() => toggleDropdown("about")}
        >
          <span>About Us</span>
          <KeyboardArrowDownIcon className="mb-1" />
          {activeMenu === "about" && (
            <ul
              className="absolute top-14 left-0 bg-[#FDF4E4] shadow-lg rounded-md z-50 p-4 bg-bottom bg-no-repeat bg-cover"
              style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
            >
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FDF4E4] rotate-45 shadow-lg"></div>
              <li className="py-1 px-2 text-sm hover:text-[#EB651F] cursor-pointer">
                Our History
              </li>
              <li className="py-1 px-2 text-sm hover:text-[#EB651F] cursor-pointer">
                Our Team
              </li>
              <li className="py-1 px-2 text-sm hover:text-[#EB651F] cursor-pointer">
                Careers
              </li>
            </ul>
          )}
        </li>

        {/* Our Products Dropdown */}
        <li
          className="px-4 py-2 cursor-pointer relative"
          onClick={() => toggleDropdown("ourProducts")}
        >
          <span>Our Products</span>
          <KeyboardArrowDownIcon className="mb-1" />
          {activeMenu === "ourProducts" && (
            <ul
              className="absolute top-14 left-0 bg-[#FDF4E4] shadow-lg rounded-md z-50 p-4 bg-bottom bg-no-repeat bg-cover"
              style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
            >
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FDF4E4] rotate-45 shadow-lg"></div>
              <li className="py-1 px-2 text-sm hover:text-[#EB651F] cursor-pointer">
                Fertilizers
              </li>
              <li className="py-1 px-2 text-sm hover:text-[#EB651F] cursor-pointer">
                Pesticides
              </li>
              <li className="py-1 px-2 text-sm hover:text-[#EB651F] cursor-pointer">
                Seeds
              </li>
            </ul>
          )}
        </li>

        {/* Crop Solutions Dropdown */}
        <li
          className="px-4 py-2 cursor-pointer relative"
          onClick={() => toggleDropdown("cropSolutions")}
        >
          <span>Crop Solutions</span>
          <KeyboardArrowDownIcon className="mb-1" />
          {activeMenu === "cropSolutions" && (
            <ul
              className="absolute top-14 left-0 bg-[#FDF4E4] shadow-lg rounded-md z-50 p-4 bg-bottom bg-no-repeat bg-cover"
              style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
            >
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FDF4E4] rotate-45 shadow-lg"></div>
              <li className="py-1 px-2 text-sm hover:text-[#EB651F] cursor-pointer">
                Soil Health
              </li>
              <li className="py-1 px-2 text-sm hover:text-[#EB651F] cursor-pointer">
                Crop Nutrition
              </li>
            </ul>
          )}
        </li>

        {/* Media Dropdown */}
        <li
          className="px-4 py-2 cursor-pointer relative"
          onClick={() => toggleDropdown("media")}
        >
          <span>Media</span>
          <KeyboardArrowDownIcon className="mb-1" />
          {activeMenu === "media" && (
            <ul
              className="absolute top-14 left-0 bg-[#FDF4E4] shadow-lg rounded-md z-50 p-4 bg-bottom bg-no-repeat bg-cover"
              style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
            >
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FDF4E4] rotate-45 shadow-lg"></div>
              <li className="py-1 px-2 text-sm hover:text-[#EB651F] cursor-pointer">
                News
              </li>
              <li className="py-1 px-2 text-sm hover:text-[#EB651F] cursor-pointer">
                Events
              </li>
            </ul>
          )}
        </li>

        {/* Contact Us */}
        <div className="flex items-center mx-5">
          <a href="#">
            <span>Contact Us</span>
          </a>
        </div>

        {/* Search Icon */}
        <div className="flex p-2 rounded-full justify-end items-center bg-[#FDF4E4]">
          <SearchIcon />
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
