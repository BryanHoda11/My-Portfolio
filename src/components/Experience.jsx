import Experience1 from '/images/experience-1.webp'

const Experience = () => {
    const Experience = [
        {
            img: '/images/experience-1.webp',
            company: 'Tellis Technologies Pvt. Ltd.',
            period: 'Nov 2024 - Jan 2025',
            type: 'Internship | Remote'
        },
        {
            img: '/images/experience-2.webp',
            company: 'Treleva Technologies',
            period: 'Sept 2025 - Present',
            type: 'Full Time | Remote'
        },
    ]
    
    return (
        <>

            <div className="relative max-w-4xl mx-auto w-full max-sm:px-3">
                <div className="absolute left-1/2 top-0 h-full w-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-1/2"></div>

                {Experience.map((ex, index) => (
                    <div key={ex.company} className={`relative flex my-8 max-md:justify-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                        <div className="exp-card flex flex-col bg-white sm:flex-row gap-3 items-start sm:items-center h-auto max-sm:w-full min-w-[200px] rounded-lg shadow-md shadow-blue-300 px-3 py-5">
                            <img className="w-[100px] h-auto object-contain mx-auto" src={ex.img} alt="experience" />
                            <div className="flex flex-col gap-2 sm:border-l border-blue-500 pl-3">
                                <h2 className="text-blue-500 text-lg font-semibold">{ex.company}</h2>
                                <ul className="flex flex-col gap-1 text-sm">
                                    <li>Role : Frontend Developer</li>
                                    <li>Period : {ex.period}</li>
                                    <li>Type : {ex.type}</li>
                                </ul>
                            </div>
                        </div>

                        <div className="absolute left-1/2 max-md:hidden top-6 w-10 h-10 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center transform -translate-x-1/2">{index + 1}</div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Experience
