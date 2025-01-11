import React from 'react'
import Experience1 from '/images/experience-1.webp'

const Experience = () => {
    return (
        <>
            <div className="experience my-10">
                <h2 className='text-blue-600 text-lg sm:text-xl md:pl-12 text-center md:text-start'>MY EXPERIENCE</h2>

                <div className="experience-container w-full max-sm:px-3 sm:w-[85%] mx-auto py-5 px-3">
                    <div className="internship flex flex-col bg-white sm:flex-row gap-3 mx-auto items-center h-auto min-w-[200px] rounded-lg shadow-md shadow-blue-300 w-fit px-3 py-5">
                        <img className='w-[150px] h-[150px]' src={Experience1} alt="experience-1" />

                        <div className="info flex flex-col sm:px-4 gap-2 sm:border-l sm:border-blue-500 ">
                            <h2 className='text-blue-500 text-xl pb-3 max-sm:pt-3 font-semibold'>Internship</h2>
                            <ul className='flex flex-col gap-2 max-sm:text-sm'>
                                <li>Company : Tellis Technologies Pvt. Ltd.</li>
                                <li>Role : Frontend Developer</li>
                                <li>Period : Nov 2024 - Present</li>
                                <li>Type of Work : Work From Home (Remote)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience
