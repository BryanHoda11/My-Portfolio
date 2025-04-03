import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Spotify from '/images/spotify-project.webp'
import ToDo from '/images/todo-app-project.webp'
import OnePlus from '/images/OnePlus-project.webp'
import LogitechG from '/images/logitechg-project.webp'
import SuperheroKiduniya from '/images/superherokiduniya-project.webp'
import FrontendHub from '/images/Frontend-hub.webp'

const Projects = () => {
    const Projects = [
        {
            img: Spotify,
            name: '1. Spotify Music Player Clone',
            github: <><FaGithub /> <a href="https://github.com/BryanHoda11/Spotify-Clone" target='_blank' className='underline flex items-center gap-2 text-blue-700 hover:text-blue-800 cursor-pointer'>GitHub</a></>,
            link: <><a href="https://spotify-clone-rho-drab.vercel.app/" target='_blank' className='underline text-blue-700 hover:text-blue-800 cursor-pointer'>Visit Link</a></>,
            about: 'This is a Spotify Music player clone wherein I fetched music and made it play using HTML CSS JS.',
            techStack: 'Tehnologies : HTML | CSS | JS'
        },
        {
            img: ToDo,
            name: '2. ToDo App',
            github: <><FaGithub /> <a href="https://github.com/BryanHoda11/ToDo-App-React-JS" target='_blank' className='underline flex items-center gap-2 text-blue-700 hover:text-blue-800 cursor-pointer'>GitHub</a></>,
            link: <><a href="https://todo-app-react-js-theta.vercel.app/" target='_blank' className='underline text-blue-700 hover:text-blue-800 cursor-pointer'>Visit Link</a></>,
            about: 'A basic Todo list app using React where you can save your todos in Local storage (LS).',
            techStack: 'Tehnologies : React JS | Tailwind CSS'
        },
        {
            img: OnePlus,
            name: '3. OnePlus Redesign',
            github: <><FaGithub /> <a href="https://github.com/BryanHoda11/OnePlus-Redesign-Version" target='_blank' className='underline flex items-center gap-2 text-blue-700 hover:text-blue-800 cursor-pointer'>GitHub</a></>,
            link: <><a href="https://one-plus-redesign.vercel.app/" target='_blank' className='underline text-blue-700 hover:text-blue-800 cursor-pointer'>Visit Link</a></>,
            about: 'I redesigned the One Plus website UI with minor changes & also added Dark Theme feature. (my biggest project)',
            techStack: 'Tehnologies : React JS | Tailwind CSS'
        },
        {
            img: FrontendHub,
            name: '4. Frontend Hub',
            github: <><FaGithub /> <a href="https://github.com/BryanHoda11/Frontend-Hub" target='_blank' className='underline flex items-center gap-2 text-blue-700 hover:text-blue-800 cursor-pointer'>GitHub</a></>,
            link: <><a href="https://frontend-hub-alpha.vercel.app/" target='_blank' className='underline text-blue-700 hover:text-blue-800 cursor-pointer'>Visit Link</a></>,
            about: 'Created a learning website hub based on frontend development technologies using Next.js. ',
            techStack: 'Tehnologies : Next.js | Tailwind CSS | NextAuth'
        },
        {
            img: LogitechG,
            name: '5. Logitech-G Clone',
            github: <><FaGithub /> <a href="https://github.com/BryanHoda11/Logitech-G-Website" target='_blank' className='underline flex items-center gap-2 text-blue-700 hover:text-blue-800 cursor-pointer'>GitHub</a></>,
            link: <><a href="https://logitechg-website.vercel.app/" target='_blank' className='underline text-blue-700 hover:text-blue-800 cursor-pointer'>Visit Link</a></>,
            about: 'Cloned the webiste of Logitech to enhance my skills and get more comfortable in Next.js.',
            techStack: 'Tehnologies : Next.js | Tailwind CSS | NextAuth'
        },
        {
            img: SuperheroKiduniya,
            name: '6. SuperHeroKiDuniya',
            github: <><FaGithub /> <a href="https://github.com/BryanHoda11/SuperHeroKiDuniya" target='_blank' className='underline flex items-center gap-2 text-blue-700 hover:text-blue-800 cursor-pointer'>GitHub</a></>,
            link: <><a href="https://superhero-ki-duniya.vercel.app/" target='_blank' className='underline text-blue-700 hover:text-blue-800 cursor-pointer'>Visit Link</a></>,
            about: 'Created my own Superhero website where you can browse superhero movies which I fetched from an API.',
            techStack: 'Tehnologies : React JS | Tailwind CSS | OMdb API'
        },
    ]
    return (
        <>
            <div className="projects my-10">
                <h2 className='text-blue-600 text-lg sm:text-xl md:pl-12 text-center md:text-start'>MY PROJECTS</h2>

                <div className="projects-container max-md:px-4 flex flex-col items-center md:grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-10 w-full md:w-[95%] mx-auto">

                    {Projects.map((p) => (
                        <div key={p.name} className='project h-auto max-sm:w-fit min-w-[300px] bg-white rounded-lg shadow-md shadow-blue-300 my-5'>
                            <img src={p.img} alt="project" />
                            <div className="details px-4 py-4 flex flex-col justify-center gap-3">
                                <h2 className='md:text-xl font-bold'>{p.name}</h2>
                                <p className='opacity-60 max-md:text-sm pb-2'><span className='font-semibold opacity-100 text-black'>About :</span> {p.about}</p>
                                <div className="links flex items-center gap-4">
                                    <h4 className='flex max-sm:text-sm items-center gap-2'>{p.github} </h4>
                                    <p className='flex max-sm:text-sm items-center gap-2 border-l-[0.7px] border-blue-500 pl-4'>{p.link} <FaExternalLinkAlt style={{ fontSize: '9px' }} /></p>
                                </div>
                                <p className='text-blue-800 text-xs sm:text-sm opacity-60'>{p.techStack}</p>
                            </div>
                        </div>
                    ))}

                </div>
                <p className='text-blue-700 font-semibold text-center text-sm sm:text-lg py-7'>These are my best projects yet, to explore others kindly go to my GitHub.</p>

            </div >
        </>
    )
}

export default Projects
