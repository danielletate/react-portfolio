import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Vue from '../assets/vue.png';
import Git from '../assets/git.png';
import Tailwind from '../assets/tailwind.png';
import Bootstrap from '../assets/bootstrap.png';
import Squarespace from '../assets/squarespace.png'

const Skills = () => {
  return (
    <section name='skills' className='w-full bg-gray-800 text-gray-300'>

    {/* Container */}
    <div className='w-full max-w-[1000px] mx-auto px-5 flex flex-col justify-center'>
        <div className='py-2'>
            <p className='text-4xl font-bold inline border-b-4 border-violet-500'>Skills</p>
            <p className='py-6 max-w-sm sm:max-w-lg'>The skills, tools & technologies I use to bring your products to life.</p>
        </div>

        {/* Icons and text */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040720] hover:scale-110 duration-500 cursor-pointer'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML Icon" />
                <p className='my-4 text-sm'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040720] hover:scale-110 duration-500 cursor-pointer'>
                <img className='w-20 mx-auto' src={CSS} alt="CSS Icon" />
                <p className='my-4 text-sm'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040720] hover:scale-110 duration-500 cursor-pointer'>
                <img className='w-20 mx-auto' src={JavaScript} alt="Javascript Icon" />
                <p className='my-4 uppercase text-sm'>Javascript</p>
            </div>
            <div className='shadow-md shadow-[#040720] hover:scale-110 duration-500 cursor-pointer'>
                <img className='w-20 mx-auto' src={ReactImg} alt="React Icon" />
                <p className='my-4 uppercase text-sm'>React</p>
            </div>
            <div className='shadow-md shadow-[#040720] hover:scale-110 duration-500 cursor-pointer'>
                <img className='w-20 mx-auto' src={Vue} alt="Vue Icon" />
                <p className='my-4 uppercase text-sm'>Vue</p>
            </div>
            <div className='shadow-md shadow-[#040720] hover:scale-110 duration-500 cursor-pointer'>
                <img className='w-20 mx-auto' src={Git} alt="Git Icon" />
                <p className='my-4 uppercase text-sm'>Git</p>
            </div>
            <div className='shadow-md shadow-[#040720] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind Icon" />
                <p className='my-4 uppercase text-sm'>Tailwind CSS</p>
            </div>
            <div className='uppercase shadow-md shadow-[#040720] hover:scale-110 duration-500 cursor-pointer'>
                <img className='w-20 mx-auto' src={Bootstrap} alt="Bootstrap Icon" />
                <p className='my-4 uppercase text-sm'>Bootstrap</p>
            </div>
            <div className='uppercase shadow-md shadow-[#040720] hover:scale-110 duration-500 cursor-pointer'>
                <img className='w-20 mx-auto' src={Squarespace} alt="Squarespace Icon" />
                <p className='my-4 uppercase text-sm'>Squarespace</p>
            </div>
        </div>
    </div>
  </section>
  );
};

export default Skills;
