import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Experience = () => {

    const experiences = [
        {
            id: 1,
            src: arrayDestruct,
            description: "him"
        },
        {
            id: 2,
            src: installNode,
            description: "him"
        },
        {
            id: 3,
            src: navbar,
            description: "him"
        },
        {
            id: 4,
            src: reactParallax,
            description: "him"
        },
        {
            id: 5,
            src: reactSmooth,
            description: "him"
        },
        {
            id: 6,
            src: reactWeather,
            description: "him"

        }
    ]

  return (
    <div name="experience" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
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