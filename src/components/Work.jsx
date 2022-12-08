import React from 'react';
import { ProjectsData } from '../data/workData';
const Work = () => {
  // Projects file
  const project = ProjectsData;
  return (
    <section
      id="work"
      className="w-full h-[900px] bg-gray-800 text-gray-300 md:h-[700px]"
    >
      {/* Container */}
      <div className="w-full h-full max-w-[1000px] mx-auto px-5 flex flex-col justify-center">
        <div className="py-2 pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-violet-500">
            Work
          </p>
          <p className="py-6 md:max-w-full max-w-sm">
            Below are several recent projects that I've worked on. Want to see
            more?
            <a
              className="text-violet-500 ml-1 font-medium"
              href="mailto:danielle.tate825@gmail.com"
            >
              Email me
            </a>
          </p>
        </div>

        {/* Projects container */}
        <div className="grid gap-4 cursor-default sm:grid-cols-1 md:grid-cols-2">
          {/* Grid Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040a16] container rounded-md flex flex-col justify-evenly text-center items-center py-2
               content-div group"
            >
              {/* Hover overlay effect for images */}
              <div className="opacity-0 group-hover:opacity-100 max-w-sm">
                <span className="text-2xl font-bold text-white tracking-wider uppercase">
                  {item.name}
                </span>

                {/* Description */}
                <p className="text-sm text-gray-200 mt-6">{item.description}</p>

                {/* Buttons container */}
                <div className="pt-8 text-center ">
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-md px-4 py-3 
                       bg-white text-gray-700 font-bold text-sm"
                    >
                      Code
                    </button>
                  </a>
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-md px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-sm"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
