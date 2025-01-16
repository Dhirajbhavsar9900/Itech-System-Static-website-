import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../img/Logo-300x150.png";
function Navbar() {
  return (
    <>
      <nav className="flex justify-around gap-[12rem] sticky top-0 bg-[#FFFFFF] shadow-lg h-[4.7rem] z-50 items-center">
        <div className="relative top-2 flex justify-center items-center z-50 ">
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

            <defs>
              <filter
                id="filter0_d_2665_7972"
                x="0"
                y="0"
                width="212"
                height="114"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="5" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.440267 0 0 0 0 0.440267 0 0 0 0 0.440267 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2665_7972"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2665_7972"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>

        <ul className="flex font-Poppins text-[15px] font-normal justify-between items-center">
          <li className="px-[10px] py-[8px] cursor-pointer">
            <span>About Us</span>
            <KeyboardArrowDownIcon className="mb-1" />
          </li>
          <li className="px-[10px] py-[8px] cursor-pointer">
            <span>Our Products</span>
            <KeyboardArrowDownIcon className="mb-1" />
          </li>
          <li className="px-[10px] py-[8px] cursor-pointer">
            <span>Crop Solution</span>
            <KeyboardArrowDownIcon className="mb-1" />
          </li>
          <li className="px-[10px] py-[8px] cursor-pointer">
            <span>Media</span>
            <KeyboardArrowDownIcon className="mb-1" />
          </li>
          <li className="px-[10px] mr-5 py-[8px] cursor-pointer">
            <span>Contact Us</span>
          </li>
          <div className="flex p-2 rounded-full justify-end items-center bg-[#FDF4E4]">
            <SearchIcon />
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
