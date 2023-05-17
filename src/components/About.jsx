import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
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
                On campus I'm a member of Kappa Theta Pi - Michigan's Premier Technology Fraternity, MECC Consulting Group, and MProduct. 
                When I'm not busy huddled over my computer trying to make my code work, I enjoys lifting, watching basketball tennis, and selling shoes to my favorite Michigan athletes.
                In addition, I love music and some of my favorite artists include Brent Faiyaz, Giveon, Lil Uzi Vert, and Still Woozy. 
                With that being said, I'd love to get to know you as well so feel free to reach out!
            </p>
        </div>
    </div>
  )
}

export default About