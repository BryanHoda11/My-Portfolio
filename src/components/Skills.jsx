import { useState } from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { ImGithub } from "react-icons/im";

const Skills = () => {
  const TechSkills = [
    {
      icon: <FaHtml5 className='text-orange-500' size={60} />,
      name: 'HTML'
    },
    {
      icon: <FaCss3Alt className='text-blue-500' size={60} />,
      name: 'CSS'
    },
    {
      icon: <FaJs className='text-yellow-400' size={60} />,
      name: 'JavaScript (JS)'
    },
    {
      icon: <FaReact className='text-blue-400' size={60} />,
      name: 'React JS'
    },
    {
      icon: <SiNextdotjs className='text-black' size={60} />,
      name: 'Next.js'
    },
    {
      icon: <RiTailwindCssFill className='text-blue-600' size={60} />,
      name: 'Tailwind CSS'
    },
    {
      icon: <FaBootstrap className='text-purple-600' size={60} />,
      name: 'Bootstrap'
    },
    {
      icon: <SiRedux className='text-purple-800' size={60} />,
      name: 'React Redux'
    },
    {
      icon: <ImGithub size={60} />,
      name: 'Git / GitHub'
    },
    {
      icon: <RiOpenaiFill className='text-black' size={60} />,
      name: 'Chat GPT'
    },

  ]
  const [showAllSkills, setShowAllSkills] = useState(false);

  const visibleSkills = showAllSkills ? TechSkills : TechSkills.slice(0, 6);

  return (
    <>
      <div className="skills my-10">
        <h2 className='text-blue-600 text-lg sm:text-xl md:pl-12 text-center'>TECHNOLOGIES</h2>

        <div className="flex flex-wrap w-[90%] mx-auto max-md:hidden gap-7 justify-center px-6 pt-6">
          {TechSkills.map((T) => (
            <div key={T.name} className="card w-fit flex items-center gap-2 px-6 py-4 rounded-lg hover:scale-105 bg-white shadow-md shadow-blue-300 transition-all duration-300">
              <span>{T.icon}</span>
              <span>{T.name}</span>
            </div>
          ))}
        </div>

        <div className="md:hidden px-4 relative pt-3">

          <div className={`relative overflow-hidden transition-all duration-700 ease-in-out ${showAllSkills ? "max-h-[1000px]" : "max-h-[450px]"}`}>
            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 py-3">
              {visibleSkills.map((T) => (
                <div key={T.name} className="card cursor-pointer h-auto px-5 py-6 flex flex-col items-center justify-center rounded-lg hover:scale-105 bg-white shadow-md shadow-blue-300 transition-all duration-300">
                  <div className="py-4 text-3xl">{T.icon}</div>
                  <h3 className="text-sm font-medium text-center">{T.name}</h3>
                </div>
              ))}
            </div>

            {!showAllSkills && TechSkills.length > 6 && (
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-500/25 via-blue-400/10 to-transparent pointer-events-none rounded-b-lg"></div>
            )}
          </div>

          {/* Show More / Show Less Button */}
          {TechSkills.length > 6 && (
            <div className="flex justify-center">
              <button onClick={() => setShowAllSkills(!showAllSkills)} className={`px-5 py-2 cursor-pointer ${!showAllSkills ? "absolute bottom-[-5px]" : ""} my-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all duration-300`}>
                {showAllSkills ? "Show Less" : "Show More"}
              </button>
            </div>
          )}

        </div>
      </div>
    </>
  )
}

export default Skills
