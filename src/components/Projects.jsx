import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import programmer from "../images/programmer.png"
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { ProjectContent } from "../constants/info";

const Projects = () => {
  return (
    <section className="bg-bg_light_primary pb-10" id="projects">
      <div className="md:container px-5 pt-14 flex flex-col justify-between gap-5">
        <div>
          <h2 className="md:text-3xl text-2xl" data-aos="fade-down">
            Projects
          </h2>
          <h4 className="text-gray md:text-4xl text-3xl !leading-relaxed" data-aos="fade-down">
            Take a look to my creations!
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={programmer}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem] w-2/4"
          />
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl px-5 drop-shadow-primary self-start w-2/4 lg:w-1/3 pb-5"
          >
            {ProjectContent.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] mb-5"
              >
                <img src={content.img} alt="project cover" className="object-cover w-full h-56" />
                <div className="flex flex-col gap-1 mt-2 space-y-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <div className="text-sm">{content.txt}</div>
                  <div className="flex gap-2">
                    {
                      content.tags.map((tag) => (
                        <div className="border rounded-2xl bg-blue-900 text-white w-max p-2 text-xs">{tag}</div>
                      ))
                    }
                  </div>
                  <a href={content.link} target="_blank" rel="noreferrer">
                    <button className="text-white border-2 p-2 bg-blue-400">
                      Go to website
                    </button>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
