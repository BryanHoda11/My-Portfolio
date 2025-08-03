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
      name: 'HTML'
    },
    {
      icon: <FaCss3Alt className='text-blue-500' style={{ fontSize: '80px' }} />,
      name: 'CSS'
    },
    {
      icon: <FaJs className='text-yellow-400' style={{ fontSize: '80px' }} />,
      name: 'JavaScript (JS)'
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
      icon: <RiTailwindCssFill className='text-blue-600' style={{ fontSize: '80px' }} />,
      name: 'Tailwind CSS'
    },
    {
      icon: <FaBootstrap className='text-purple-600' style={{ fontSize: '80px' }} />,
      name: 'Bootstrap'
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
        <h2 className='text-blue-600 text-lg sm:text-xl md:pl-12 text-center'>TECHNOLOGIES</h2>

        <div className="flex flex-wrap w-[90%] mx-auto max-md:hidden gap-7 justify-center px-6 py-6">
          {TechSkills.map((T) => (
            <div key={T.name} className="card w-fit flex items-center gap-2 px-6 py-4 rounded-lg hover:scale-105 bg-white shadow-md shadow-blue-300 transition-all duration-300">
              <span>{T.icon}</span>
              <span>{T.name}</span>
            </div>
          ))}
        </div>

        <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 px-4 py-8">
          {TechSkills.map((T) => (
            <div key={T.name} className="card cursor-pointer h-auto px-5 py-6 flex flex-col items-center justify-center rounded-lg hover:scale-105 bg-white shadow-md shadow-blue-300 transition-all duration-300">
              <div className="py-4 text-3xl">{T.icon}</div>
              <h3 className="text-sm font-medium text-center">{T.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills
