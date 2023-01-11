import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const handleClick = () => setMobileNav(!mobileNav);

  return (
    <div className="fixed px-20 py-14 w-full h-24 z-50 flex justify-between items-center bg-gray-800 text-gray-300">
      <div>
        <Link to="/">
          <img
            className="w-[170px] mt-4 cursor-pointer"
            src={Logo}
            alt="Logo"
          />
        </Link>
      </div>

      {/* Nav Menu */}
      <ul className="hidden md:flex">
        <li className="transition-text duration-300 hover:text-violet-500">
          <Link to="/">Home</Link>
        </li>
        <li className="transition-text duration-300 hover:text-violet-500">
          <Link to="/about">About</Link>
        </li>
        <li className="transition-text duration-300 hover:text-violet-500">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="transition-text duration-300 hover:text-violet-500">
          <Link to="/work">Work</Link>
        </li>
        <li className="transition-text duration-300 hover:text-violet-500">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="transition-text duration-300 hover:text-violet-500">
          <Link to="/photos">Photos</Link>
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
          <li className="transition-text duration-300 hover:text-violet-500">
            <Link to="/" onClick={handleClick}>
              Home
            </Link>
          </li>
        </li>
        <li className="text-4xl py-6">
          <Link to="/about" onClick={handleClick}>
            About
          </Link>
        </li>
        <li className="text-4xl py-6">
          <Link to="/skills" onClick={handleClick}>
            Skills
          </Link>
        </li>
        <li className="text-4xl py-6">
          <Link to="/work" onClick={handleClick}>
            Work
          </Link>
        </li>
        <li className="text-4xl py-6">
          <Link to="/contact" onClick={handleClick}>
            Contact
          </Link>
        </li>
        <li className="text-4xl py-6">
          <Link to="/photos" onClick={handleClick}>
            Photos
          </Link>
        </li>
      </ul>

      <SocialIcons />
    </div>
  );
};

export default Navbar;
