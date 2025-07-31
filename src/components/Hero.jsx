import MyPicture from '/images/MyPicture.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <>
      <div className="intro-container flex flex-col lg:flex-row max-lg:mt-7 justify-center lg:justify-around items-center lg:min-h-[700px] w-full">
        <div className="info flex flex-col items-center lg:items-start gap-3 w-full lg:w-1/2 px-0 sm:px-6">
          <h4 className='text-blue-600 text-md xl:text-lg'>WELCOME TO MY PORTFOLIO</h4>
          <h1 className='text-center text-lg sm:text-2xl xl:text-3xl'>I am a <span className='intro-span'>
            <TypeAnimation
              sequence={[
                'Frontend Developer.',
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
    </>
  )
}

export default Hero
