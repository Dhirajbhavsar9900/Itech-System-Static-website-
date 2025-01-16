import React from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
function AboutSection() {
  return (
    <div className="pb-[200px] bg-[top_right] bg-no-repeat bg-[length:70%] relative">
  <div className="relative py-[70px]  z-10 flex flex-wrap">
    <div className="flex justify-start ml-[200px]">
      <div className="flex flex-col">
        <h2 className="text-black text-[42px] font-semibold font-Poppins leading-[1.1] uppercase mb-[15px]">
          Making <br />
          <strong className="text-[#F37021]">agriculture</strong>
          <br />
          more economical
        </h2>
        <div className="mt-[50px] text-white">
          <button className="flex items-center gap-[10px] bg-[#F37021] px-[24px] py-[10px] rounded-[4px] hover:bg-[#e25700] transition duration-400 ease-out">
            Discover Product
            <ArrowCircleRightIcon />
          </button>
        </div>
      </div>
      <div className="bg-aboutImage  w-full max-w-[65%] absolute right-0 top-0 z-20 bg-left-bottom bg-no-repeat bg-cover">
        <div className=" pt-[70px] pl-[131px] pb-[200px] max-w-[680px]">
          <p  className="mb-[20px]">
            Tirth Agro Technology Private Limited, known as Shaktiman, was
            founded in 1997 in Rajkot, Gujarat, by late Shri Ladhubhai S. Gohil.
            Originally focused on spare parts as A.G. Agro Industries, we
            evolved to become a prominent Indian agricultural implements
            manufacturer under the brand. <strong className=" text-[#F37021]">"SHAKTIMAN"</strong>
          </p>
          <p className="mb-[20px]">Our core vision is to fully mechanize Indian agriculture, with a robust dealership network, world-class manufacturing, and a diverse product range. Notable achievements include being the world’s largest Rotary Tiller manufacturer and the leading exporter of agricultural implements to over 100 countries. We emphasize sustainable growth and are dedicated to research and development.</p>
          <p className="mb-[20px]">Shaktiman stands for Indian agricultural progress, offering top-quality implements and services.</p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default AboutSection;
