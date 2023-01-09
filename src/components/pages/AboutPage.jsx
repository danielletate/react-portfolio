import React from 'react';
import ScrollToTopButton from '../ScrollToTopButton';
const AboutPage = () => {
  return (
    <>
      <section className="w-full h-[1400px] bg-gray-800 text-gray-300 md:h-[1000px]">
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
              I'm a passionate designer and developer from NYC currently
              residing in beautiful Denver, CO. I began my journey to become a
              web developer a couple of years back, just as I was in the midst
              of a major career transition. Up until that point, I was
              practicing Speech-Language Pathology, a field that I had spent the
              better part of a decade dedicating myself to. I came to the
              decision to pursue front-end development for a variety of reasons.
              I have always been a naturally curious person, always wanting to
              know why and how things work, and thinking of ways they can
              function more efficiently. I'm a natural born problem-solver and
              analytical thinker through and through. I also have a creative
              mind. For as long as I could remember, I've held an affinity for
              inventing and thinking outside-the-box.
            </p>
            <p className="text-sm indent-6">
              When I first discovered coding and computer programming,
              everything seemed to have fallen into place. I had finally found a
              career path that seemed far more fitting than my previous one. One
              that would allow me to learn and grow in an industry that valued
              my strongest skillsets. Fast forward a couple of years and I can
              undoubtedly say that becoming a front-end developer was the best
              decision that I could have made for myself both personally and
              professionally. Being a self-taught programmer, I am extremely
              passionate about what I do. This journey has by no way been an
              easy one, but if there's one thing it has proved it's that I
              possess a great deal of dedication, self-motivation, and
              discipline.
            </p>
            <p className="text-sm indent-6">
              The fact that there is always room to grow and learn as a
              developer is what excites me most about the industry. My work has
              pushed and encouraged me to stretch my creative boundaries, as
              well as strengthened my problem solving skills immensely. I am
              always up for a challenge, and welcome new opportunities to learn
              and improve my technical abilities. While I may have spent years
              in what many would view as an unrelated field, my former work as a
              therapist has certainly not been unvaluable. I've spent countless
              hours learning how these skills do transfer, and how they can and
              have made me a stronger programmer. My story may be
              unconventional, but I firmly believe that the lessons I have
              learned along the way has made the transition into software
              development all the more rewarding.
            </p>
            <p className="text-sm indent-6">
              Since beginning my journey, I have made the conscious effort to
              try and expose myself to all different facets of the industy. To
              this point, I have been involved in various freelance projects,
              which have helped get my feet in the water and fine tune the
              skills that I've been working so hard indepndently to build. I've
              grown my network and have been tediously building my portfolio to
              showcase my accomplishments. I am currently seeking a full-time
              position with the right company that will allow me to colllaborate
              with like-minded developers in the field, as well as to learn from
              them. I am open and ready to find the right opportunity that will
              take my career as a developer to the next level.
            </p>

            <p className="text-sm indent-6">
              When I'm not coding, you can find me hiking the beautiful Colorado
              mountains, playing my guitar, taking photos, or enjoying a good
              book with my two adorable cats. I also have an unquenchable
              passion for travel and have been fortunate enough to visit some of
              the most equisite countries our planet has to offer (44 and
              counting!). I always have and will continue to welcome adventure
              and new experiences into my life. Becoming a developer is just one
              more adventure that I'm excied to keep conquering!
            </p>
          </div>
        </div>
      </section>
      <ScrollToTopButton />
    </>
  );
};

export default AboutPage;
