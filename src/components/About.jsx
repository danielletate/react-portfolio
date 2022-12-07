import React from 'react';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gray-800 text-gray-300">
      {/* Container */}
      <div className="flex flex-col justify-center px-4 items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8 pl-4 sm:text-right">
            <p className="text-4xl font-bold inline border-b-4 border-violet-500">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid gap-8 px-4 sm:grid-cols-2">
          <div className="text-4xl font-bold sm:text-right">
            <p>
              Hi. I'm Danielle Tate, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            {/* Bio info */}
            <p className="leading-loose mb-10">
              I am a proudly self-taught developer who has dedicated the past
              few years of my life to learning and understanding how the web
              works. Having transitioned from a non-technical industry (fun
              fact, I used to be a Speech-Language Pathologist!), I've worked
              tremendously hard to grow my coding abilities and gain exposure to
              a variety of web technologies...
            </p>

            {/* Link to About Page */}
            <Link to="/about">
              <button className="text-white group border-2 px-6 py-3 my-10 flex items-center hover:bg-violet-600 hover:border-violet-600 hover:duration-300">
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// ADD ABOUT PAGE (button to learn more anout me)
