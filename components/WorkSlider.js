// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb7.jpg",
          rink: "https://react-router-hash-link.rafgraph.dev/page#section-three",
        },
        {
          title: "title",
          path: "/thumb8.jpg",
          rink: "https://react-router-hash-link.rafgraph.dev/page#section-three",
        },
        {
          title: "title",
          path: "/thumb9.jpg",
          rink: "https://react-router-hash-link.rafgraph.dev/page#section-three",
        },
        {
          title: "title",
          path: "/thumb10.jpg",
          rink: "https://react-router-hash-link.rafgraph.dev/page#section-three",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb5.jpg",
          rink: "https://react-router-hash-link.rafgraph.dev/page#section-three",
        },
        {
          title: "title",
          path: "/thumb6.jpg",
          rink: "https://react-router-hash-link.rafgraph.dev/page#section-three",
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { BsArrowRight } from "react-icons/bs";

import { Pagination } from "swiper";

import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden
                  flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* img */}

                      <a href={image.rink} key={index} target="_blank">
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt=""
                          className=""
                        />
                      </a>

                      {/* overflow gradient
                      <div className="absolute inset-0 bg-gradient-to-l 
                      from-transparent via-[#e838cc] to-[#4a22bd]
                      opacity-0 group-hover:opacity-80 transition-all duration-700"></div> */}
                      {/* title */}
                      <div
                        className="absolute bottom-0 translate-y-full bg-primary/70 rounded-full p-2
                      group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300"
                      >
                        <a href={image.rink} key={index} target="_blank">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          <div className="delay-100">LIVE</div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>
                          <div
                            className="text-xl translate-y-[500%] group-hover:translate-y-0
                          transition-all duration-300 delay-200"
                          >
                            <BsArrowRight />
                          </div>
                        </div>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
