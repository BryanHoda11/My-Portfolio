import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className='h-auto bg-white w-[95%] rounded-lg shadow-md shadow-blue-600 mx-auto px-3 sm:px-5 py-5 my-4'>
                <h1 className='text-center text-lg md:text-xl sm:text-2xl text-blue-700'>Thank you for visiting my site!</h1>
                <p className='text-center text-gray-700 opacity-75 py-5 text-sm sm:text-lg'>I hope after this, you came to know about me and I really appreciate it. Feel free to get in touch!</p>

                <div className="contact-info flex flex-col justify-center gap-3 items-center pt-6">
                    <p className='flex items-center gap-2 max-sm:text-xs'><span className='flex items-center gap-2'><FaWhatsapp />Contact No :</span> <a href='tel:+917738345913' className='font-semibold cursor-pointer text-blue-600 hover:text-blue-800 underline'>+91 7738345913</a></p>
                    <p className='flex items-center gap-2 max-sm:text-xs'><span className='flex items-center gap-2'><CgMail />Gmail :</span> <a href='mailto:bryanhoda2003@gmail.com' className='font-semibold cursor-pointer text-blue-600 hover:text-blue-800 underline'>bryanhoda2003@gmail.com</a></p> 
                </div>
            </footer>
        </>
    )
}

export default Footer
