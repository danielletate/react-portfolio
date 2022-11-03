import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gray-800 text-gray-300'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='pb-8 pl-4 sm:text-right '>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            About
          </p>
        </div>
      </div>

     <div className='max-w-[1000px] w-full grid gap-6 px-4 sm:grid-cols-2 '>
          <div className='text-4xl font-bold sm:text-right'>
            <p>Hi. I'm Danielle Tate, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque at nesciunt odio fuga ab! Nemo qui quasi eum, voluptates esse reprehenderit deserunt possimus, odio quo architecto ea rerum vel corrupti? Recusandae, omnis. Quidem ducimus qui aliquam dolores consequatur, tempore et!</p>  
          </div>
    </div>
    </div>
  </div>
  )
}

export default About