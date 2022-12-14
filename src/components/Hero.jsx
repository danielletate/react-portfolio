import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowNarrowRight, HiOutlineMail } from 'react-icons/hi';
import Resume from '../assets/tate-resume.pdf';

const Hero = () => {
  return (
    <section className="w-full h-[900px] bg-gray-800 md:h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 h-full flex flex-col justify-center">
        <p className="text-violet-400 font-medium text-md">
          <span className="text-3xl font-semibold">Hi 👋🏻</span> , my name is
        </p>
        <h1 className="text-4xl sm:text-7xl text-violet-200 font-bold my-2">
          Danielle Tate
        </h1>
        <h2 className="text-4xl sm:text-5xl text-[#888fb0] font-bold">
          I'm a developer with a passion for learning and enhancing user
          experiences.
        </h2>
        <p className="text-[#888fb0] py-4 max-w-[700px] leading-7 mt-4">
          I enjoy working on the front-end of the web. I specialize in building
          + designing stunning digital experiences that are responsive and
          unique. Currently, I am focused on discovering opportunities that will
          allow me to apply my creative, communicative, and analytical skillsets
          on a development team.
        </p>
        <div>
          {/* Button Group */}
          <a href="#work">
            <button className="text-white group border-2 px-6 py-3 mt-4 flex items-center hover:bg-violet-600 hover:border-violet-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2 " />
              </span>
            </button>
          </a>

          {/* Social Icons */}
          <div className="mt-10 lg:hidden ">
            <ul className="flex gap-2">
              <li className="w-[50px] h-[50px] flex justify-between items-center bg-blue-600 duration-300 hover:opacity-80">
                <a
                  className="w-full text-gray-300 flex justify-between items-center"
                  href="https://www.linkedin.com/in/danielle-tate-16878a152/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li className="w-[50px] h-[50px] flex justify-between items-center bg-[#595959] duration-300 hover:opacity-80">
                <a
                  className="w-full text-gray-300 flex justify-between items-center"
                  href="https://github.com/danielletate?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={30} />
                </a>
              </li>
              <li className="w-[50px] h-[50px] flex justify-between items-center bg-[#FF6651] duration-300 hover:opacity-80">
                <a
                  className="w-full text-gray-300 flex justify-between items-center"
                  href="mailto:danielle.tate825@gmail.com"
                >
                  <HiOutlineMail size={30} />
                </a>
              </li>
              <li className="w-[50px] h-[50px] flex justify-between items-center bg-blue-400 duration-300 hover:opacity-80">
                <a
                  className="w-full text-gray-300 flex justify-between items-center"
                  href={Resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFillPersonLinesFill size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
