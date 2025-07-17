import React from 'react'

import Marquee from "react-fast-marquee";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";

const Skills = () => {
    const TechSkills = [
        {
          icon: <FaHtml5 className='text-orange-500' style={{ fontSize: '80px' }} />,
          name: 'Hyper Text Markup Language (HTML)'
        },
        {
          icon: <FaCss3Alt className='text-blue-500' style={{ fontSize: '80px' }} />,
          name: 'Cascading Style Sheets (CSS)'
        },
        {
          icon: <FaJs className='text-yellow-400' style={{ fontSize: '80px' }} />,
          name: 'JavaScript (JS)'
        },
        {
          icon: <RiTailwindCssFill className='text-blue-600' style={{ fontSize: '80px' }} />,
          name: 'Tailwind CSS'
        },
        {
          icon: <FaBootstrap className='text-purple-600' style={{ fontSize: '80px' }} />,
          name: 'Bootstrap'
        },
        {
          icon: <FaReact className='text-blue-400' style={{ fontSize: '80px' }} />,
          name: 'React JS'
        },
        {
          icon: <SiNextdotjs className='text-black' style={{ fontSize: '80px' }} />,
          name: 'Next.js'
        },
        {
          icon: <SiRedux className='text-purple-800' style={{ fontSize: '80px' }} />,
          name: 'React Redux'
        },
        {
          icon: <RiOpenaiFill className='text-black' style={{ fontSize: '80px' }} />,
          name: 'Chat GPT'
        },
    
      ]
      
  return (
    <>
      <div className="skills my-10">
        <h2 className='text-blue-600 text-lg sm:text-xl md:pl-12 text-center md:text-start'>MY SKILLS</h2>

        <div className="skills-container flex mx-auto items-center gap-4 py-5 w-[95%]">
          <Marquee autoFill speed={100}>
            {TechSkills.map((T) => (
              <div key={T.name} className="card cursor-pointer h-auto min-w-[300px] px-5 py-5 my-6 mx-4 flex flex-col items-center justify-center rounded-lg bg-white shadow-md shadow-blue-300">
                <div className='py-5 hover:scale-110 transition-all duration-300 ease-in'>{T.icon}</div>
                <h3 className='text-sm'>{T.name}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  )
}

export default Skills
