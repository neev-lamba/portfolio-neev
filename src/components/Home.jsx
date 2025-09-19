import React from 'react';
import NeevImage from '../assets/neevimg.jpg';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {Link} from "react-scroll"

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col 
        items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">
                    Hi there, I'm Neev!
                </h2>
                <p className="text-gray-500 py-4 max-w-md">
                    I'm a recent graduate from the University of MIchigan with a degree in Computer Science. I'm currently based in NYC as a software engineer at Citibank.
                </p>

                <div>
                    <Link to="experience" smooth duration={1000} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-400 to to-blue-700 cursor-pointer">
                        Experience
                        <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={20} className="ml-1"/> 
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={NeevImage} alt="my profile" className="rounded-2xl mx-auto h-80 w-auto object-cover"/>
            </div>
        </div>
    </div>
  )
}

export default Home