import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>

            <p className="text-xl mt-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum corrupti minima maxime nobis dolorum. Magni vero praesentium quis libero vel pariatur. Mollitia, enim voluptas eaque maiores facere maxime placeat, voluptatum laborum quis eius corrupti praesentium nemo ex officiis! Odio quas iure veniam animi saepe doloremque deleniti nobis accusantium optio laborum!
            </p>

            <br />

            <p className="text-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat adipisci sequi velit recusandae possimus aliquam error neque, aliquid odit soluta porro, ipsum debitis nulla minus ut, quasi necessitatibus ad quod dolor. Consequatur aliquid optio, quod veritatis labore minima blanditiis ipsam eligendi odit ipsum iure laudantium soluta explicabo sint illum maxime.
            </p>
        </div>
    </div>
  )
}

export default About