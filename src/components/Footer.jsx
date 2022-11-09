import React from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'
import { BsGithub, BsLinkedin } from 'react-icons/bs'



const Footer = () => {
  return (
        <footer className='bg-gray-800'>

            {/* Footer Container */}
            <div className='flex flex-col justify-center items-center py-6'>
                <img className='w-[170px] mb-[-60px] ml-6' src={Logo} alt="logo" />
                
                {/* Socials Container */}
                <div className='flex justify-center items-center gap-4 py-4 text-2xl text-gray-600'>
                    <BsGithub className='' />
                    <BsLinkedin />

                </div>
                <ul className='flex justify-center items-center py-4 text-gray-600 '>
                    <li>
                        <Link to="hero" smooth={true} duration={500}>
                         Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                         About
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500}>
                         Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="work" smooth={true} duration={500}>
                         Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>
                         Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="photos" smooth={true} duration={500}>
                         Photos
                        </Link>
                    </li>
                 
                </ul>
                <p className='text-violet-400 py-4 text-sm'>© 2022, Built & designed by Danielle Tate. All Rights Reserved.</p>
            </div>
         
        </footer>        
  )
}

export default Footer