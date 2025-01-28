import React from "react";
import MainImage from "../img/Logo-300x150.png";
import QrImage from "../img/Footer_logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function FooterSection() {
  return (
    <div className="bg-[#FDF4E4] py-10 px-5 md:px-20">
      <div className=" flex gap-[20px] ">
        {/* Left Section */}
        <div className="flex flex-col w-[500px] items-center md:items-start gap-6">
          <img className="w-[200px]" src={MainImage} alt="Main Logo" />
          <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center md:text-left">
            Tirth Agro Technology Private Limited, commonly known as Shaktiman,
            is a prominent Indian agricultural implements manufacturer with a
            rich history spanning over two decades.
          </p>
          <img className="w-[150px] md:w-[200px]" src={QrImage} alt="QR Code" />
          <span className="bg-white text-[#EA6320] px-8 py-3 text-lg font-bold font-Poppins rounded-full shadow">
            15837249
          </span>
        </div>

        {/* Center Section */}
        <div className="flex flex-col w-[300px] items-center md:items-start gap-6 mt-10">
          <h2 className="font-Poppins text-[24px] font-bold text-[#EA6320]">
            Crop Solution
          </h2>
          <ul className="flex flex-col gap-4 font-Poppins text-[14px]">
            <li className="hover:text-[#ff5c0b] cursor-pointer">
              Sugarcane Farming
            </li>
            <li className="hover:text-[#ff5c0b] cursor-pointer">
              Maize Farming
            </li>
            <li className="hover:text-[#ff5c0b] cursor-pointer">
              Paddy Farming
            </li>
            <li className="hover:text-[#ff5c0b] cursor-pointer">
              Dairy Farming
            </li>
            <li className="hover:text-[#ff5c0b] cursor-pointer">
              Root Crop Solutions
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-[300px] items-center md:items-start gap-6 mt-10">
          <h2 className="font-Poppins text-[24px] font-bold text-[#EA6320]">
            Products
          </h2>
          <ul className="flex flex-col gap-4 font-bold font-Poppins text-[14px]">
            <li className="hover:text-[#ff5c0b] cursor-pointer">
              Farm Tillage Solutions
            </li>
            <li className="hover:text-[#ff5c0b] cursor-pointer">
              Farm Equipment Solutions
            </li>
            <li className="hover:text-[#ff5c0b] cursor-pointer">
              Hi-Tech Farm Solutions
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-[340px] items-center md:items-start gap-6 mt-10">
          <h2 className="font-Poppins text-[24px] font-bold text-[#EA6320]">
            Company
          </h2>
          <ul className="flex flex-col gap-[2px] font-Poppins text-[14px]">
            <li className="hover:text-[#ff5c0b] cursor-pointer">
              About Shaktiman
            </li>
            <li className="hover:text-[#ff5c0b] cursor-pointer">
              Product Range
            </li>
            <li className="hover:text-[#ff5c0b] cursor-pointer">
              Total Productive Maintenance (TPM)
            </li>
            <li className="hover:text-[#ff5c0b] cursor-pointer">
              Success Stories
            </li>
            <li className="hover:text-[#ff5c0b] cursor-pointer">
              Dealer Locator
            </li>
            <li className="hover:text-[#ff5c0b] cursor-pointer">
              News & Events
            </li>
            <li className="hover:text-[#ff5c0b] cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-[#ff5c0b] cursor-pointer">Sitemap</li>
          </ul>
        </div>

        <div className="flex flex-col w-[560px] items-center md:items-start gap-6 mt-10">
          <h2 className="font-Poppins text-[24px] font-bold text-[#EA6320]">
            Company
          </h2>
          <ul className="flex flex-col gap-[10px] font-semibold font-Poppins text-[14px]">
            <li className="hover:text-[#ff5c0b] cursor-pointer">
              TIRTH AGRO TECHNOLOGY PRIVATE LIMITED.
            </li>
            <li className="hover:text-[#ff5c0b] flex cursor-pointer">
              <LocationOnIcon className=" text-[#E76D20]" />
              <address className="ml-3">
                “SHAKTIMAN”, Survey No.-108/1, Plot No. <br />
                B,NH-27, Nr. Bharudi Toll Plaza, <br />
                Bhunava (Village) <br />
                Taluka: Gondal, <br />
                Dist.: Rajkot. <br />
                State: Gujarat- INDIA <br />
                Pincode-360311 <br />
              </address>
            </li>
            <li className="hover:text-[#ff5c0b] cursor-pointer">
              <LocalPhoneIcon className="text-[#E76D20] mr-2"/>
              Phone: +91 (2827) 234567
            </li>
            <li className="hover:text-[#ff5c0b] cursor-pointer">
              <LocalPhoneIcon className="text-[#E76D20] mr-2"/>
              Fax: +91 (2827) 270457
            </li>
            <li className="hover:text-[#ff5c0b] cursor-pointer">
             <LocalPhoneIcon className="text-[#E76D20] mr-2"/>
              Toll Free: 1800-12000-37
            </li>
            <li className="hover:text-[#ff5c0b] cursor-pointer">
            <MailIcon className="text-[#E76D20] mr-2"/>
            E-mail: info@shaktimanagro.com
            </li>
            <li className="hover:text-[#ff5c0b] cursor-pointer">
              <LocalPoliceIcon className="text-[#E76D20] mr-2"/>
              CIN: U72900GJ2000PTC 038435
            </li>
            <div className=" flex">
              <ul className="flex gap-5">
                <li><InstagramIcon fontSize="large" className="bg-white p-1 rounded-full" /></li>
                <li><FacebookIcon fontSize="large" className="bg-white p-1 rounded-full" /></li>
                <li><YouTubeIcon fontSize="large" className="bg-white p-1 rounded-full"/></li>
                <li><LinkedInIcon fontSize="large" className="bg-white p-1 rounded-full" /></li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
