import React from "react";
import guidanceData from "./GuidanceData";
function GuidenceSection() {
  return (
    <div className="mt-[220px] relative h-[2vh] py-[500px] pb-[80px] bg-cover bg-center bg-no-repeat bg-bgImage">
      <div className="absolute inset-0 z-0">
        <div className="relative flex flex-col justify-center items-center z-10 h-full bg-[rgba(0,0,0,0.5)]">
         <div className=" flex flex-col justify-center items-center">
         <h1 className="text-[42px] text-white font-bold drop-shadow-lg">
            NEED GUIDANCE?
          </h1>
          <span className=" font-Poppins text-[16px]  text-white">
            We’d love to help you.
          </span>
         </div>

          <div className=" flex justify-center ">
            {guidanceData.map((item, index) => (
              <div className="flex mt-16" key={index}>
                <button className="bg-white hover:bg-[rgba(225,225,225,0.9)] ease-in-out duration-100 mx-[10px] px-9 py-3 font-Poppins  text-[14px] font-medium rounded-full">
                  <item.icon className="mr-2" />
                  {item.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuidenceSection;
