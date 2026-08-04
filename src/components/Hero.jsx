import MyPicture from '/images/MyPicture.webp';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <>
      <div className="intro-container flex flex-col lg:flex-row max-lg:mt-7 justify-center lg:justify-center items-center lg:min-h-[700px] w-full">
        {/* <div className="info flex flex-col items-center lg:items-start justify-center gap-3 w-full lg:w-1/2 px-0 sm:px-6">
          <h4 className='text-blue-700 text-xs sm:text-sm md:text-lg'>WELCOME TO MY PORTFOLIO!</h4>
          <h1 className='text-center text-lg sm:text-2xl lg:text-3xl'>I am a <span className='intro-span'>
            <TypeAnimation sequence={[
              'Frontend Developer.',
              1000,
            ]}
              wrapper="span"
              speed={50}
              className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800' style={{ fontSize: '1em', display: 'inline', fontWeight: 'bold' }}
              repeat={Infinity} />
          </span>
          </h1>
          <h2 className='text-xs sm:text-lg md:text-xl text-center lg:text-start'>Know about my Education, Skills & Work!</h2>
          <button className='resume-btn animate-gradient bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-sm md:text-lg px-5 py-2 my-3 cursor-pointer hover:from-blue-600 hover:to-blue-500 transition-all duration-200 w-fit'>
            <a className='text-white fon' href="https://drive.google.com/file/d/1CLeIGo43_LvK3u_OSYjZBo8oEEiGOKFd/view?usp=sharing" target='_blank'>MY RESUME</a>
          </button>
        </div> */}

        <div className="info flex flex-col items-center lg:items-start justify-center gap-5 w-full lg:w-1/2 px-4 sm:px-8">

          {/* Small Intro Tag */}
          <h4 className="text-blue-700 text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider"> WELCOME TO MY PORTFOLIO! </h4>

          {/* Main Heading */}
          <div className="space-y-2">

            <h2 className="text-center lg:text-left text-xl sm:text-3xl lg:text-4xl font-semibold text-gray-700">
              I am a{" "}
              <span className="inline-block min-w-[180px] sm:min-w-[260px]">
                <TypeAnimation
                  sequence={[
                    "Frontend Developer.",
                    1500,
                  ]}
                  wrapper="span" speed={50} repeat={Infinity} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800" />
              </span>
            </h2>
          </div>

          <p className="text-center lg:text-left text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
            Passionate about creating modern, responsive and interactive web experiences & UI. Explore my Education, Technical skills and Projects.
          </p>

          <a href="https://drive.google.com/file/d/1MBE0Jx39ML_pYR_ppKpfKyLF2ZwfyZnE/view?usp=sharing" target="_blank" className="group">
            <button className="resume-btn relative overflow-hidden rounded-xl px-6 sm:px-7 py-3 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg hover:shadow-blue-300/50 transition-all duration-300 cursor-pointer">
              <span className="relative z-10">View Resume</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-400 to-blue-600 blur-xl transition-all duration-500"></div>
            </button>
          </a>

        </div>
        <img className='h-auto max-w-xs sm:w-96 lg:max-w-md xl:max-w-lg rounded-lg py-5 lg:py-0 object-cover' src={MyPicture} alt="MyPicture" />
      </div>
    </>
  )
}

export default Hero
