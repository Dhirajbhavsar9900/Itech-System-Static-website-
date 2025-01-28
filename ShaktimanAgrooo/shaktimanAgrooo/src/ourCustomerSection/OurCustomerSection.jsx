import React from "react";
import leftarrow from "../img/arrowLeft.svg";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import imgData from "./data.js";
function OurCustomerSection() {
  return (
    <div className=" py-[100px]">
      <div className="mx-[190px]">
        <div className="mb-[60] w-[75%]">
          <h2 className="text-[42px] font-Poppins font-medium mb-[5px]">
            HEAR WHAT OUR SATISFIED{" "}
            <strong className=" text-[#F37021]">CUSTOMERS</strong> HAVE TO SAY
          </h2>
          <p className=" mb-[16px]">
            In this section, you can showcase the feedback and experiences of
            customers who have benefited from Shaktiman’s agricultural
            solutions. Their testimonials provide insights into the positive
            impact of our products and services on their farming operations.
          </p>
        </div>

        <div className="relative mt-[70px] block">
          <button className=" flex justify-center items-center opacity-[0.5] right-[70px] top-[-100px] bg-[#FDF4E4] border-none w-[60px] h-[60px] rounded-[10px] absolute z-30 hover:bg-[#FDE9DD]">
            <img src={leftarrow} alt="" />
          </button>

          <div className="relative block overflow-hidden m-0 p-0">
            <div className="flex flex-wrap gap-2">
              {imgData.map((item, index) => (
                <div
                  key={index}
                  className="relative w-full bg-[#FDF4E4] p-2 sm:w-[350px] lg:w-[500px] overflow-hidden rounded-[10px]"
                >
                  <img
                    className="object-cover w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-[10px]"
                    src={item.imgae}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>

          <button className=" flex justify-center items-center right-0 top-[-100px] bg-[#FDF4E4] border-none w-[60px] h-[60px] rounded-[10px] absolute z-30 hover:bg-[#FBD4BC]">
            <img className=" rotate-180 " src={leftarrow} alt="" />
          </button>
        </div>
      </div>
      
      <div className=" flex items-center justify-center">
        <button className=" bg-[#F37021] text-white px-8 py-2 rounded-lg hover:bg-[#E25700] duration-100 ease-out">View more <ArrowCircleRightIcon /></button>
      </div>
    </div>
  );
}

export default OurCustomerSection;
