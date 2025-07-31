import React, { useState } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Navbar = () => {
const [link, setlink] = useState(false);

    return (
        <>
            <nav className='sticky top-0 w-full bg-white z-50'>
              <div className='flex items-center justify-between md:px-5 py-4 shadow-md shadow-blue-200'>
                <div className="logo cursor-default text-blue-500 font-bold logo-font text-lg sm:text-xl flex flex-col md:flex-row items-center">Hi, This is Bryan <span className='flex items-center text-xs sm:text-sm gap-2 text-gray-800 opacity-80 px-6 pt-1 md:pt-0'><IoLocationSharp style={{fontSize: '18px'}}/> Mumbai , Maharashtra - India</span></div> 

                <div className='links hidden lg:flex items-center gap-10'>
                  <a href='https://github.com/BryanHoda11' target='_blank' rel='noopener noreferrer' className='cursor-pointer text-gray-600 hover:text-blue-500 transition-all duration-500'><FaGithub style={{fontSize: '20px'}}/></a>
                  <a href='https://www.linkedin.com/in/bryan-hoda-b079452b2/' target='_blank' rel='noopener noreferrer' className='cursor-pointer text-gray-600 hover:text-blue-500 transition-all duration-500'><FaLinkedin style={{fontSize: '20px'}}/></a>
                  <a href='https://www.instagram.com/bryaannnn.11/' target='_blank' className='cursor-pointer text-gray-600 hover:text-blue-500 transition-all duration-500' hover:text-blue-500 transition-all duration-200><FaInstagram style={{fontSize: '20px'}}/></a> 
                </div>

                {<div className="block lg:hidden toggle text-gray-600 px-4 cursor-pointer">
                    {link ? (<MdOutlineKeyboardDoubleArrowDown className='text-blue-500' onClick={ () => setlink(!link) } style={{fontSize: '23px'}}/>) : (<MdOutlineKeyboardDoubleArrowLeft onClick={ () => setlink(!link) } style={{fontSize: '23px'}}/>)}
                </div>}

                {link && <div className="res-links flex flex-col justify-center mx-auto gap-6 absolute bg-white my-5 z-10 px-4 py-4 w-full sm:w-1/2 top-12 right-0">
                  <ul className='flex flex-col justify-center items-center gap-3 '>
                    <li className='cursor-pointer text-gray-600 hover:text-blue-500 transition-all duration-500'><a href='https://github.com/BryanHoda11' target='_blank' rel='noopener noreferrer' className='cursor-pointer flex items-center gap-3'>GitHub<FaGithub style={{fontSize: '20px'}}/></a></li>
                    <li className='cursor-pointer text-gray-600 hover:text-blue-500 transition-all duration-500'><a href='https://www.linkedin.com/in/bryan-hoda-b079452b2/' target='_blank' rel='noopener noreferrer' className='cursor-pointer flex items-center gap-3'>Linked In<FaLinkedin style={{fontSize: '20px'}}/></a></li>
                    <li className='cursor-pointer text-gray-600 hover:text-blue-500 transition-all duration-500'><a href='https://www.instagram.com/bryaannnn.11/' target='_blank' className='cursor-pointer flex items-center gap-3' hover:text-blue-500 transition-all duration-200>Instagram <FaInstagram style={{fontSize: '20px'}}/></a> </li>
                  </ul>
                </div>}
              </div>
            </nav>
           
        </>
    )
}

export default Navbar
