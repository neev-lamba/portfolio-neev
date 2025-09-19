import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>

            <p className="text-xl mt-20">
                Ever since I was young I've always had an interest in tech whether that was from playing video games with my dad, getting the newest gadget on the market, or simply watching Youtube videos. 
                As I grew older, my passion for technology evolved into a deep interest in the entire product development process, starting from ideation and extending to customer-centric implementation.
                Throughout my journey, I actively sought out opportunities to immerse myself in diverse perspectives, enabling me to approach problems from multiple angles. This approach has not only allowed me to create products that meet business objectives but also prioritize customer needs.
            </p>

            <br />

            <p className="text-xl">
                At Citi, I work on an Express Payment team focused on reducing transaction latenency and creating higher throughput for internal and external facing payment systems. In my free time, I enjoy lifting, listening to music, and crafting cocktails.
                I'd love to connect so please feel free to reach out. 
            </p>
        </div>
    </div>
  )
}

export default About