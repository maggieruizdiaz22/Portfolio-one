import React from 'react';
import html from '../assetes/portfolio/html.png'
import sql from  '../assetes/portfolio/sql.png'
import css from  '../assetes/portfolio/css.png'
import javascrip from  '../assetes/portfolio/javascript.png'
import node from  '../assetes/portfolio/node.png'
import redux from  '../assetes/portfolio/redux.jpg'
import react from  '../assetes/portfolio/react.png'
import sequelize from  '../assetes/portfolio/sequelize.png'
import sass from  '../assetes/portfolio/sass.png'
import tailwind from  '../assetes/portfolio/tailwind.png'
import bootstrap from  '../assetes/portfolio/bootstrap.png'
import firebase from '../assetes/portfolio/firebase.png'

const Experience = () => {
    const techs = [
        {
            id:1,
            src:javascrip,
            title:"JavaScript",
            style:"shadow-yellow-500",
        },
        {
            id:2,
            src:html,
            title:"HTML",
            style:"shadow-orange-500",
        },
        {
            id:3,
            src:redux,
            title:"Redux",
            style:"shadow-violet-500",
        },
        {
            id:4,
            src:node,
            title:"Node",
            style:"shadow-green-500",
        },
        {
            id:5,
            src:css,
            title:"CSS",
            style:"shadow-blue-500",
        },
        {
            id:6,
            src:react,
            title:"React",
            style:"shadow-cyan-500",
        },
        {
            id:7,
            src:sequelize,
            title:"Sequelize",
            style:"shadow-blue-500",
        },
        {
            id:9,
            src:sql,
            title:"Postgresql",
            style:"shadow-sky-500",
        },
        {
            id:10,
            src:sass,
            title:"Sass",
            style:"shadow-pink-500",
        },
        {
            id:11,
            src:tailwind,
            title:"Tailwind",
            style:"shadow-teal-500",
        },
        {
            id:12,
            src:bootstrap,
            title:"Bootstrap",
            style:"shadow-violet-500",
        },
        {
            id:12,
            src:firebase,
            title:"Firebase",
            style:"shadow-yellow-500",
        },
    ]
    
    return (
        <div
          name="experience"
          className="bg-gradient-to-b from-gray-800 to-black w-full xl-screen "
        >
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
              <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                Experience
              </p>
              <p className="py-6">These are the technologies I've worked with</p>
            </div>
    
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
              {techs.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    
    export default Experience;