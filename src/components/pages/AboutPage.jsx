import React from 'react';
import ScrollToTopButton from '../ScrollToTopButton';
import Bio from '../../assets/photos/danielle-tate.jpg';

const AboutPage = () => {
  return (
    <>
      <section className="w-full h-[2000px] bg-gray-800 text-gray-300 md:h-[1400px]">
        {/* Container */}
        <div className="w-full h-full pt-40 max-w-[1000px] mx-auto px-5 flex flex-col justify-center md:h-full">
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
              function more efficiently. I'm a natural-born problem-solver and
              analytical thinker through and through. I also have a creative
              mind. For as long as I could remember, I've held an affinity for
              inventing and thinking outside the box.
            </p>
            <p className="text-sm indent-6">
              When I first discovered coding and computer programming,
              everything seemed to have fallen into place. I had finally found a
              career path that seemed far more fitting than my previous one. One
              that would allow me to learn and grow in an industry that valued
              my strongest skill sets. Fast-forward a couple of years and I can
              undoubtedly say that becoming a front-end developer was the best
              decision I could have made for myself, personally and
              professionally. Being a self-taught programmer, I am extremely
              passionate about what I do. This journey has by no way been easy,
              but if there's one thing it has proved it's that I possess a great
              deal of dedication, self-motivation, and discipline.
            </p>
            <p className="text-sm indent-6">
              The fact that there is always room to grow and learn as a
              developer is what excites me most about the industry. My work has
              pushed and encouraged me to stretch my creative boundaries, and
              has strengthened my problem-solving skills immensely. I am always
              up for a challenge, and welcome new opportunities to learn and
              improve my technical abilities. While I may have spent years in
              what many would view as an unrelated field, my former work as a
              therapist has certainly not been insignificant. I've spent
              countless hours learning how these skills transfer, and how they
              can and have made me a stronger programmer. Just to name a few, my
              tenacity, attention to detail, communication, and problem-solving
              abilities are skills that have allowed me to become the dedicated
              developer that I am today. My story may be unconventional, but I
              firmly believe that the lessons I have learned along the way have
              made the transition into software development all the more
              rewarding.
            </p>
            <p className="text-sm indent-6">
              Since beginning my journey, I have made a conscious effort to
              expose myself to all facets of the industry. I have designed and
              developed programs on my own using programming languages I've
              studied and have been involved in several freelance projects,
              which have helped me get my feet in the water and fine-tune the
              skills that I've been working so hard independently to build. The
              programming technologies and languages that I regularly work with
              include HTML5, CSS3, JavaScript, React, Vue.js, and Tailwind CSS.
              I absolutely love to learn and look forward to continuing to gain
              exposure to new technologies the further I grow as a developer.
              Over the past couple of years, I have worked to expand my
              professional network and have been tediously building my portfolio
              to showcase my accomplishments. I am currently seeking a full-time
              position with a wonderful company that will allow me to
              collaborate with, and learn from, like-minded developers. I am
              excited to find the right opportunity that will take my career as
              a developer to the next level.
            </p>

            <p className="text-sm indent-6">
              When I'm not coding, you can find me hiking the beautiful Colorado
              mountains, playing my guitar, taking photos, or enjoying a good
              book with my two adorable cats. I also have an unquenchable
              passion for travel and have been fortunate enough to visit some of
              the most exquisite countries our planet has to offer (44 and
              counting!). I always have and will continue to welcome adventure
              and new experiences into my life. Becoming a developer is just one
              more adventure that I'm excited to keep conquering!
            </p>
          </div>
          <div className="flex justify-center m-auto mt-14">
            <img className="h-[250px] w-auto" src={Bio} alt="bio" />
          </div>
        </div>
      </section>
      <ScrollToTopButton />
    </>
  );
};

export default AboutPage;
