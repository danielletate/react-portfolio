import React from 'react';
import Photography1 from '../assets/photos/photography1-placeholder.jpg';
import ScrollToTop from './ScrollToTopButton';

const Photos = () => {
  return (
    <>
      <section className="w-full h-[700px] bg-gray-800 flex justify-center items-center md:h-[650px]">
        {/* Container */}
        <div className="w-full h-full max-w-[1000px] mx-auto px-5 flex flex-col justify-center text-gray-300">
          <div className="py-2 pb-6">
            <p className="text-4xl font-bold inline border-b-4 border-violet-500">
              Photography
            </p>
            <p className="py-6 md:max-w-full max-w-sm">
              Some of the photos I've taken along my travels.
            </p>
          </div>

          {/* Photos Container */}
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/2 md:w-1/3">
              <div class="w-full p-1 md:p-2">
                <img
                  alt=""
                  class="block object-cover object-center w-full h-full rounded-sm"
                  src={Photography1}
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2 md:w-1/3">
              <div class="w-full p-1 md:p-2">
                <img
                  alt=""
                  class="block object-cover object-center w-full h-full rounded-sm"
                  src={Photography1}
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2 md:w-1/3">
              <div class="w-full p-1 md:p-2">
                <img
                  alt=""
                  class="block object-cover object-center w-full h-full rounded-sm"
                  src={Photography1}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
};

export default Photos;
