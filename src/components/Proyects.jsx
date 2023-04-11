import React from 'react'
import simpleservice from "../assetes/portfolio/simpleservice.png"
import videogame from "../assetes/portfolio/videogame.png"
import simpleServicePortfolio from "../assetes/portfolio/simpleServicePortfolio.gif"

const Portfolio = () => {
  const proyects = [{
    id: 1,
    src: simpleServicePortfolio,
    github: "https://github.com/PDG94/simpleservice",
    live: "https://simpleservice-six.vercel.app/",
   
  },
  {
    id:2,
    src: videogame,
    github: "https://github.com/maggieruizdiaz22/PI-Videogames-main",
    live: "https://pi-videogames-main-lime.vercel.app/",

  },
]
  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
          <p className="py-6 ">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0">
        {
          proyects.map(({id,src, github,
          live}) => (
          <div key={id}className="shadow-md shadow-gray-600 rounded-lg">
            <img src={src} alt="" className="rounded-md duration-200 hover:scale-105 cursor-pointer"/>
            <div className="flex items-center justify-center">
              <a href={live}>
              <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
              </a>
              <a href={github}>
              <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">Code</button>
              </a>
            </div>
          </div>         
           ) )
}
        </div>
      </div>
    </div>
  )
}

export default Portfolio;