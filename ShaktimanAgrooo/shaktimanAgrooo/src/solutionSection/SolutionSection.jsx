import React from "react";
import data from "./SolutionCardsData.js";

function SolutionSection() {
  return (
    <div className="relative mt-[40px] mb-[80px]">
      <div className="relative z-10 mx-[190px]">
        <div className="mb-[50px] font-Poppins relative z-20">
          <h2 className="text-[42px] mb-[10px] font-medium">
            COMPLETE <strong className="text-[#E25700]">FARMING</strong> SOLUTIONS
          </h2>
          <div className="text-[16px]">
            From soil preparation to harvest and beyond, Shaktiman offers complete farming solutions for modern agriculture.
          </div>
        </div>

        <div className="flex flex-wrap gap-5">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row  bg-[#FDF4E4] w-full md:w-[32%] rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-6 flex-1 font-Poppins font-normal">
                <h2 className="text-lg font-semibold text-gray-800"><strong className=" text-[#F37021]">{item.strong} </strong>{item.name}</h2>
                <p className="text-[12px] text-gray-600 mt-2">{item.description}</p>
                <img className="ml-[-28px] mb-[-28px] max-w-[90px]" src={item.smallImg} alt="" />
              </div>
              <div className="w-full md:w-[40%]">
                <img
                  className="w-full h-full object-cover border-[2px] border-[#FDF4E4]"
                  src={item.img}
                  alt={item.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SolutionSection;
