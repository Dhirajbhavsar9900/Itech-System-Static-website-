import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; // Swiper styles
import "swiper/css/autoplay"; // Optional autoplay styles

export default function LatestUpdates() {
  return (
    <div className="font-Poppins font-medium pt-[150px] relative bg-[#FDF4E4] mb-[-220px]">
      <div className="mx-[190px]">
        <div className="flex flex-row">
          {/* Left Section */}
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
            </div>
          </div>

          {/* Right Section with Swiper */}
          <div className="w-[66%]">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 3000, // Slide duration in milliseconds
                disableOnInteraction: false, // Keeps autoplay running even after user interaction
              }}
              loop={true}
              className="max-w-[1030px] w-full m-auto relative"
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="bg-white rounded-[10px] h-[100vh] p-4 shadow-lg">
                  <img
                    src="https://via.placeholder.com/1000x600?text=Slide+1"
                    alt="Slide 1"
                    className="rounded-md w-full"
                  />
                  <p className="mt-4 text-center">Latest News #1</p>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="bg-white rounded-[10px] p-4 shadow-lg">
                  <img
                    src="https://via.placeholder.com/1000x600?text=Slide+2"
                    alt="Slide 2"
                    className="rounded-md w-full"
                  />
                  <p className="mt-4 text-center">Latest News #2</p>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="bg-white rounded-[10px] p-4 shadow-lg">
                  <img
                    src="https://via.placeholder.com/1000x600?text=Slide+3"
                    alt="Slide 3"
                    className="rounded-md w-full"
                  />
                  <p className="mt-4 text-center">Latest News #3</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
