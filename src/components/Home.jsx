import React from "react";
import profilePic from "../images/picture.jpg";

const Home = () => {

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="text-2xl font-bold rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            Juliette
            <span className="text-dark_primary"> Martinez</span>
          </h1>
        </div>
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2 className="text-5xl font-bold">Web developer</h2>
          <br />
          <div className="flex justify-end">
            <a href="/cv2.pdf" download>
              <button className="py-2 px-9 border-2 rounded-md border-dark_primary rounded-br-3xl font-medium">Check cv</button>
            </a>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            <div
              data-aos="fade-down"
              data-aos-delay={0}
              className="flex items-center w-80 gap-5"
            >
              <h2 className="text-2xl font-bold">Awarded with Golden Visa</h2>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay={300}
              className="flex items-center w-80 gap-5"
            >
              <h3 className="text-5xl">3</h3>
              <p>Years experience as a front end developer</p>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay={600}
              className="flex items-center w-80 gap-5 flex-row-reverse text-right"
            >
              <h3 className="text-5xl">5+</h3>
              <p>Projects worked on</p>
            </div>
          </div>
        </div>
        <div className="md:h-[32rem]">
          <img
            src={profilePic}
            data-aos="slide-up"
            alt="profilePic"
            className="h-64 w-64 object-cover border rounded-md border-white rounded-br-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
