import React from 'react'
import bornlogo from '../assets/portfolio/bornlogo.png'
import biologo from '../assets/portfolio/biologo.jpeg'
import amberlogo from '../assets/portfolio/amberlogo.jpg'
import soulmynt from '../assets/portfolio/soulmynt.png'
import mecc from '../assets/portfolio/mecc.png'
import mproduct from '../assets/portfolio/mproduct.png'

const Experience = () => {

    const experiences = [
        {
            id: 1,
            src: bornlogo,
            description: "PM Intern (Present)"
        },
        {
            id: 2,
            src: biologo,
            description: "PM Intern (Present)"
        },
        {
            id: 3,
            src: amberlogo,
            description: "Data Analysis Intern (Summer 2022)"
        },
        {
            id: 4,
            src: soulmynt,
            description: "Developer (Present)"
        },
        {
            id: 5,
            src: mecc,
            description: "Consultant (Present)"
        },
        {
            id: 6,
            src: mproduct,
            description: "Conference Team Member (Present)"

        }
    ]

  return (
    <div name="experience" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Experience</p>
                <p className="py-6">Check out my current and past roles below!</p>
            </div>

            

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            
            {
                experiences.map(({id, src, description}) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                        <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                        <div className="flex items-center justify-center">
                            <p className="w-full py-3 m-4 duration-200 hover:scale-105">{description}</p>
                        </div>
                    </div>
  
                ))
            }
               
            </div>
        </div>
    </div>
  )
}

export default Experience