import React from 'react'
import ktp from '../assets/portfolio/ktp.jpg'
import todoapp from '../assets/portfolio/todoapp.jpg'
import smynt from '../assets/portfolio/soulmyntgif.gif'
import cryptoapp from '../assets/portfolio/cryptoapp.jpg'
import youtubeapp from '../assets/portfolio/youtubedemo.jpg'

export const Projects = () => {
  
    const projects = [
        {
            id: 1,
            src: ktp,
            button: <a 
            className="px-6 py-3 m-4 duration-200 hover:scale-105"
            href="https://ktpmichigan.com/rush-app/"
            target="_blank"
            rel="noopener noreferrer">Rush App Demo</a>
        },
        {
            id: 2,
            src: smynt,
            button: <a 
            className="px-6 py-3 m-4 duration-200 hover:scale-105"
            href="https://www.soulmynt.com/"
            target="_blank"
            rel="noopener noreferrer">Soulmynt Website</a>
        },
        {
            id: 3,
            src: todoapp,
            button: <a 
            className="px-6 py-3 m-4 duration-200 hover:scale-105"
            href="https://github.com/neev-lamba/react-to-do-app"
            target="_blank"
            rel="noopener noreferrer">Todo List - Source Code</a>
        },
        {
            id: 4,
            src: cryptoapp,
            button: <a 
            className="px-6 py-3 m-4 duration-200 hover:scale-105"
            href="https://github.com/neev-lamba/react-crypto-app"
            target="_blank"
            rel="noopener noreferrer">Crypto Api Site - Source Code</a>
        },
        {
            id: 5,
            src: youtubeapp,
            button: <a 
            className="px-6 py-3 m-4 duration-200 hover:scale-105"
            href="https://github.com/neev-lamba/react-demo-youtube"
            target="_blank"
            rel="noopener noreferrer">Youtube Demo - Source Code</a>
        },

    ]

  return (
    <div name="projects" className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-fit">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
                <p className="py-6">Check out my recent projects below! Click the description to learn more.</p>
            </div>

            

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            
            {
                projects.map(({id, src, button}) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                        <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                        <div className="flex items-center justify-center">
                            {button}
                        </div>
                    </div>
  
                ))
            }
               
            </div>
        </div>
    </div>
  )
}
