import React from "react";
import HeroVideo from "../video/hero-banner-video.mp4";
import HeroBage from "../img/hero-badge.png"
function heroSection() {
  return (
    <div className="relative h-[96vh] ">
      <div className="absolute inset-0">
        <video
          src={HeroVideo}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        ></video>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="relative z-10 flex justify-end items-center h-full">
          <div className="absolute bottom-0 left-0 right-0 py-12 bg-[rgba(35,31,32,0.4)] w-full z-20">
            <div className="row mb-10 flex">
              <div className=" px-[180px] flex-col text-white leading-tight flex justify-start w-full ">
                <h1 className="text-[45px] w-[900px] mb-5  font-semibold  uppercase space-x-10 font-Poppins  text-white">
                  Transforming Global Agriculture for Over The Two Decades
                </h1>
                <span className=" text-[20px]">
                  Shaktiman is all set to revolutionize the Farm mechanization
                  Globally.
                </span>
              </div>
              <div className="pt-[30px] pl-[40px] pb-[30px] pr-[40px] absolute top-[25%] rounded-l-full right-0 bg-[#FDF4E4]">
                <img className=" max-w-[220px] mr-[20px]" src={HeroBage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default heroSection;
