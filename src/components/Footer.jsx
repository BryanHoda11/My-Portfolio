import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Footer = () => {
    return (
        <>
            <footer className='h-auto bg-white w-[95%] rounded-lg shadow-md shadow-blue-600 mx-auto px-5 py-5 my-4'>
                <h1 className='text-center text-xl sm:text-2xl text-blue-700'>Thank you for visiting my site!</h1>
                <p className='text-center text-gray-700 opacity-75 py-5 text-sm sm:text-lg'>I hope after this, you came to know about me better and I really appreciate it. 😊</p>

                <div className="contact-info flex flex-col justify-center gap-3 items-center pt-6">
                    <p className='flex flex-col sm:flex-row items-center gap-2 max-sm:text-sm'><span className='flex items-center gap-2'><FaWhatsapp />Contact me on :</span> <span className='font-bold text-blue-600 hover:text-blue-800 underline'>+91 7738345913</span></p>
                    <p className='flex flex-col sm:flex-row items-center gap-2 max-sm:text-sm'><span className='flex items-center gap-2'><CgMail />Gmail me at :</span> <span className='font-bold text-blue-600 hover:text-blue-800 underline'>bryanhoda2003@gmail.com</span></p> 
                </div>
            </footer>
        </>
    )
}

export default Footer
