import React from 'react';
import ScrollToTopButton from '../ScrollToTopButton';
const AboutPage = () => {
  return (
    <>
      <section className="w-full h-screen bg-gray-800 text-gray-300 md:h-[700px]">
        {/* Container */}
        <div className="w-full h-full max-w-[1000px] mx-auto px-5 flex flex-col justify-center md:h-full">
          <p className="text-violet-400 font-semibold text-md text-4xl md:text-5xl">
            My Story
          </p>
          <p className=" text-violet-200 font-normal my-4">
            A bit more about me...
          </p>
          <div className="flex gap-4 flex-col text-[#888fb0]">
            <p className="text-sm indent-6">
              I'm a passionate designer and developer currently living in
              Denver, CO. I began my journey to become a web developer a couple
              of years back, just as I was in the midst of a major career
              transition. Up until that point, I was practicing Speech-Language
              Pathology, a field that I had spent the better part of a decade
              dedicating myself to. I came to the decision to pursue front-end
              development for a variety of reasons. I have always been a
              naturally curious person, always wanting to know why and how
              things work, and thinking of ways they can function more
              efficiently. I'm a natural born problem-solver and analytical
              thinker through and through. I also have a creative mind. For as
              long as I could remember, I've held an affinity for inventing and
              thinking outside-the-box.
            </p>
            <p className="text-sm indent-6">
              When I first discovered coding and computer programming,
              everything seemed to have fallen into place. I had finally found a
              career path that seemed far more fitting than my previous one. One
              that would allow me to learn and grow in an industry that valued
              my strongest skillsets. Fast forward a couple of years and I can
              undoubtedly say that becoming a front-end developer was the best
              decision that I could have made for myself both personally and
              professionally.
            </p>
          </div>
        </div>
      </section>
      <ScrollToTopButton />
    </>
  );
};

export default AboutPage;
