import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Resume from '../assets/tate-resume.pdf';

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const handleClick = () => setMobileNav(!mobileNav);

  return (
    <div className="fixed w-full h-24 flex justify-between items-center px-4 bg-gray-800 text-gray-300">
      <div>
        <img className="w-[170px] mt-4 cursor-pointer" src={Logo} alt="Logo" />
      </div>

      {/* Nav Menu */}
      <ul className="hidden md:flex">
        <li className="transition-text duration-300 hover:text-violet-500">
          <Link to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="transition-text duration-300 hover:text-violet-500">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="transition-text duration-300 hover:text-violet-500">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="transition-text duration-300 hover:text-violet-500">
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="transition-text duration-300 hover:text-violet-500">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className="transition-text duration-300 hover:text-violet-500">
          <Link to="photos" smooth={true} duration={500}>
            Photos
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 text-2xl cursor-pointer"
      >
        {!mobileNav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !mobileNav
            ? 'hidden'
            : 'bg-gray-800 absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center'
        }
      >
        <li className="text-4xl py-6">
          <Link onClick={handleClick} to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-4xl py-6">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="text-4xl py-6">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="text-4xl py-6">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="text-4xl py-6">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className="text-4xl py-6">
          <Link onClick={handleClick} to="photos" smooth={true} duration={500}>
            Photos
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
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
    </div>
  );
};

export default Navbar;
