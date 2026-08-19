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
  const [activeSection, setActiveSection] = useState("experience");

  return (
    <>
      <Navbar />
      <Hero />

      <div className="switch-container my-10">
        <div className="switches flex items-center justify-around mx-auto py-5">

          <div onClick={() => setActiveSection("experience")} className={`experience ${activeSection === "experience" ? "text-blue-600 scale-110 transition-all duration-300" : ""} flex flex-col gap-1 items-center cursor-pointer relative`}>
            <MdWork size={23} />
            <span className='max-sm:text-xs text-center'>Experience</span>
          </div>

          <div onClick={() => setActiveSection("projects")} className={`projects ${activeSection === "projects" ? "text-blue-600 scale-110 transition-all duration-300" : ""} flex flex-col gap-1 items-center cursor-pointer relative`}>
            <FaGears size={23} />
            <span className='max-sm:text-xs text-center'>Projects</span>
          </div>

          <div onClick={() => setActiveSection("education")} className={`education ${activeSection === "education" ? "text-blue-600 scale-110 transition-all duration-300" : ""} flex flex-col gap-1 items-center cursor-pointer relative`}>
            <IoSchool size={23} />
            <span className='max-sm:text-xs text-center'>Education</span>
          </div>
        </div>

        <div className="content pt-5">
          {
            (() => {
              switch (activeSection) {
                case "experience":
                  return <Experience />;
                case "projects":
                  return <Projects />;
                case "education":
                  return <Education />;
                default:
                  return null;
              }
            })()
          }
        </div>
      </div>

      <hr className="border-0 h-[1px] w-[75%] mx-auto my-10 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      {/* <div className="my-views my-10">
        <h2 className="text-blue-600 text-lg sm:text-xl text-center"> HOW & WHY THIS FIELD ? </h2>

        <div className="px-5 flex justify-center mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg shadow-blue-200 p-6 max-w-5xl">

            <p className="max-sm:text-xs lg:text-lg mb-4">
              Coming from Commerce background I developed interest in IT. First I got introduced to it as a subject but later on, when I started learning about IT deeply in my degree and explored career options, my interest grew in it. Therefore, I decided to choose IT as my career specializing in <span className="font-semibold text-blue-600">Frontend Web Development.</span>
            </p>

            <p className="max-sm:text-xs lg:text-lg">
              <span className="font-semibold text-blue-600">I love to learn and develop new skills</span>. These skills help me explore new options and learn more which inturn may help the company I work in as a whole. Since I believe in exploring new technologies, <span className="font-semibold text-blue-600">I am open to learning which is vital in this industry</span> and <span className="font-semibold text-blue-600">I want to help the company and myself to grow and gain more knowledge and experience.</span> Being able to perform as per the desired requirements and making the company proud with my contributions is my main goal.
            </p>

          </div>
        </div>
      </div> */}

      <div className="my-views relative my-10">

        <div className="my-5 flex flex-col items-center">
          <span className="mb-3 text-xs font-semibold tracking-[0.3em] text-blue-500 uppercase">
            My Journey
          </span>

          <div className="flex items-center gap-4">

            <h2 className="text-center text-xl font-semibold tracking-wide text-blue-600 sm:text-2xl">
              HOW & WHY THIS FIELD?
            </h2>
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl my-4 max-sm:px-4">

          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-blue-100/60 blur-2xl"></div>

          <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-[0_15px_50px_rgba(37,99,235,0.12)]">

            <div className="relative p-6 sm:p-8 lg:p-12">

              <span className="absolute right-6 top-2 select-none text-7xl font-serif leading-none text-blue-100 sm:right-10 sm:top-4 sm:text-9xl">
                “
              </span>

              <div className="relative mb-8">

                <span className="mb-3 block text-xs border-l-2 border-blue-500 pl-3 font-semibold tracking-[0.1em] text-blue-500 uppercase">
                  The Beginning
                </span>

                <p className="text-sm leading-7 text-gray-700 sm:text-base sm:leading-8 lg:text-lg">
                  Coming from Commerce background <span className="font-semibold text-blue-600">I developed interest in IT</span>. First I got introduced to it as a subject but later on, when I started learning about IT deeply in my degree and explored career options, my interest grew in it. Therefore, I decided to choose IT as my career upskilling myself in <span className="font-semibold text-blue-600">Web Development</span>, & specializing in <span className="font-semibold text-blue-600">Frontend & UI side.</span>
                </p>

              </div>

              <div className="relative">

                <span className="mb-3 block text-xs font-semibold border-l-2 border-blue-500 pl-3 tracking-[0.1em] text-blue-500 uppercase">
                  My Approach
                </span>

                <p className="text-sm leading-7 text-gray-700 sm:text-base sm:leading-8 lg:text-lg">
                  <span className="font-semibold text-blue-600">I love to learn, develop new skills & build projects</span>. These skills help me explore new options and learn more which inturn may help the company I work in as a whole. Since I believe in exploring new technologies, <span className="font-semibold text-blue-600">I am open to learning which is vital in this industry</span> and <span className="font-semibold text-blue-600">I want to help the company and myself to grow</span> and gain more knowledge and experience. Being able to perform as per the desired requirements and making the company proud with my contributions is my main goal.
                </p>

              </div>

            </div>
          </div>
        </div>
      </div>

      <Skills />

      <hr className="border-0 h-[1px] w-[75%] mx-auto mt-7 mb-4 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <Footer />
    </>
  )
}

export default App
