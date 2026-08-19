import MyPicture from '/images/MyPicture.webp';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <>
      <div className="intro-container flex flex-col lg:flex-row max-lg:mt-7 justify-center lg:justify-center items-center lg:min-h-[700px] w-full">
        <div className="info flex flex-col items-center lg:items-start justify-center gap-5 w-full lg:w-1/2 px-4 sm:px-8">
          <h4 className="text-blue-700 text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider"> WELCOME TO MY PORTFOLIO! </h4>
          
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
            Passionate about creating modern, responsive and interactive web experiences & UI. Explore my Education, Technical skills and Projects!
          </p>

          <a href="https://drive.google.com/file/d/12usZ898hPasg3E6A6dbcHBfLl57xBNCP/view?usp=sharing" target="_blank" className="group">
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
