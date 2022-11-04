import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Hero = () => {
  return (

    <div name='hero' className='w-full h-screen bg-gray-800'>

    {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8  h-full flex flex-col justify-center'>
    <p className='text-violet-400 font-medium text-md'> <span className='text-3xl font-semibold'>Hi 👋🏻</span> , my name is</p>
        <h1 className='text-4xl sm:text-7xl text-violet-200 font-bold my-2'>Danielle Tate</h1>
        <h2 className='text-4xl sm:text-5xl text-[#888fb0] font-bold'>I'm a developer with an unquenchable passion for travel + lifelong learning. </h2>
        <p className='text-[#888fb0] py-4 max-w-[700px] leading-7'>I enjoy working on the front-end of the web. I specialize in building + designining stunning digital experiences that are responsive and unique. My current focus is developing front-end web applications and collaborating on projects that move me. </p>
      <div>

        {/* Button Group */}
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-violet-600 hover:border-violet-600'>
          View Work
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-2 ' />
          </span>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Hero