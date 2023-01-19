import React from "react";
import { MdArrowForward } from "react-icons/md";
import { SkillsContent } from "../constants/info";

const Skills = () => {
  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">

      <div className="md:container px-5  py-14">
        <h2 className="title" data-aos="fade-down">
          Skills
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          My top skills
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {SkillsContent.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-10 group-hover:scale-125 duration-200 object-fit"
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;