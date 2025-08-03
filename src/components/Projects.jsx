import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

// Personal Projects
import Spotify from '/images/spotify-project.webp'
import ToDo from '/images/todo-app-project.webp'
import OnePlus from '/images/OnePlus-project.webp'
import LogitechG from '/images/logitechg-project.webp'
import SuperheroKiduniya from '/images/superherokiduniya-project.webp'
import FrontendHub from '/images/Frontend-hub.webp'
import CryptoDashboard from '/images/crypto-project.webp'

// Professional Projects
import Barbex from '/images/Barbex.webp'
import SpaMagic from '/images/SpaMagic.webp'

const Projects = () => {
    const [personal, setPersonal] = useState(true);

    const Projects = [
        {
            img: Spotify,
            name: 'Spotify Music Player Clone',
            github: <><FaGithub /> <a href="https://github.com/BryanHoda11/Spotify-Clone" target='_blank'>GitHub</a></>,
            link: <><FaExternalLinkAlt /> <a href="https://spotify-clone-rho-drab.vercel.app/" target='_blank'>Visit Link</a></>,
            about: 'This is a Spotify Music player clone wherein I fetched music and made it play using HTML CSS JS.',
            techStack: 'Tehnologies : HTML | CSS | JS'
        },
        {
            img: ToDo,
            name: 'ToDo App',
            github: <><FaGithub /> <a href="https://github.com/BryanHoda11/ToDo-App-React-JS" target='_blank'>GitHub</a></>,
            link: <><FaExternalLinkAlt /> <a href="https://todo-app-react-js-theta.vercel.app/" target='_blank'>Visit Link</a></>,
            about: 'A basic Todo list app using React where you can save your todos in Local storage (LS).',
            techStack: 'Tehnologies : React JS | Tailwind CSS'
        },
        {
            img: OnePlus,
            name: 'OnePlus Redesign',
            github: <><FaGithub /> <a href="https://github.com/BryanHoda11/OnePlus-Redesign-Version" target='_blank'>GitHub</a></>,
            link: <><FaExternalLinkAlt /> <a href="https://one-plus-redesign.vercel.app/" target='_blank'>Visit Link</a></>,
            about: 'I redesigned the One Plus website UI with minor changes & also added Dark Theme feature. (my biggest project)',
            techStack: 'Tehnologies : React JS | Tailwind CSS'
        },
        {
            img: FrontendHub,
            name: 'Frontend Hub',
            github: <><FaGithub /> <a href="https://github.com/BryanHoda11/Frontend-Hub" target='_blank'>GitHub</a></>,
            link: <><FaExternalLinkAlt /> <a href="https://frontend-hub-alpha.vercel.app/" target='_blank'>Visit Link</a></>,
            about: 'Created a learning website hub based on frontend development technologies using Next.js. ',
            techStack: 'Tehnologies : Next.js | Tailwind CSS | NextAuth'
        },
        {
            img: LogitechG,
            name: 'Logitech-G Clone',
            github: <><FaGithub /> <a href="https://github.com/BryanHoda11/Logitech-G-Website" target='_blank'>GitHub</a></>,
            link: <><FaExternalLinkAlt /> <a href="https://logitechg-website.vercel.app/" target='_blank'>Visit Link</a></>,
            about: 'Cloned the webiste of Logitech to enhance my skills and get more comfortable in Next.js.',
            techStack: 'Tehnologies : Next.js | Tailwind CSS | NextAuth'
        },
        {
            img: SuperheroKiduniya,
            name: 'SuperHeroKiDuniya',
            github: <><FaGithub /> <a href="https://github.com/BryanHoda11/SuperHeroKiDuniya" target='_blank'>GitHub</a></>,
            link: <><FaExternalLinkAlt /> <a href="https://superhero-ki-duniya.vercel.app/" target='_blank'>Visit Link</a></>,
            about: 'Created my own Superhero website where you can browse superhero movies which I fetched from an API.',
            techStack: 'Tehnologies : React JS | Tailwind CSS | OMdb API'
        },
        {
            img: CryptoDashboard,
            name: 'Crypto Dashboard',
            github: <><FaGithub /> <a href="https://github.com/BryanHoda11/Crypto-Dashboard" target='_blank'>GitHub</a></>,
            link: <><FaExternalLinkAlt /> <a href="https://crypto-dashboard-wine-one.vercel.app/" target='_blank'>Visit Link</a></>,
            about: 'A Crypto Currency Dashboard made to give analytcial graphical data & detailed info on crypto currencies.',
            techStack: 'Tehnologies : React JS | Tailwind CSS | Charts.js',
            new: <><button className="h-auto w-fit text-xs cursor-default px-4 py-2 rounded-xl text-center bg-green-500 font-semibold text-white">New!</button></>
        },
    ]

    const Professional = [
        {
            img: Barbex,
            name: 'Barbex Salon',
            link: <><FaExternalLinkAlt /> <a href="https://barbex-hazel.vercel.app/" target='_blank'>Visit Link</a></>,
            about: 'A barber & salon website built from scratch with responsive design & optimized it for better performance',
            techStack: 'Tehnologies : Next.js | Tailwind CSS'
        },
        {
            img: SpaMagic,
            name: 'Spa Magic',
            link: <><FaExternalLinkAlt /> <a href="https://spa-azure-psi.vercel.app/" target='_blank'>Visit Link</a></>,
            about: 'A spa & grooming website converted from HTML to JSX and optimized using Next.js & improved performance for users.',
            techStack: 'Tehnologies : Next.js | Tailwind CSS',
        },
    ]
    return (
        <>
            <div className="projects">

                <div className="switch flex items-center gap-7 justify-center py-7 mx-auto">
                    <button onClick={() => setPersonal(true)} className={`max-sm:text-sm px-4 py-2 transition-all duration-300 ${personal ? 'bg-blue-700 text-white rounded-lg' : 'bg-gray-100 text-black'}`}>
                        Personal
                    </button>
                    <button onClick={() => setPersonal(false)} className={`max-sm:text-sm px-4 py-2 transition-all duration-300 ${!personal ? 'bg-blue-700 text-white rounded-lg' : 'bg-gray-100 text-black'}`}>
                        Professional
                    </button>
                </div>

                <div className="projects-container max-md:px-4 flex flex-col items-center md:grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-10 w-full md:w-[95%] mx-auto">

                    {(personal ? Projects : Professional).map((p) => (
                        <div key={p.name} className='project h-auto max-sm:w-fit min-w-[300px] bg-white rounded-lg shadow-md shadow-blue-300 my-5 relative'>
                            <img src={p.img} alt="project" />
                            <div className="details px-4 py-4 flex flex-col justify-center ga">
                                <h2 className='md:text-xl font-bold'>{p.name}</h2>
                                <p className='opacity-60 max-md:text-sm py-2'><span className='font-semibold opacity-100 text-black'>About :</span> {p.about}</p>
                                <div className="links flex items-center gap-4 py-3">
                                    <button className={`group relative ${personal ? 'block' : 'hidden'} text-sm text-white font-semibold bg-blue-700 px-4 py-2 rounded-full transition-all duration-300`}>
                                        <span className="relative z-10 flex text-sm items-center gap-2 group-hover:text-blue-700 transition-all duration-300">{p.github}</span>
                                        <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full z-0"></span>
                                    </button>

                                    <button className="group relative text-sm text-white font-semibold bg-blue-700 px-4 py-2 rounded-full transition-all duration-300">
                                        <span className="relative z-10 flex text-sm items-center gap-2 group-hover:text-blue-700 transition-all duration-300">{p.link}</span>
                                        <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full z-0"></span>
                                    </button>
                                </div>
                                <p className='text-blue-800 text-xs sm:text-sm opacity-60'>{p.techStack}</p>

                                <div className="absolute z-10 top-2 right-2">{p.new}</div>
                            </div>
                        </div>
                    ))}

                </div>
                <p className={`text-blue-700 ${personal ? 'block' : 'hidden'} font-semibold text-center text-sm sm:text-lg py-3 px-3`}>These are my best projects yet, to explore others kindly go to my GitHub.</p>

            </div >
        </>
    )
}

export default Projects
