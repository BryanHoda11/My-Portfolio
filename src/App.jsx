import './App.css'
import { useState } from 'react';
// Imported Images & Components
import Navbar from './components/Navbar'
import MyPicture from '/images/MyPicture.png';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import SW from './components/s-w';
import Education from './components/Education';
import { IoSchool } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { FaGears } from "react-icons/fa6";

// React Libraries & Icons 
import { TypeAnimation } from 'react-type-animation';

function App() {
  const [activeSection, setActiveSection] = useState("education");

  return (
    <>
      <Navbar />

      <div className="intro-container flex flex-col lg:flex-row mt-12 lg:mt-0 justify-center lg:justify-around items-center lg:min-h-[700px] w-full">
        <div className="info flex flex-col items-center lg:items-start gap-3 w-full lg:w-1/2 px-0 sm:px-6">
          <h4 className='text-blue-600 text-md xl:text-lg'>WELCOME TO MY PORTFOLIO</h4>
          <h1 className='text-center text-lg sm:text-2xl xl:text-3xl'>I am a <span className='intro-span'>
            <TypeAnimation
              sequence={[
                'Frontend Web Developer.',
                1000,
              ]}
              wrapper="span"
              speed={50}
              className='font-bold'
              style={{ fontSize: '1em', display: 'inline', fontWeight: 'bold' }}
              repeat={Infinity}
            />
          </span>
          </h1>
          <h2 className='text-xs sm:text-lg md:text-xl text-center lg:text-start max-sm:px-2'>Over here, you will know about my Education, Skills & work done.</h2>
          <button className='bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-sm md:text-lg px-5 py-2 my-3 cursor-pointer hover:from-blue-600 hover:to-blue-500 transition-all duration-200 w-fit'><a className='text-white font-bold' href="https://drive.google.com/file/d/1pqDpvyk-UuHDvClCqk9hAnfuyD6srI-r/view?usp=sharing" target='_blank'>MY RESUME</a></button>
        </div>
        <img className='h-96 w-full sm:w-96 lg:h-[40%] lg:w-[40%] lg:rounded-full py-5 lg:py-0' src={MyPicture} alt="MyPicture" />
      </div>

      <div className="my-views">
        <h2 className='text-blue-600 text-lg sm:text-xl md:pl-12 text-center md:text-start'>HOW & WHY THIS FIELD ?</h2>
        <div className="views-container flex flex-col items-center lg:items-baseline lg:flex-row gap-4 px-3 lg:px-10 py-6">
          <div className="box relative rounded-lg bg-white shadow-lg shadow-blue-300 mx-auto h-auto w-full sm:w-[95%] lg:w-[70%] text-whi px-4 py-4">
            <p className='text-sm lg:text-lg py-3 w-[90%] sm:w-[60%]'>Coming from Commerce background I developed interest in IT. First I got introduced to it as a subject but later on, when I started learning about IT deeply in my degree and explored career options, my interest grew in it. Therefore, I decided to choose IT as my career specializing in <span className='font-bold'>Frontend Web Development.</span></p>

            <p className='text-sm lg:text-lg py-3 w-[90%] sm:w-[60%] sm:ml-auto'><span className='font-bold'>I love to learn and develop new skills</span>. These skills help me explore new options and learn more which inturn may help the company I work in as a whole. Since I believe in exploring new technologies, <span className='font-bold'>I am open to learning which is vital in this industry</span> and want to help the company and myself to grow and gain more knowledge and experience. Being able to perform as per the desired requirements and making the company proud with my contributions is my main goal.</p>
          </div>
        </div>
      </div>

      <div className="switch-container my-10">
        <div className="switches flex items-center justify-around mx-auto pb-5">
          <div onClick={() => setActiveSection("education")} className={`education ${activeSection === "education" ? "text-blue-600" : ""} flex flex-col gap-1 items-center cursor-pointer relative`}>
            <IoSchool size={30} />
            <span className='max-sm:hidden'>Education</span>
          </div>

          <div onClick={() => setActiveSection("experience")} className={`experience ${activeSection === "experience" ? "text-blue-600" : ""} flex flex-col gap-1 items-center cursor-pointer relative`}>
            <MdWork size={30} />
            <span className='max-sm:hidden'>Experience</span>
          </div>
          <div onClick={() => setActiveSection("projects")} className={`projects ${activeSection === "projects" ? "text-blue-600" : ""} flex flex-col gap-1 items-center cursor-pointer relative`}>
            <FaGears size={30} />
            <span className='max-sm:hidden'>Projects</span>
          </div>
        </div>

        <div className="content pt-5">
          {
            (() => {
              switch (activeSection) {
                case "education":
                  return <Education />;
                case "experience":
                  return <Experience />;
                case "projects":
                  return <Projects />;
                default:
                  return null;
              }
            })()
          }
        </div>
      </div>

      <Skills />
      <SW />
      <Footer />
    </>
  )
}

export default App
