
const Experience = () => {
    const Experience = [
        {
            img: '/images/experience-1.webp',
            company: 'Tellis Technologies Pvt. Ltd.',
            role: 'Frontend Developer',
            period: 'Nov 2024 - Jan 2025',
            duration: 3,
            type: 'Internship | Remote'
        },
        {
            img: '/images/experience-2.webp',
            company: 'Treleva Technologies',
            role: 'Frontend Software Developer',
            period: 'Sept 2025 - July 2026',
            duration: 11,
            type: 'Full Time | Remote'
        },
    ]

    const calculateExperience = (experienceList) => {
        const totalMonths = experienceList.reduce(
            (sum, job) => sum + job.duration,
            0
        );

        return `${(totalMonths / 12).toFixed(1)} Years`;
    };

    return (
        <>
            <div className="relative max-w-4xl mx-auto w-full max-sm:px-3">

                <div className="flex justify-center md:justify-self-end">
                    <div className="bg-white shadow-lg shadow-blue-100 w-fit rounded-2xl px-6 py-4 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full shadow-lg text-white flex items-center justify-center font-bold">💼</div>

                        <div className="flex flex-col">
                            <span className="text-xs sm:text-sm text-gray-500 font-medium">Total Experience</span>
                            <h2 className="text-md sm:text-lg font-semibold text-blue-600">{calculateExperience(Experience)}</h2>
                        </div>

                    </div>
                </div>

                <div className="absolute left-1/2 top-28 h-[calc(100%-7rem)] w-[3px] bg-gradient-to-b from-transparent via-blue-500 to-transparent transform -translate-x-1/2"></div>

                {Experience.map((exp, index) => (
                    <div key={exp.company} className={`relative flex my-8 max-md:justify-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>

                        {/* Card */}
                        <div className="exp-card max-sm:relative bg-white w-full max-w-[340px] sm:max-w-[500px] mb-7 rounded-2xl shadow-lg shadow-blue-100 px-4 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-200">

                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">

                                {/* Logo */}
                                <div className="sm:relative flex items-center justify-center w-[90px] h-[90px] p-2 shrink-0">
                                    <div className="absolute top-1 right-1 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-semibold flex items-center justify-center shadow-md border-2 border-white">{index + 1}</div>
                                    <img className="w-full h-full object-contain" src={exp.img} alt="experience" />
                                </div>

                                {/* Info */}
                                <div className="flex flex-col gap-3 text-center sm:text-left w-full">

                                    <div className="sm:border-l sm:border-blue-400 sm:pl-5">
                                        <h2 className="text-blue-500 text-lg sm:text-xl font-semibold leading-snug">{exp.company}</h2>
                                    </div>

                                    <ul className="flex flex-col max-sm:items-center gap-2 text-sm text-gray-700">

                                        <li className="flex items-center gap-1">
                                            <span className="font-semibold text-gray-900">Role :</span>
                                            <span>{exp.role}</span>
                                        </li>

                                        <li className="flex sm:items-center gap-1">
                                            <span className="font-semibold text-gray-900">Period :</span>
                                            <span>{exp.period}</span>
                                        </li>

                                        <li className="flex sm:items-center gap-1">
                                            <span className="font-semibold text-gray-900">Type :</span>
                                            <span>{exp.type}</span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Experience
