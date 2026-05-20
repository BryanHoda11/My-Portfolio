
const Experience = () => {
    const Experience = [
        {
            img: '/images/experience-1.webp',
            company: 'Tellis Technologies Pvt. Ltd.',
            period: 'Nov 2024 - Jan 2025',
            startDate: "2024-11-01",
            endDate: "2025-01-31",
            type: 'Internship | Remote'
        },
        {
            img: '/images/experience-2.webp',
            company: 'Treleva Technologies',
            period: 'Sept 2025 - Present',
            startDate: "2025-09-01",
            endDate: null, // present
            type: 'Full Time | Remote'
        },
    ]

    const calculateExperience = (experienceList) => {
        let totalMonths = 0;

        experienceList.forEach((job) => {
            const start = new Date(job.startDate);
            const end = job.endDate ? new Date(job.endDate) : new Date();

            const months =
                (end.getFullYear() - start.getFullYear()) * 12 +
                (end.getMonth() - start.getMonth());

            totalMonths += months;
        });

        const years = Math.floor(totalMonths / 12);
        const remainingMonths = totalMonths % 12;

        if (years === 0) {
            return `${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
        }

        if (remainingMonths === 0) {
            return `${years} year${years > 1 ? "s" : ""}`;
        }

        return `${years} yr ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
    };

    return (
        <>

            <div className="relative max-w-4xl mx-auto w-full max-sm:px-3">

                <div className="flex justify-center md:justify-self-end">
                    <div className="bg-white shadow-lg shadow-blue-100 rounded-2xl px-6 py-4 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full shadow-lg text-white flex items-center justify-center text-xl font-bold">💼</div>

                        <div className="flex flex-col">
                            <span className="text-xs sm:text-sm text-gray-500 font-medium">Total Experience</span>
                            <h2 className="text-lg md:text-xl font-bold text-blue-600">{calculateExperience(Experience)}</h2>
                        </div>

                    </div>
                </div>

                <div className="absolute left-1/2 top-28 h-[calc(100%-7rem)] w-[3px] bg-gradient-to-b from-transparent via-blue-500 to-transparent transform -translate-x-1/2"></div>

                {Experience.map((ex, index) => (
                    <div key={ex.company} className={`relative flex my-8 max-md:justify-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>

                        {/* Card */}
                        <div className="exp-card max-sm:relative bg-white w-full max-w-[340px] sm:max-w-[500px] mb-7 rounded-2xl shadow-lg shadow-blue-100 px-4 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-200">

                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">

                                {/* Logo */}
                                <div className="sm:relative flex items-center justify-center w-[90px] h-[90px] p-2 shrink-0">
                                    <div className="absolute top-1 right-1 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-semibold flex items-center justify-center shadow-md border-2 border-white">{index + 1}</div>
                                    <img className="w-full h-full object-contain" src={ex.img} alt="experience" />
                                </div>

                                {/* Info */}
                                <div className="flex flex-col gap-3 text-center sm:text-left w-full">

                                    <div className="sm:border-l sm:border-blue-400 sm:pl-5">
                                        <h2 className="text-blue-500 text-lg sm:text-xl font-semibold leading-snug">{ex.company}</h2>
                                    </div>

                                    <ul className="flex flex-col max-sm:items-center gap-2 text-sm text-gray-700">

                                        <li className="flex items-center gap-1">
                                            <span className="font-semibold text-gray-900">Role :</span>
                                            <span>Frontend Developer</span>
                                        </li>

                                        <li className="flex sm:items-center gap-1">
                                            <span className="font-semibold text-gray-900">Period :</span>
                                            <span>{ex.period}</span>
                                        </li>

                                        <li className="flex sm:items-center gap-1">
                                            <span className="font-semibold text-gray-900">Type :</span>
                                            <span>{ex.type}</span>
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
