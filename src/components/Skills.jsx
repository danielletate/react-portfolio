import { SkillsData } from '../data/skillsData';
import ScrollToTop from './ScrollToTopButton';

const Skills = () => {
  const skill = SkillsData;
  return (
    <>
      <section className="w-full h-[1200px] bg-gray-800 text-gray-300 md:h-[920px]">
        {/* Container */}
        <div className="w-full h-full max-w-[1000px] mx-auto px-5 flex flex-col justify-center">
          <div className="py-2">
            <p className="text-4xl font-bold inline border-b-4 border-violet-500">
              Skills
            </p>
            <p className="py-6 max-w-sm sm:max-w-lg">
              The skills, tools & technologies I use to bring your products to
              life.
            </p>
          </div>
          {/* Skills Container */}
          <div className="grid grid-cols-2 gap-4 py-8 text-center md:grid-cols-4">
            {/* Grid Item */}
            {skill.map((item, index) => (
              <div
                key={index}
                className="shadow-md shadow-[#040720] hover:scale-110 duration-300"
              >
                <img src={item.image} className="w-20 mx-auto" />
                <p className="my-4 text-sm">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
};

export default Skills;
