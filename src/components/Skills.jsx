import React from 'react';
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import tailwind from '../assets/tailwind.png'
import cplusplus from '../assets/cplusplus.png'
import pythonimg from '../assets/pythonimg.png'
import aws from '../assets/aws.png'
import dart from '../assets/dart.png'
import flutter from '../assets/flutter.png'

const Skills = () => {

    const skills = [
        {
            id:1,
            src: cplusplus,
            title: 'C++',
            style: 'shadow-blue-400'
        },
        {
            id:2,
            src: pythonimg,
            title: 'Python',
            style: 'shadow-yellow-400'
        },
        {
            id:3,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:4,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:5,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id:6,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id:7,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id:8,
            src: nextjs,
            title: 'Next JS',
            style: 'shadow-white'
        },
        {
            id:9,
            src: aws,
            title: 'AWS',
            style: 'shadow-orange-400'
        },
        {
            id:10,
            src: dart,
            title: 'Dart',
            style: 'shadow-cyan-400'
        },
        {
            id:11,
            src: flutter,
            title: 'Flutter',
            style: 'shadow-blue-400'
        },
    
    ]
  return (
    <div name='skills' className="bg-gradient-to-b from-black to-gray-800 w-full h-fit">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                <p className='py-6'>Below are some of the technologies I've worked with: </p>
            </div>


            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                {
                    skills.map(({id,src,title,style}) => (
                        <div key ={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className="w-20 mx-auto"/>
                            <p className="mt-4">{title}</p>
                        </div>
                    ))
                }
               
            </div>
        </div>
    </div>
  )
}

export default Skills