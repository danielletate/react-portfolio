import React from 'react';
import Logo from '../assets/logo.png';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      {/* Footer Container */}
      <div className="flex flex-col justify-center items-center py-6">
        <img className="w-[170px] mb-[-60px] ml-6" src={Logo} alt="logo" />

        {/* Socials Container */}
        <div className="flex justify-center items-center gap-4 py-4 text-2xl text-gray-600">
          <a
            href="https://www.linkedin.com/in/danielle-tate-16878a152/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/danielletate?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </div>
        <ul className="flex justify-center items-center py-4 text-gray-600 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/photos">Photos</Link>
          </li>
        </ul>
        <p className="text-violet-400 py-4 text-sm">
          © 2023, Built & designed by Danielle Tate. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
