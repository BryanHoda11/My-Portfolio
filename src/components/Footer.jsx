import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Footer = () => {
    return (
        <>
            <footer className='bg-white w-[95%] rounded-lg shadow-lg mx-auto px-3 sm:px-5 py-5 my-4 overflow-hidden'>
                <h1 className='text-center text-lg sm:text-2xl text-blue-700'>Thank you for visiting my site!</h1>

                <div className="contact-info flex flex-col sm:flex-row justify-center gap-3 items-center pt-4 text-center">
                    <p className='flex flex-wrap justify-center items-center gap-2 text-xs sm:text-sm'>
                        <span className='flex items-center gap-2'> <FaWhatsapp /> Contact No :</span>
                        <a href='tel:+917738345913' className='font-semibold text-blue-600 hover:text-blue-800 break-all'> +91 7738345913 </a>
                    </p>

                    <span className="hidden sm:block">|</span>

                    <p className='flex flex-wrap justify-center items-center gap-2 text-xs sm:text-sm'>
                        <span className='flex items-center gap-2'><CgMail /> Gmail : </span>
                        <a href='mailto:bryanhoda2003@gmail.com' className='font-semibold text-blue-600 hover:text-blue-800 break-all'>bryanhoda2003@gmail.com </a>
                    </p>

                </div>
            </footer>
        </>
    )
}

export default Footer
