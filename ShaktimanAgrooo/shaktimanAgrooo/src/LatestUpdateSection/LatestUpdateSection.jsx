import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import leftarrow from "../img/arrowLeft.svg";
import { useRef } from "react";

function LatestUpdates() {
  const swiperRef = useRef(null);

  return (
    <div className="font-Poppins font-medium pt-[150px] relative bg-[#FDF4E4] mb-[-220px]">
      <div className="mx-[190px]">
        <div className="flex flex-col">
          <div className="flex flex-col w-[36%]">
            <h1 className="text-[42px] w-[508px] mb-[20px] uppercase leading-10">
              STAY INFORMED WITH OUR{" "}
              <strong className="text-[#F37021]">LATEST UPDATES</strong>
            </h1>
            <div className="flex font-light flex-col gap-3">
              <p>
                In our news section, you’ll find the most recent updates, press
                releases, and articles about Shaktiman, our innovative
                agricultural solutions, and the latest developments in the
                farming industry.
              </p>
              <p>
                Stay informed and up-to-date with the latest news that matters
                to you and your agricultural endeavors. Check back regularly for
                the freshest insights and information.
              </p>
              <div className=" flex items-center">
                <button className="bg-[#F37021] text-white px-4 py-3 rounded-lg hover:bg-[#E25700] hover:duration-500">
                  View more
                  <ArrowCircleRightIcon className="pl-[4px] ml-1 " />
                </button>
              </div>
            </div>
          </div>
          <div className="w-[55%] block absolute top-100 left-[800px]">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="max-w-[1030px] w-full m-auto relative"
              onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance in the ref
            >
              <SwiperSlide>
                <div className="bg-white rounded-[10px] h-[70vh] w-[90%] p-4 shadow-lg">
                  <img
                    src="https://via.placeholder.com/1000x600?text=Slide+1"
                    alt="Slide 1"
                    className="rounded-md w-full"
                  />
                  <p className="mt-4 text-center">Latest News #1</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white rounded-[10px] h-[70vh] w-[90%] p-4 shadow-lg">
                  <img
                    src="https://via.placeholder.com/1000x600?text=Slide+1"
                    alt="Slide 1"
                    className="rounded-md w-full"
                  />
                  <p className="mt-4 text-center">Latest News #1</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white rounded-[10px] h-[70vh] w-[90%] p-4 shadow-lg">
                  <img
                    src="https://via.placeholder.com/1000x600?text=Slide+1"
                    alt="Slide 1"
                    className="rounded-md w-full"
                  />
                  <p className="mt-4 text-center">Latest News #1</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="mt-20 mb-10 flex gap-1">
            <div
              className="flex items-center justify-center w-[50px] h-[50px] rounded-lg cursor-pointer hover:bg-[#FAD4B5] bg-white"
              onClick={() => swiperRef.current?.slidePrev()} // Move to previous slide
            >
              <img src={leftarrow} alt="Previous" />
            </div>
            <div
              className="w-[50px] flex items-center justify-center h-[50px] hover:bg-[#FAD4B5] cursor-pointer rounded-lg bg-white"
              onClick={() => swiperRef.current?.slideNext()} // Move to next slide
            >
              <img className="rotate-180" src={leftarrow} alt="Next" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LatestUpdates;
