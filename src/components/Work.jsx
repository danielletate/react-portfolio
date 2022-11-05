import React from 'react'
import WorkImg1 from '../assets/projects/work1-placeholder.jpg'
import WorkImg2 from '../assets/projects/work2-placeholder.jpg'


const Work = () => {
  return (
    <section name="work" className="w-full bg-gray-800 text-gray-300 md:h-screen">

        {/* Container */}
        <div className='w-full h-full max-w-[1000px] mx-auto px-5 flex flex-col justify-center'>
            <div className='py-2 pb-6'>
                <p className='text-4xl font-bold inline border-b-4 border-violet-500'>Work</p>
                <p className='py-6 md:max-w-full max-w-sm'>
                  Below are a few past projects that I've worked on. Want to see more?
                  <a className='text-violet-500 ml-1 font-medium' href="mailto:danielle.tate825@gmail.com">
                    Email me
                  </a>
                </p>
            </div>

            {/* Grid Container */}
            <div 
              className='grid gap-4 grid-cols-1 md:grid-cols-3 px-2'>

                {/*Grid Item */}
                <div 
                  style={{backgroundImage: `url(${WorkImg1})`}} 
                  className='shadow-lg shadow-[#040720] container rounded-md flex justify-center items-center mx-auto content-div group'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-white tracking-wider font-bold'>
                            React JS Application
                        </span>

                        <div className='pt-10 text-center'>
                            <a href="#">
                               <button className='text-lg text-center bg-white text-gray-700 font-bold rounded-lg px-4 py-3 m-2'>Demo</button>
                            </a>
                            <a href="#">
                                <button className='text-lg text-center bg-green-500 text-white font-bold rounded-lg px-4 py-3 m-2'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div 
                  style={{backgroundImage: `url(${WorkImg2})`}} 
                  className='shadow-lg shadow-[#040720] container rounded-md flex justify-center items-center mx-auto content-div group'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-white tracking-wider font-bold'>
                            React JS Application
                        </span>

                        <div className='pt-10 text-center'>
                            <a href="#">
                               <button className='text-lg text-center bg-white text-gray-700 font-bold rounded-lg px-4 py-3 m-2'>Demo</button>
                            </a>
                            <a href="#">
                                <button className='text-lg text-center bg-green-500 text-white font-bold rounded-lg px-4 py-3 m-2'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>

                <div 
                  style={{backgroundImage: `url(${WorkImg1})`}} 
                  className='shadow-lg shadow-[#040720] container rounded-md flex justify-center items-center mx-auto content-div group'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-white tracking-wider font-bold'>
                            React JS Application
                        </span>

                        <div className='pt-10 text-center'>
                            <a href="#">
                               <button className='text-lg text-center bg-white text-gray-700 font-bold rounded-lg px-4 py-3 m-2'>Demo</button>
                            </a>
                            <a href="#">
                                <button className='text-lg text-center bg-green-500 text-white font-bold rounded-lg px-4 py-3 m-2'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div 
                  style={{backgroundImage: `url(${WorkImg2})`}} 
                  className='shadow-lg shadow-[#040720] container rounded-md flex justify-center items-center mx-auto content-div group'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-white tracking-wider font-bold'>
                            React JS Application
                        </span>

                        <div className='pt-10 text-center'>
                            <a href="#">
                               <button className='text-lg text-center bg-white text-gray-700 font-bold rounded-lg px-4 py-3 m-2'>Demo</button>
                            </a>
                            <a href="#">
                                <button className='text-lg text-center bg-green-500 text-white font-bold rounded-lg px-4 py-3 m-2'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>



            </div>
        </div>
    </section>
  );
};

export default Work