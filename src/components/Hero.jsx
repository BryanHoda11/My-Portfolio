import MyPicture from '/images/MyPicture.webp';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <>
      <div className="intro-container flex flex-col lg:flex-row max-lg:mt-7 justify-center lg:justify-around items-center lg:min-h-[700px] w-full">
        <div className="info flex flex-col items-center lg:items-start justify-center gap-3 w-full lg:w-1/2 px-0 sm:px-6">
          <h4 className='text-blue-700 text-xs sm:text-sm md:text-lg'>WELCOME TO MY PORTFOLIO</h4>
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
          <h2 className='text-xs sm:text-lg md:text-xl text-center lg:text-start max-sm:px-2'>Over here, you will know about my Education, Skills & work done.</h2>
          <button className='bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-sm md:text-lg px-5 py-2 my-3 cursor-pointer hover:from-blue-600 hover:to-blue-500 transition-all duration-200 w-fit'>
            <a className='text-white font-bold' href="https://drive.google.com/file/d/1CLeIGo43_LvK3u_OSYjZBo8oEEiGOKFd/view?usp=sharing" target='_blank'>MY RESUME</a>
          </button>
        </div>
        <img className='h-auto max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg py-5 lg:py-0 object-cover' src={MyPicture} alt="MyPicture" />
      </div>
    </>
  )
}

export default Hero
