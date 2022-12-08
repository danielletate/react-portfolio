import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Resume from '../assets/tate-resume.pdf';

const SocialIcons = () => {
  return (
    <div className="hidden fixed flex-col top-[35%] left-0 lg:flex">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
          <a
            className="w-full text-gray-300 flex justify-between items-center pl-2"
            href="https://www.linkedin.com/in/danielle-tate-16878a152/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#595959]">
          <a
            className="w-full text-gray-300 flex justify-between items-center pl-2"
            href="https://github.com/danielletate?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FF6651]">
          <a
            className="w-full text-gray-300 flex justify-between items-center pl-2"
            href="mailto:danielle.tate825@gmail.com"
          >
            Email <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-400">
          <a
            className="w-full text-gray-300 flex justify-between items-center pl-2"
            href={Resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
