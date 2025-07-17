import React from 'react'
import StMarys from '/images/StMarys.png';
import GyanKendra from '/images/gyankendra.png';
import ClaraCollege from '/images/ClaraCollege.png'
import { FaSchool } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";

const Education = () => {
    return (
        <>
            <div className="education-container">
                {/* <h2 className='text-blue-600 text-lg sm:text-xl md:pl-12 py-7 text-center md:text-start'>MY EDUCATION</h2> */}

                <div className="school flex flex-col-reverse lg:flex-row items-center justify-around">
                    <img className='h-80 w-full sm:h-96 sm:w-96 sm:rounded-full' src={StMarys} alt="School" />
                    <div className="school-info w-full px-3 lg:px-0 lg:w-1/2">
                        <h1 className='font-semibold text-lg sm:text-xl flex flex-col sm:flex-row sm:items-center gap-3'><span className='flex items-center gap-3'><FaSchool />School</span> <span className='opacity-70 sm:px-4 text-xs sm:text-sm'>Completed year (2019)</span></h1>
                        <div className="flex flex-col py-5 gap-3">
                            <h3 className='sm:text-lg pb-4'>St. Mary's High School</h3>
                            <p className='text-sm'>I passed out this English convent school based in 4 Bungalows Mhada Lane Andheri West. I was in this school right from Jr.Kg all the way to STD. X ICSE board. It was a fun experience, got to learn and grow. What I am today a part of that my school plays a role.❤️</p>
                            <p className='text-sm'>School's website - <a href='http://stmarysandheri.org/index.html' target='_blank' className='underline text-blue-700 cursor-pointer'>http://stmarysandheri.org/index.html</a></p>
                            <p className='pt-7 text-start'>STD. X Percentage - <span className='font-bold'>83%</span></p>
                        </div>
                    </div>
                </div>

                <div className="jrcollege flex flex-col lg:flex-row items-center justify-around my-12">
                    <div className="jrcollege-info w-full px-3 lg:px-0 lg:w-1/2">
                        <h1 className='font-semibold text-lg sm:text-xl flex flex-col sm:flex-row sm:items-center gap-3'><span className='flex items-center gap-3'><FaBook />Jr. College</span> <span className='opacity-70 sm:px-4 text-xs sm:text-sm'>Completed year (2021)</span></h1>
                        <div className="flex flex-col py-5 gap-3">
                            <h3 className='sm:text-lg pb-4'>Gyan Kendra - Prof. Ramnath Pandey Jr College of Commerce & Science</h3>
                            <p className='text-sm'>Unfortunately couldn't experience both my years of Jr College but none the less helped me excel and even though my 12th exam got cancelled due to COVID 19, my X & XI average marks helped me pass ( I personally wanted to give the exam manually ).</p>
                            <p className='text-sm'>College's website - <a href='https://gyankendra.org/?p=293' target='_blank' className='underline text-blue-700 cursor-pointer'>https://gyankendra.org/?p=293</a></p>
                            <p className='pt-7 text-start'>STD. XII Percentage - <span className='font-bold'>80%</span></p>
                        </div>
                    </div>
                    <img className='h-80 w-full sm:h-96 sm:w-96 sm:rounded-full' src={GyanKendra} alt="Jr college" />
                </div>

                <div className="graduation flex flex-col-reverse lg:flex-row items-center justify-around my-12">
                    <img className='h-80 w-full sm:h-96 sm:w-96 sm:rounded-full' src={ClaraCollege} alt="Graduation" />
                    <div className="graduation-info w-full px-3 lg:px-0 lg:w-1/2">
                        <h1 className='font-semibold text-lg sm:text-xl flex flex-col sm:flex-row sm:items-center gap-3'><span className='flex items-center gap-3'><PiStudentFill />Graduation</span> <span className='opacity-70 sm:px-4 text-xs sm:text-sm'>Completed year (2024)</span></h1>
                        <div className="flex flex-col py-5 gap-3">
                            <h3 className='sm:text-lg pb-4'> Children Welfare Clara's College of Commerce</h3>
                            <p className='text-sm'>I persued my B.COM through this college located in Yari Road, Versova, Andheri West. My overall experience throughout my 3 years was really fun. Learnt a lot of new things, met new people & gathered a ton of real world knowledge! I was thrilled and excited as <span className='font-bold'>I topped my college in 4 out of the total 6 semesters</span>, which was a big morale booster for me. Grateful to this college for where I am today.❤️</p>
                            <p className='text-sm'>College's website - <a href='https://clarascollegeofcommerce.edu.in/' target='_blank' className='underline text-blue-700 cursor-pointer'>https://clarascollegeofcommerce.edu.in/</a></p>
                            <p className='pt-7 text-start'>Graduation CGPA - <span className='font-bold'>8.20</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education
