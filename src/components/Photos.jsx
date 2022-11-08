import React from 'react'
import Photography1 from '../assets/photos/photography1-placeholder.jpg'
import Photography2 from '../assets/photos/photography2-placeholder.jpg'

const Photos = () => {

  return (
    <section name="photos" className='w-full h-screen bg-gray-800 flex justify-center items-center'>

        {/* Container */}
        <div className='w-full h-full max-w-[1000px] mx-auto px-5 flex flex-col justify-center text-gray-300'>
            <div className='py-2 pb-6'>
                <p className='text-4xl font-bold inline border-b-4 border-violet-500'>Photography</p>
                <p className='py-6 md:max-w-full max-w-sm'>
                    Some of the photos I've taken along my travels.
                </p>
            </div>

        </div>
    
    </section>
  )
}

export default Photos