import './App.css'
import { useState } from 'react';

// Imported Images & Components
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import { IoSchool } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { FaGears } from "react-icons/fa6";

function App() {
  const [activeSection, setActiveSection] = useState("education");

  return (
    <>
      <Navbar />
      <Hero />

      <div className="my-views my-10">
        <h2 className='text-blue-600 text-lg sm:text-xl md:pl-12 text-center'>HOW & WHY THIS FIELD ?</h2>
        <div className="views-container flex flex-col items-center lg:items-baseline lg:flex-row gap-4 px-3 lg:px-10 py-5">
          <div className="box relative rounded-lg bg-white shadow-lg shadow-blue-300 mx-auto h-auto w-full sm:w-[95%] lg:w-[70%] text-whi px-4 py-4">
            <p className='text-sm lg:text-lg py-3 w-[90%] sm:w-[60%]'>Coming from Commerce background I developed interest in IT. First I got introduced to it as a subject but later on, when I started learning about IT deeply in my degree and explored career options, my interest grew in it. Therefore, I decided to choose IT as my career specializing in <span className='font-bold'>Frontend Web Development.</span></p>

            <p className='text-sm lg:text-lg py-3 w-[90%] sm:w-[60%] sm:ml-auto'><span className='font-bold'>I love to learn and develop new skills</span>. These skills help me explore new options and learn more which inturn may help the company I work in as a whole. Since I believe in exploring new technologies, <span className='font-bold'>I am open to learning which is vital in this industry</span> and want to help the company and myself to grow and gain more knowledge and experience. Being able to perform as per the desired requirements and making the company proud with my contributions is my main goal.</p>
          </div>
        </div>
      </div>

      <div className="switch-container my-10">
        <div className="switches flex items-center justify-around mx-auto py-5">
          <div onClick={() => setActiveSection("education")} className={`education ${activeSection === "education" ? "text-blue-600 scale-110 transition-all duration-300" : ""} flex flex-col gap-1 items-center cursor-pointer relative`}>
            <IoSchool size={30} />
            <span className='max-sm:text-xs text-center'>Education</span>
          </div>

          <div onClick={() => setActiveSection("experience")} className={`experience ${activeSection === "experience" ? "text-blue-600 scale-110 transition-all duration-300" : ""} flex flex-col gap-1 items-center cursor-pointer relative`}>
            <MdWork size={30} />
            <span className='max-sm:text-xs text-center'>Experience</span>
          </div>

          <div onClick={() => setActiveSection("projects")} className={`projects ${activeSection === "projects" ? "text-blue-600 scale-110 transition-all duration-300" : ""} flex flex-col gap-1 items-center cursor-pointer relative`}>
            <FaGears size={30} />
            <span className='max-sm:text-xs text-center'>Projects</span>
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
      <Footer />
    </>
  )
}

export default App
