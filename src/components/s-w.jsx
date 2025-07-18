
const SW = () => {
  return (
    <>
      <div className="strengths-weakness my-10">

        <div className="w-[90%] mx-auto my-6 overflow-x-auto">
          <table className="min-w-full border-collapse text-blue-600">
            <thead>
              <tr className="text-left p-3">
                <th className="py-4 bg-blue-600 border max-sm:text-sm border-blue-300 text-white text-center font-semibold">MY STRENGTHS</th>
                <th className="py-4 bg-blue-600 border max-sm:text-sm border-blue-300 text-white text-center font-semibold">MY WEAKNESSES</th>
              </tr>
            </thead>
            <tbody>
              <tr className='align-top'>
                <td className="max-sm:text-xs px-3 py-5 border border-blue-300">Worked with variety of technologies & libraries in my projects.</td>
                <td className="max-sm:text-xs px-3 py-5 border border-blue-300">Not strong with Server Side Rendering (SSR) and integrating Database.</td>
              </tr>
              <tr className='align-top'>
                <td className="max-sm:text-xs px-3 py-5 border border-blue-300">Clean & efficient UI with responsive design.</td>
                <td className="max-sm:text-xs px-3 py-5 border border-blue-300">Not familiar with CI/CD pipeline concept.</td>
              </tr>
              <tr className='align-top'>
                <td className="max-sm:text-xs px-3 py-5 border border-blue-300">Good at debugging issues / problems.</td>
                <td className="max-sm:text-xs px-3 py-5 border border-blue-300">Need improvement with Optimization & website performance.</td>
              </tr>
              <tr className='align-top'>
                <td className="max-sm:text-xs px-3 py-5 border border-blue-300">Clean, maintainable and resuable code. Easy on the eyes to read.</td>
                <td className="max-sm:text-xs px-3 py-5 border border-blue-300">More focused on UI development rather than functional development.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default SW
