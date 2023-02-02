import React from "react";
import award2 from "../images/award-2.jpg"
import award from "../images/award-1.jpg"

const Awards = () => {
  return (
    <section className="min-h-fit bg-bg_light_primary" id="awards">
      <div className="md:container px-5 py-14 w-full">
        <h2 className="md:text-3xl text-2xl" data-aos="fade-down">
          Awards
        </h2>
        <h4 className="text-gray md:text-4xl text-3xl !leading-relaxed" data-aos="fade-down">
          DAST AWARD
        </h4>
        <br />
        <div className="flex flex-col lg:flex-row">
          <div className="p-16 w-full md:p-10 lg:w-2/4">
            <div
              data-aos="fade-left"
              className="duration-500 bg-bg_light_primary mx-8 border-2 p-8 h-full rounded-2xl flex items-center flex-col border-slate-200"
            >
              <div className="flex flex-col gap-5">
                <img src={award2} alt="DAST AWARDr" className="object-cover w-full" data-aos="fade-right" />
                <p className="sm:text-base text-sm">
                  On May 11th 2022, I was awarded with the <span className="font-bold text-blue-600">Dubai Award For Sustainable Transport (DAST)</span>. This award, created by the Road Transport Authority (RTA) of Dubai
                  is given each year to transport systems initiatives in the field of safety, innovation and environmental protection. My project was <span className="font-bold text-blue-600">Finding a suitable V2X protocol for Dubai</span>,
                  and evaluated through simulations the way in which network protocols, that enable communication amongst cars and their surroundings, could prevent
                  road accidents in Dubai.
                </p>
                <a href="https://final-project-website.vercel.app/" target="_blank" rel="noreferrer">
                  <button className="text-white border-2 p-2 bg-blue-400">
                    Find more
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="p-5 lg:w-2/4 w-full flex items-center justify-center">
            <img src={award} alt="DAST AWARD" className="border rounded-md rounded-br-3xl object-cover opacity-75 w-[25rem] lg:w-[35rem]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Awards