import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const Navbar = () => {
const [ mobileNav, setMobileNav ] = useState(false)
const handleClick = () => setMobileNav(!mobileNav);

  return (
    <div className="fixed w-full h-24 flex justify-between items-center px-4 bg-gray-800 text-gray-300">
        
       <div> 
            <img className="w-[170px] mt-4 cursor-pointer" src={Logo} alt="Logo" />
        </div>

        {/* Nav Menu */}
        <ul className='hidden md:flex'>
            <li className='transition-text duration-300 hover:text-violet-500'><a href="#">Home</a></li>
            <li className='transition-text duration-300 hover:text-violet-500'><a href="#">About</a></li>
            <li className='transition-text duration-300 hover:text-violet-500'><a href="#">Skills</a></li>
            <li className='transition-text duration-300 hover:text-violet-500'><a href="#">Projects</a></li>
            <li className='transition-text duration-300 hover:text-violet-500'><a href="#">Contact</a></li>
            <li className='transition-text duration-300 hover:text-violet-500'><a href="#">Photos</a></li>
        </ul>

       {/* Hamburger Menu */}
       <div onClick={handleClick} className='md:hidden z-10 text-2xl cursor-pointer'>
        {!mobileNav ? <FaBars /> : <FaTimes />}
       </div>

       {/* Mobile Menu */}
       <ul className={!mobileNav ? 'hidden' : 'bg-gray-800 absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center'}>
            <li className='text-4xl py-6'>Home</li>
            <li className='text-4xl py-6'>About</li>
            <li className='text-4xl py-6'>Skills</li>
            <li className='text-4xl py-6'>Projects</li>
            <li className='text-4xl py-6'>Contact</li>
            <li className='text-4xl py-6'>Photos</li>
        </ul>


       {/* Social Icons */}
       <div className='hidden flex fixed flex-col top-[35%] left-0 lg:flex'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='w-full text-gray-300 flex justify-between items-center pl-2' href="https://www.linkedin.com/in/danielle-tate-16878a152/" target="_blank"  rel="noreferrer">
                    Linkedin <FaLinkedin size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#595959]'>
                <a className='w-full text-gray-300 flex justify-between items-center pl-2' href="https://github.com/danielletate?tab=repositories" target="_blank"  rel="noreferrer">
                    Github <FaGithub size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FF6651]'>
                <a className='w-full text-gray-300 flex justify-between items-center pl-2' href="/">
                    Email <HiOutlineMail size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-400'>
                <a className='w-full text-gray-300 flex justify-between items-center pl-2' href="/">
                    Resume <BsFillPersonLinesFill size={30} />
                </a>
            </li>
        </ul>
       </div>
       
    </div>
  )
}

export default Navbar
