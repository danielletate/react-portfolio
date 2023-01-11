import React from 'react';
import ScrollToTop from './ScrollToTopButton';
import { travelPhotos } from '../data/travelPhotos.js';
import Carousel from 'better-react-carousel';
import { Link } from 'react-router-dom';

const Photos = () => {
  const photos = travelPhotos;
  return (
    <>
      <section className="w-full h-screen bg-gray-800 flex justify-center items-center">
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
          <div className="flex flex-wrap justify-center -m-1 md:-m-2">
            {/* Photo Carousel */}
            <Carousel cols={2} rows={1} gap={10} loop>
              {photos &&
                photos.map((photo) => (
                  <Carousel.Item>
                    <img
                      width="100%"
                      height="100%"
                      src={photo.image}
                      className="rounded-md"
                    />
                  </Carousel.Item>
                ))}
            </Carousel>
            <Link to="/photography-page">
              <button className="text-white group border-2 px-6 py-3 my-10 flex items-center hover:bg-violet-600 hover:border-violet-600 hover:duration-300">
                See More
              </button>
            </Link>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
};

export default Photos;
