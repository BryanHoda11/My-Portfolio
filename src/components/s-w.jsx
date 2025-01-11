import React from 'react'

const SW = () => {
  return (
    <>
      <div className="strengths-weakness my-10">
        <h2 className='text-blue-600 text-lg sm:text-xl px-3 py-7 text-center md:text-start'>NOW NO ONE IS PERFECT, SO HERE ARE MY :</h2>

        <div className="strengths-weakness-container flex flex-col items-center lg:items-baseline lg:flex-row gap-4 px-3 py-6">
          <div className="box relative mx-4 flex flex-col bg-blue-600 cursor-default h-auto w-full sm:w-[95%] lg:w-1/2 text-white rounded-lg px-4 py-4">
            <h3 className='font-bold flex gap-3 items-center justify-center'>STRENGHTS <span className='font-bold text-2xl'>&uarr;</span></h3>
            <ul className='flex flex-col gap-5 pl-5 pt-4 text-sm lg:text-lg list-disc'>
              <li>Worked with variety of technologies & libraries in my projects.</li>
              <li>I create good & efficient reusable UI components with React JS for websites & web applications with responsive design.</li>
              <li>Clean & maintainable code. Easy on the eyes to read.</li>
              <li>Good at debugging issues / problems.</li>
            </ul>
          </div>

          <div className="box relative mx-4 flex flex-col bg-blue-800 cursor-default h-auto w-full sm:w-[95%] lg:w-1/2 text-white rounded-lg px-4 py-4">
            <h3 className='font-bold flex gap-3 items-center justify-center'>WEAKNESSES<span className='font-bold text-2xl'>&darr;</span></h3>
            <ul className='flex flex-col gap-5 pl-5 pt-4 text-sm lg:text-lg list-disc'>
              <li>Need more practice with API integration from Backend to Frontend.</li>
              <li>Not strong with Server Side Rendering (SSR).</li>
              <li>Need improvement with Optimization & core web vitals.</li>
              <li>More focussed on UI development rather than functional development.</li>
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

export default SW
