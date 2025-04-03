import React from 'react'

const SW = () => {
  return (
    <>
      <div className="strengths-weakness my-10">
        <h2 className='text-blue-600 text-lg sm:text-xl md:pl-12 text-center md:text-start'>HERE ARE MY :</h2>

        <div className="w-[90%] mx-auto my-6 overflow-x-auto">
          <table className="min-w-full border-collapse text-blue-600">
            <thead>
              <tr className="text-left p-3">
                <th className="py-4 bg-blue-600 border border-blue-300 text-white text-center font-semibold">STRENGTHS</th>
                <th className="py-4 bg-blue-600 border border-blue-300 text-white text-center font-semibold">WEAKNESSES</th>
              </tr>
            </thead>
            <tbody>
              <tr className='align-top'>
                <td className="w-1/2 px-3 py-5 border border-blue-300">Worked with variety of technologies & libraries in my projects.</td>
                <td className="w-1/2 px-3 py-5 border border-blue-300">Need more practice with API integration from Backend to Frontend.</td>
              </tr>
              <tr className='align-top'>
                <td className="w-1/2 px-3 py-5 border border-blue-300">I create good & efficient reusable UI components with React JS for websites & web applications with responsive design.</td>
                <td className="w-1/2 px-3 py-5 border border-blue-300">Not strong with Server Side Rendering (SSR).</td>
              </tr>
              <tr className='align-top'>
                <td className="w-1/2 px-3 py-5 border border-blue-300">Clean & maintainable code. Easy on the eyes to read.</td>
                <td className="w-1/2 px-3 py-5 border border-blue-300">Need improvement with Optimization & core web vitals.</td>
              </tr>
              <tr className='align-top'>
                <td className="w-1/2 px-3 py-5 border border-blue-300">Good at debugging issues / problems.</td>
                <td className="w-1/2 px-3 py-5 border border-blue-300">More focused on UI development rather than functional development.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default SW
