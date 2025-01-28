import React from "react";
import MainImage from "../img/Logo-300x150.png";
import QrImage from "../img/Footer_logo.png";

function FooterSection() {
  return (
    <div className="bg-[#FDF4E4] py-10 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <img className="w-[200px]" src={MainImage} alt="Main Logo" />
          <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center md:text-left">
            Tirth Agro Technology Private Limited, commonly known as Shaktiman, is a prominent Indian agricultural implements
            manufacturer with a rich history spanning over two decades.
          </p>
          <img className="w-[150px] md:w-[200px]" src={QrImage} alt="QR Code" />
          <span className="bg-white text-[#EA6320] px-8 py-3 text-lg font-bold font-Poppins rounded-full shadow">
            15837249
          </span>
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-center md:items-start gap-6 mt-10">
          <h2 className="font-Poppins text-[24px] font-bold text-[#EA6320]">Crop Solution</h2>
          <ul className="flex flex-col gap-4 font-Poppins text-[14px]">
            <li className="hover:text-[#ff5c0b] cursor-pointer">Sugarcane Farming</li>
            <li className="hover:text-[#ff5c0b] cursor-pointer">Maize Farming</li>
            <li className="hover:text-[#ff5c0b] cursor-pointer">Paddy Farming</li>
            <li className="hover:text-[#ff5c0b] cursor-pointer">Dairy Farming</li>
            <li className="hover:text-[#ff5c0b] cursor-pointer">Root Crop Solutions</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-start gap-6 mt-10">
          <h2 className="font-Poppins text-[24px] font-bold text-[#EA6320]">Products</h2>
          <ul className="flex flex-col gap-4 font-Poppins text-[14px]">
            <li className="hover:text-[#ff5c0b] cursor-pointer">Farm Tillage Solutions</li>
            <li className="hover:text-[#ff5c0b] cursor-pointer">Farm Equipment Solutions</li>
            <li className="hover:text-[#ff5c0b] cursor-pointer">Hi-Tech Farm Solutions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
