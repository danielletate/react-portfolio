import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'


const Navbar = () => {
const [ mobileNav, setMobileNav ] = useState(false)
const handleClick = () => setMobileNav(!mobileNav);

  return (
    <div className="fixed w-full h-24 flex justify-between items-center px-4 bg-gray-800 text-gray-300">
        
       <div> 
            <img className="w-[150px] mt-4" src={Logo} alt="Logo" />
        </div>

        {/* Nav Menu */}
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Photos</li>
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
       <div className='hidden'></div>
       
    </div>
  )
}

export default Navbar
