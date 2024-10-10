import { useState } from 'react'
import './App.css'
// Imported Images & Components
import Navbar from './components/Navbar'
import MyPicture from './images/MyPicture.png';
import StMarys from './images/StMarys.png';
import GyanKendra from './images/gyankendra.png';
import ClaraCollege from './images/ClaraCollege.png'
import Footer from './components/Footer';

// React Libraries & Icons 
import { TypeAnimation } from 'react-type-animation';
import Marquee from "react-fast-marquee";
import { FaSchool } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

function App() {

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
      icon: <SiAdobeillustrator className='text-amber-900' style={{ fontSize: '80px' }} />,
      name: 'Adobe Illustrator (Ai)'
    },

  ]

  return (
    <>
      <Navbar />
      <div className="intro-container flex flex-col lg:flex-row mt-12 lg:mt-0 justify-center lg:justify-around items-center lg:min-h-[85vh] w-full">
        <div className="info flex flex-col items-center lg:items-start gap-3 w-full lg:w-[40%] px-6">
          <h4 className='text-blue-600 text-md md:text-lg'>THIS IS MY PORTFOLIO</h4>
          <h1 className='text-lg sm:text-xl md:text-3xl'>I am a <span className='intro-span'>
            <TypeAnimation
              sequence={[
                'Frontend Web Developer.',
                1000,
                'Logo & Package Designer.',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className='font-bold'
              style={{ fontSize: '1em', display: 'inline', fontWeight: 'bold' }}
              repeat={Infinity}
            />
          </span>
          </h1>
          <h2 className='text-sm sm:text-lg md:text-xl text-center lg:text-start'>In this website, you will know about my Education, Skills & personal Projects closely.</h2>
          <button className='bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg px-2 py-2 my-3 cursor-pointer hover:from-blue-600 hover:to-blue-500 transition-all duration-200 w-[85%] sm:w-1/2 lg:w-[35%]'><a className='text-white font-bold' href="https://documentcloud.adobe.com/gsuiteintegration/index.html?state=%7B%22ids%22%3A%5B%221KdR_ClSKI9P6Jpj2Tn27aQWmaiwQ8GYy%22%5D%2C%22action%22%3A%22open%22%2C%22userId%22%3A%22109536557876944904708%22%2C%22resourceKeys%22%3A%7B%7D%7D" target='_blank'>MY RESUME</a></button>
        </div>
        <img className='h-96 lg:h-[40%] w-96 lg:w-[40%] rounded-lg lg:rounded-full py-5 lg:py-0' src={MyPicture} alt="MyPicture" />
      </div>

      <div className="education-container">
        <h2 className='text-blue-600 text-xl px-12 py-7 text-center md:text-start'>MY EDUCATION</h2>

        <div className="school flex flex-col-reverse lg:flex-row items-center justify-around my-6">
          <img className='h-96 w-96 rounded-lg lg:rounded-full' src={StMarys} alt="School" />
          <div className="school-info w-full px-5 lg:px-0 lg:w-1/2">
            <h1 className='text-blue-700 font-semibold text-lg sm:text-xl flex flex-col sm:flex-row sm:items-center gap-3'><span className='flex items-center gap-3'><FaSchool />School</span> <span className='opacity-70 sm:px-4 text-xs sm:text-sm'>Completed year (2019)</span></h1>
            <div className="flex flex-col py-5 gap-3">
              <h3 className='sm:text-lg pb-4'>St. Mary's High School</h3>
              <p className='text-sm'>I passed out this English convent school based in 4 Bungalows Mhada Lane Andheri West. I was in this school right from Jr.Kg all the way to STD. X ICSE board. It was a fun experience, got to learn and grow. What I am today a part of that my school plays a role.❤️</p>
              <p className='text-sm'>School's website - <a href='http://stmarysandheri.org/index.html' target='_blank' className='underline text-blue-700 cursor-pointer'>http://stmarysandheri.org/index.html</a></p>
              <p className='pt-7 text-center sm:text-start'>STD. X Percentage - <span className='font-bold'>82%</span></p>
            </div>
          </div>
        </div>

        <div className="jrcollege flex flex-col lg:flex-row items-center justify-around my-12">
          <div className="jrcollege-info w-full px-5 lg:px-0 lg:w-1/2">
            <h1 className='text-blue-700 font-semibold text-lg sm:text-xl flex flex-col sm:flex-row sm:items-center gap-3'><span className='flex items-center gap-3'><FaBook />Jr. College</span> <span className='opacity-70 sm:px-4 text-xs sm:text-sm'>Completed year (2021)</span></h1>
            <div className="flex flex-col py-5 gap-3">
              <h3 className='sm:text-lg pb-4'>Gyan Kendra - Prof. Ramnath Pandey Jr College of Commerce & Science</h3>
              <p className='text-sm'>Unfortunately couldn't experience both my years of Jr College but none the less helped me excel and even though my 12th exam got cancelled due to COVID 19, my X & XI average marks helped me pass ( I personally wanted to give the exam manually ).</p>
              <p className='text-sm'>College's website - <a href='https://gyankendra.org/?p=293' target='_blank' className='underline text-blue-700 cursor-pointer'>https://gyankendra.org/?p=293</a></p>
              <p className='pt-7 text-center sm:text-start'>STD. XII Percentage - <span className='font-bold'>80%</span></p>
            </div>
          </div>
          <img className='h-96 w-96 rounded-lg lg:rounded-full' src={GyanKendra} alt="Jr college" />
        </div>

        <div className="graduation flex flex-col-reverse lg:flex-row items-center justify-around my-12">
          <img className='h-96 w-96 rounded-lg lg:rounded-full' src={ClaraCollege} alt="Graduation" />
          <div className="graduation-info w-full px-5 lg:px-0 lg:w-1/2">
            <h1 className='text-blue-700 font-semibold text-lg sm:text-xl flex flex-col sm:flex-row sm:items-center gap-3'><span className='flex items-center gap-3'><PiStudentFill />Graduation</span> <span className='opacity-70 sm:px-4 text-xs sm:text-sm'>Completed year (2024)</span></h1>
            <div className="flex flex-col py-5 gap-3">
              <h3 className='sm:text-lg pb-4'> Children Welfare Clara's College of Commerce</h3>
              <p className='text-sm'>I persued my B.COM through this college located in Yari Road, Versova, Andheri West. My overall experience throughout my 3 years was really fun. Learnt a lot of new things, met new people & gathered a ton of real world knowledge! I was thrilled and excited as <span className='font-bold'>I topped my college in 4 out of the total 6 semesters</span>, which was a big morale booster for me. Grateful to this college for where I am today.❤️</p>
              <p className='text-sm'>College's website - <a href='https://clarascollegeofcommerce.edu.in/' target='_blank' className='underline text-blue-700 cursor-pointer'>https://clarascollegeofcommerce.edu.in/</a></p>
              <p className='pt-7 text-center sm:text-start'>Graduation CGPA - <span className='text-red-600 text-xs sm:text-sm'>Note* : I haven't yet recieved my marksheet from university. <span className='font-bold'>I have no backlogs.</span> Will update this as soon as I get my result.</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-views">
        <h2 className='text-blue-600 text-xl px-12 text-center md:text-start'>HOW & WHY THIS FIELD ?</h2>
        <div className="views-container flex flex-col items-center lg:items-baseline lg:flex-row gap-4 px-3 lg:px-10 py-6">
          <div className="box relative rounded-lg bg-white shadow-lg shadow-blue-300 mx-auto h-auto w-full sm:w-[95%] lg:w-[70%] text-whi px-4 py-4">
            <p className='text-sm lg:text-lg py-3 w-[90%] sm:w-[60%]'>Coming from Commerce background I developed interest in IT. First I got introduced to it as a subject but later on, when I started learning about IT deeply in my degree and explored career options, my interest grew in it. Therefore, I decided to choose IT as my career specializing in <span className='font-bold'>Frontend Web Development & Graphic Designing.</span></p>

            <p className='text-sm lg:text-lg py-3 w-[90%] sm:w-[60%] sm:ml-auto'><span className='font-bold'>I love to learn and develop new skills</span>. These skills help me explore new options and learn more which inturn may help the company I work in as a whole. Since I believe in exploring new technologies, <span className='font-bold'>I am open to learning which is vital in this industry</span> and want to help the company and myself to grow and gain more knowledge and experience. Being able to perform as per the desired requirements and making the company proud with my contributions is my main goal.</p>
          </div>
        </div>
      </div>

      <div className="skills my-10">
        <h2 className='text-blue-600 text-xl px-12 text-center md:text-start'>MY SKILLS</h2>

        <div className="skills-container flex mx-auto items-center gap-4 my-8 py-5 w-[95%]">
          <Marquee autoFill speed={100}>
            {TechSkills.map((T) => (
              <div key={T.name} className="card cursor-pointer h-auto min-w-[350px] px-5 py-5 my-6 mx-4 flex flex-col items-center justify-center rounded-lg bg-white shadow-md shadow-blue-300">
                <div className='py-5 hover:scale-110 transition-all duration-300 ease-in'>{T.icon}</div>
                <h3 className='text-sm'>{T.name}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      <div className="projects my-10">
        <h2 className='text-blue-600 text-xl px-12 text-center md:text-start'>MY PERSONAL PROJECTS</h2>

        <div className="projects-container flex flex-col justify-center px-8 py-8">
          <ul className='html-css flex items-center gap-5 py-5 overflow-x-scroll'>
            <li className='flex flex-col justify-center gap-3 mx-5 my-5 h-auto min-w-[350px]'>
              <h2 className='text-xl font-bold'>1. Sports Website</h2>
              <h4 className='flex items-center gap-4'><FaGithub /><a href="https://github.com/BryanHoda11/Sports-webpage" target='_blank' className='underline flex items-center gap-2 text-blue-700 hover:text-blue-800 cursor-pointer'>GitHub Link<FaExternalLinkAlt style={{fontSize:'9px'}}/></a></h4>
              <p className='text-blue-800 text-sm opacity-60'>Tehnologies used : HTML | CSS</p>
            </li>
            <li className='flex flex-col justify-center gap-3 mx-5 my-5 h-auto min-w-[350px]'>
              <h2 className='text-xl font-bold'>2. Food Website</h2>
              <h4 className='flex items-center gap-4'><FaGithub /><a href="https://github.com/BryanHoda11/Food-webpage" target='_blank' className='underline flex items-center gap-2 text-blue-700 hover:text-blue-800 cursor-pointer'>GitHub Link<FaExternalLinkAlt style={{fontSize:'9px'}}/></a></h4>
              <p className='text-blue-800 text-sm opacity-60'>Tehnologies used : HTML | CSS</p>
            </li>
            <li className='flex flex-col justify-center gap-3 mx-5 my-5 h-auto min-w-[350px]'>
              <h2 className='text-xl font-bold'>3. Child Donation Website</h2>
              <h4 className='flex items-center gap-4'><FaGithub /><a href="https://github.com/BryanHoda11/Child-Donation-webpage" target='_blank' className='underline flex items-center gap-2 text-blue-700 hover:text-blue-800 cursor-pointer'>GitHub Link<FaExternalLinkAlt style={{fontSize:'9px'}}/></a></h4>
              <p className='text-blue-800 text-sm opacity-60'>Tehnologies used : HTML | CSS</p>
            </li>
          </ul>

          <ul className='html-css-js flex items-center gap-5 py-5 overflow-x-scroll'>
            <li className='flex flex-col justify-center gap-3 mx-5 my-5 h-auto min-w-[350px]'>
              <h2 className='text-xl font-bold'>4. Spotify Music Player Clone</h2>
              <h4 className='flex items-center gap-4'><FaGithub /><a href="https://github.com/BryanHoda11/Spotify-Clone" target='_blank' className='underline flex items-center gap-2 text-blue-700 hover:text-blue-800 cursor-pointer'>GitHub Link<FaExternalLinkAlt style={{fontSize:'9px'}}/></a></h4>
              <p className='text-blue-800 text-sm opacity-60'>Tehnologies used : HTML | CSS | JS</p>
            </li>
            <li className='flex flex-col justify-center gap-3 mx-5 my-5 h-auto min-w-[350px]'>
              <h2 className='text-xl font-bold'>5. NovaShock Energy Drink Website</h2>
              <h4 className='flex items-center gap-4'><FaGithub /><a href="https://github.com/BryanHoda11/NovaShock-Energy-Drink" target='_blank' className='underline flex items-center gap-2 text-blue-700 hover:text-blue-800 cursor-pointer'>GitHub Link<FaExternalLinkAlt style={{fontSize:'9px'}}/></a></h4>
              <p className='text-blue-800 text-sm opacity-60'>Tehnologies used : HTML | Tailwind CSS | JS</p>
            </li>
            <li className='flex flex-col justify-center gap-3 mx-5 my-5 h-auto min-w-[350px]'>
              <h2 className='text-xl font-bold'>6. ToDo App (JS)</h2>
              <h4 className='flex items-center gap-4'><FaGithub /><a href="https://github.com/BryanHoda11/ToDo-App-JS" target='_blank' className='underline flex items-center gap-2 text-blue-700 hover:text-blue-800 cursor-pointer'>GitHub Link<FaExternalLinkAlt style={{fontSize:'9px'}}/></a></h4>
              <p className='text-blue-800 text-sm opacity-60'>Tehnologies used : HTML | CSS | JS</p>
              <p className='text-red-600 text-sm opacity-80'>Note* : Faced some technical issues here with Tailwind</p>
            </li>
          </ul>

          <ul className='React-Tailwind flex items-center gap-5 py-5 overflow-x-scroll'>
            <li className='flex flex-col justify-center gap-3 mx-5 my-5 h-auto min-w-[350px]'>
              <h2 className='text-xl font-bold'>7. ToDo App (React JS)</h2>
              <h4 className='flex items-center gap-4'><FaGithub /><a href="https://github.com/BryanHoda11/ToDo-App-React-JS" target='_blank' className='underline flex items-center gap-2 text-blue-700 hover:text-blue-800 cursor-pointer'>GitHub Link<FaExternalLinkAlt style={{fontSize:'9px'}}/></a></h4>
              <p className='text-blue-800 text-sm opacity-60'>Tehnologies used : React JS | Tailwind CSS</p>
              <p className='text-blue-800 text-sm opacity-60'>Libraries used : React Icons | React Toastify</p>
            </li>
            <li className='flex flex-col justify-center gap-3 mx-5 my-5 h-auto min-w-[350px]'>
              <h2 className='text-xl font-bold'>8. FitFusion Gym Website</h2>
              <h4 className='flex items-center gap-4'><FaGithub /><a href="https://github.com/BryanHoda11/FitFusion-Gym-Website" target='_blank' className='underline flex items-center gap-2 text-blue-700 hover:text-blue-800 cursor-pointer'>GitHub Link<FaExternalLinkAlt style={{fontSize:'9px'}}/></a></h4>
              <p className='text-blue-800 text-sm opacity-60'>Tehnologies used : React JS | Tailwind CSS</p>
              <p className='text-blue-800 text-sm opacity-60'>Libraries used : React Icons | React Router Dom</p>
            </li>
            <li className='flex flex-col justify-center gap-3 mx-5 my-5 h-auto min-w-[350px]'>
              <h2 className='text-xl font-bold'>9. OnePlus Redesigned Version</h2>
              <h4 className='flex items-center gap-4'><FaGithub /><a href="https://github.com/BryanHoda11/OnePlus-Redesign-Version" target='_blank' className='underline flex items-center gap-2 text-blue-700 hover:text-blue-800 cursor-pointer'>GitHub Link<FaExternalLinkAlt style={{fontSize:'9px'}}/></a></h4>
              <p className='text-blue-800 text-sm opacity-60'>Tehnologies used : React JS | Tailwind CSS</p>
              <p className='text-blue-800 text-sm opacity-60'>Libraries used : React Icons | React Router Dom | Framer Motion</p>
            </li>
          </ul>

          <ul className='Next-Tailwind flex items-center gap-5 py-5 overflow-x-scroll lg:overflow-hidden'>
            <li className='flex flex-col justify-center gap-3 mx-5 my-5 h-auto min-w-[350px]'>
              <h2 className='text-xl font-bold'>10. Frontend Hub</h2>
              <h4 className='flex items-center gap-4'><FaGithub /><a href="https://github.com/BryanHoda11/Frontend-Hub" target='_blank' className='underline flex items-center gap-2 text-blue-700 hover:text-blue-800 cursor-pointer'>GitHub Link<FaExternalLinkAlt style={{fontSize:'9px'}}/></a></h4>
              <p className='text-blue-800 text-sm opacity-60'>Tehnologies used : Next.js | Tailwind CSS</p>
              <p className='text-blue-800 text-sm opacity-60'>Libraries used : NextAuth.js</p>
            </li>
            <li className='flex flex-col justify-center gap-3 mx-5 my-5 h-auto min-w-[350px]'>
              <h2 className='text-xl font-bold'>11. Logitech-G Clone Website</h2>
              <h4 className='flex items-center gap-4'><FaGithub /><a href="https://github.com/BryanHoda11/Logitech-G-Website" target='_blank' className='underline flex items-center gap-2 text-blue-700 hover:text-blue-800 cursor-pointer'>GitHub Link<FaExternalLinkAlt style={{fontSize:'9px'}}/></a></h4>
              <p className='text-blue-800 text-sm opacity-60'>Tehnologies used : Next.js | Tailwind CSS</p>
              <p className='text-blue-800 text-sm opacity-60'>Libraries used : NextAuth.js</p>
            </li>
            <li className='flex flex-col justify-center gap-3 mx-5 my-5 h-auto min-w-[350px]'>
              <h2 className='text-xl font-bold'>12. Portfolio Website</h2>
              <h4 className='flex items-center gap-4'><FaGithub /><a href="https://github.com/BryanHoda11/My-Portfolio" target='_blank' className='underline flex items-center gap-2 text-blue-700 hover:text-blue-800 cursor-pointer'>GitHub Link<FaExternalLinkAlt style={{fontSize:'9px'}}/></a></h4>
              <p className='text-blue-800 text-sm opacity-60'>Tehnologies used : React JS | Tailwind CSS | Vanilla CSS</p>
              <p className='text-blue-800 text-sm opacity-60'>Libraries used : React Icons | React Fast Marquee</p>
            </li>
          </ul>
        </div>
        
      </div>

      <div className="strengths-weakness my-10">
        <h2 className='text-blue-600 text-xl px-12 py-7 text-center md:text-start'>NOW NO ONE IS PERFECT, SO HERE ARE MY :</h2>
        <div className="trengths-weakness-container flex flex-col items-center lg:items-baseline lg:flex-row gap-4 px-3 lg:px-10 py-6">
          <div className="box relative mx-4 flex flex-col bg-blue-600 hover:scale-105 transition-all duration-700 cursor-default h-auto w-full sm:w-[95%] lg:w-1/2 text-white rounded-lg px-4 py-4">
            <h3 className='font-bold flex gap-3 items-center justify-center'>STRENGHTS <span className='font-bold text-2xl'>&uarr;</span></h3>
            <ul className='flex flex-col gap-5 pl-5 pt-4 text-sm lg:text-lg list-disc'>
              <li>Worked with variety of technologies & libraries in my projects.</li>
              <li>I create good & efficient reusable UI components with React JS for websites & web applications with responsive design.</li>
              <li>Clean & maintainable code. Easy on the eyes to read.</li>
              <li>Good at debugging issues / problems.</li>
            </ul>
          </div>

          <div className="box relative mx-4 flex flex-col bg-blue-800 hover:scale-95 transition-all duration-700 cursor-default h-auto w-full sm:w-[95%] lg:w-1/2 text-white rounded-lg px-4 py-4">
            <h3 className='font-bold flex gap-3 items-center justify-center'>WEAKNESSES<span className='font-bold text-2xl'>&darr;</span></h3>
            <ul className='flex flex-col gap-5 pl-5 pt-4 text-sm lg:text-lg list-disc'>
              <li>Need more practice with API integration from Backend to Frontend.</li>
              <li>Not strong with Server Side Rendering (SSR).</li>
              <li>Heavily focussed on UI development rather than functional development.</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
