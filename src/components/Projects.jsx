import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

// Personal Projects
import Spotify from '/images/spotify-project.webp'
import OnePlus from '/images/OnePlus-project.webp'
import SuperheroKiduniya from '/images/superherokiduniya-project.webp'
import FrontendHub from '/images/Frontend-hub.webp'
import Jobpool from '/images/Jobpool.webp'
import Horizon from '/images/horizon.webp'

// Professional Projects
import Barbex from '/images/Barbex.webp'
import SpaMagic from '/images/SpaMagic.webp'
import FitforLife from '/images/FitforLife.webp'

const Projects = () => {
    const [personal, setPersonal] = useState(true);

    const Projects = [
        {
            img: Spotify,
            name: 'Spotify Music Player Clone',
            date: 'FEB 2024',
            github: <><FaGithub /> <a href="https://github.com/BryanHoda11/Spotify-Clone" target='_blank'>GitHub</a></>,
            link: <><FaExternalLinkAlt /> <a href="https://spotify-clone-rho-drab.vercel.app/" target='_blank'>Visit Link</a></>,
            about: 'This is a Spotify Music player clone wherein I fetched music and made it play using HTML CSS JS.',
            techStack: 'HTML | CSS | JS'
        },
        {
            img: OnePlus,
            name: 'OnePlus Redesign',
            date: 'JULY 2024',
            github: <><FaGithub /> <a href="https://github.com/BryanHoda11/OnePlus-Redesign-Version" target='_blank'>GitHub</a></>,
            link: <><FaExternalLinkAlt /> <a href="https://one-plus-redesign.vercel.app/" target='_blank'>Visit Link</a></>,
            about: 'I redesigned the One Plus website UI with minor changes & also added Dark Theme feature. (my biggest project)',
            techStack: 'React JS | Tailwind CSS'
        },
        {
            img: FrontendHub,
            name: 'Frontend Hub',
            date: 'AUG 2024',
            github: <><FaGithub /> <a href="https://github.com/BryanHoda11/Frontend-Hub" target='_blank'>GitHub</a></>,
            link: <><FaExternalLinkAlt /> <a href="https://frontend-hub-alpha.vercel.app/" target='_blank'>Visit Link</a></>,
            about: 'Created a learning website documentation based on frontend development technologies using Next.js. ',
            techStack: 'Next.js | Tailwind CSS | NextAuth'
        },
        {
            img: SuperheroKiduniya,
            name: 'SuperHeroKiDuniya',
            date: 'OCT 2024',
            github: <><FaGithub /> <a href="https://github.com/BryanHoda11/SuperHeroKiDuniya" target='_blank'>GitHub</a></>,
            link: <><FaExternalLinkAlt /> <a href="https://superhero-ki-duniya.vercel.app/" target='_blank'>Visit Link</a></>,
            about: 'Created my own Superhero website where you can browse superhero movies which I fetched from an API.',
            techStack: 'React JS | Tailwind CSS | OMdb API'
        },
        {
            img: Jobpool,
            name: 'JobPool',
            date: 'AUG 2025',
            github: <><FaGithub /> <a href="https://github.com/BryanHoda11/JobPool" target='_blank'>GitHub</a></>,
            link: <><FaExternalLinkAlt /> <a href="https://job-pool.vercel.app/" target='_blank'>Visit Link</a></>,
            about: 'A job portal wherein I fetched and displayed jobs for your dream career with Clerk for Authentication',
            techStack: 'Next.js | Tailwind CSS | Clerk'
        },
        {
            img: Horizon,
            name: 'Horizon',
            date: 'JULY 2026',
            github: <><FaGithub /> <a href="https://github.com/BryanHoda11/Horizon" target='_blank'>GitHub</a></>,
            link: <><FaExternalLinkAlt /> <a href="https://horizon-rho-flax.vercel.app/" target='_blank'>Visit Link</a></>,
            about: 'A Hotel & Flight booking website to make booking easier & convenient. Added filtering  & gave a premium feel & look.',
            techStack: 'React JS | Tailwind CSS | Framer Motion'
        },
    ]

    const Professional = [
        {
            img: Barbex,
            name: 'Barbex Salon',
            date: 'DEC 2024',
            link: <><FaExternalLinkAlt /> <a href="https://barbex-hazel.vercel.app/" target='_blank'>Visit Link</a></>,
            about: 'A barber & salon website built from scratch with responsive design & optimized it for better performance',
            workedAt: 'Tellis Technologies',
            techStack: 'Next.js | Tailwind CSS'
        },
        {
            img: SpaMagic,
            name: 'Spa Magic',
            date: 'JAN 2025',
            link: <><FaExternalLinkAlt /> <a href="https://spa-azure-psi.vercel.app/" target='_blank'>Visit Link</a></>,
            about: 'A spa & grooming website converted from HTML to JSX and optimized using Next.js & improved performance for users.',
            workedAt: 'Tellis Technologies',
            techStack: 'Next.js | Tailwind CSS',
        },
        {
            img: FitforLife,
            name: 'Fit for Life',
            date: 'Dec 2025 - JULY 2026',
            link: <><FaExternalLinkAlt /> <a href="https://fitforlife.treleva.org/" target='_blank'>Visit Link</a></>,
            about: 'A fitness & swimming webapp built for client. Developed variety of features based on client requirements.',
            workedAt: 'Treleva Technologies',
            techStack: 'React JS | Tailwind CSS | REST APIs',
        },
    ]
    return (
        <>
            <div className="projects w-full max-sm:px-3 sm:w-[90%] mx-auto">

                <div className="projects-header w-full mb-4 flex items-center justify-between">
                    <div className="switch flex w-fit gap-6 border-b border-gray-200">
                        <button onClick={() => setPersonal(true)}
                            className={`relative max-sm:text-sm pb-3 transition-all duration-300 ${personal ? "text-blue-600 font-semibold" : "text-gray-500 hover:text-black"}`}>
                            Personal ({Projects.length})

                            <span className={`absolute bottom-0 left-0 h-[2.5px] bg-blue-600 transition-all duration-300 ${personal ? "w-full" : "w-0"}`} />
                        </button>

                        <button onClick={() => setPersonal(false)} className={`relative max-sm:text-sm pb-3 transition-all duration-300 ${!personal ? "text-blue-600 font-semibold" : "text-gray-500 hover:text-black"}`}>
                            Professional ({Professional.length})

                            <span className={`absolute bottom-0 left-0 h-[2.5px] bg-blue-600 transition-all duration-300 ${!personal ? "w-full" : "w-0"}`} />
                        </button>
                    </div>

                    {personal && (<a href="https://github.com/BryanHoda11" target="_blank"> <button className="bg-blue-700 w-fit text-xs sm:text-sm text-white cursor-pointer hover:font-semibold rounded-lg p-3">View All</button> </a>)}
                </div>

                <div className="projects-container flex flex-col items-center md:grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-10 mx-auto">
                    {(personal ? Projects : Professional).map((p) => (
                        <div key={p.name} className='project relative h-auto max-sm:w-fit min-w-[300px] bg-white rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-400 transition-all duration-500 shadow-blue-300'>

                            <div className="relative group overflow-hidden">
                                <img src={p.img} alt="project" className="w-full transition-transform cursor-pointer duration-500" />

                                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40 opacity-0 transition-all duration-300 group-hover:opacity-100">

                                    {personal && (
                                        <button className="rounded-full flex items-center gap-1 bg-white px-5 py-2 text-sm font-semibold text-blue-700 transition hover:scale-105">
                                            {p.github}
                                        </button>
                                    )}

                                    <button className="rounded-full flex items-center gap-1 bg-blue-700 px-5 py-2 text-sm font-semibold text-white transition hover:scale-105">
                                        {p.link}
                                    </button>
                                </div>
                            </div>
                            <div className="details px-4 py-4 flex flex-col justify-center">
                                <h2 className='md:text-xl font-semibold'>{p.name}</h2>
                                <div className="flex max-sm:flex-col sm:items-center mt-2 gap-2 sm:gap-3">
                                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-500">
                                        <FaRegCalendarAlt className="text-blue-600" />
                                        <p>{p.date}</p>
                                    </div>
                                    {personal != true && <span className="text-gray-400 max-sm:hidden">|</span>}
                                    {personal != true && (<div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-500">
                                        <FaLaptopCode className="text-blue-600" />
                                        <p>{p.workedAt}</p>
                                    </div>)}
                                </div>

                                <p className='opacity-60 max-md:text-sm py-4'><span className='font-semibold opacity-100 text-black'>About :</span> {p.about}</p>
                                <p className='text-blue-800 font-semibold text-xs mt-3 sm:text-sm opacity-60'>Tech Stack : {p.techStack}</p>
                                <div className="absolute z-10 top-2 right-2">{p.new}</div>
                            </div>

                            {/* <span className="w-fit rounded-full p-2 text-xs bg-blue-200 text-blue-700 font-bold absolute top-3 left-2">{p.workedAt}</span> */}
                        </div>
                    ))}

                </div>

            </div >
        </>
    )
}

export default Projects
