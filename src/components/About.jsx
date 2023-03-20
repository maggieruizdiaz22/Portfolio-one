import React from 'react'
import proyecto from "../assetes/portfolio/proyecto.png"
import {FaRegHandPointRight} from 'react-icons/fa'


const About=()=>{
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-19 ">
        Hi there! My name is Antonella M. Ruiz Diaz and I'm originally from Buenos Aires, Argentina. Currently, I reside in the United States. 
        I'm a proud graduate of "Henry's Bootcamp", where I earned my degree in Full Stack Web Developer.
        <br/>
        I work with a variety of technologies in web development, including languages such as JavaScript and SQL.
        <br/>
        On the Front-End, I have experience with:
         React, Redux, Redux Toolkit, Hooks, React-Router, Bootstrap, CSS and more.
        <br/>
        In the Back-End, I have worked with Node.js and Express, and in terms of databases, I have experience with:
        <br/>
        Sequelize, PostgreSQL, SQLite, MySQL among others. I also have experience with tools like GitHub, Postman, Trello, Slack, Visual Studio, Vercel, and Firebase. I am interested in acquiring new experiences in the world of technology and continue learning to visualize other realities and continue working on projects that involve real motives and causes.
       <br/>
        </p>
        <br/>
        <p className="text-xl">
        When I'm not busy coding, you can usually find me:
        <li  className="flex space-x-8  mt-4 p-3 ">
        
        <FaRegHandPointRight size={50} className="animate-pulse mt-[-1%]"/> Outdoors, exploring new places or getting some exercise.
       
        <FaRegHandPointRight size={50} className="flex animate-pulse mt-[-1%]"/>  One of my favorite activities is going for walks.
        <FaRegHandPointRight size={50} className="animate-pulse mt-[-1%]"/> I find it to be a great way to clear my head and stay active.
        <FaRegHandPointRight size={50} className="animate-pulse mt-[-1%]"/> I also love to travel whenever I have the chance
        </li>
        </p>
   
        <div className="relative flex justify-center items-center p-16">
        <div className=""></div>
        <div className=" rounded-full w- h-80">
          <img src={proyecto} alt="my profile" className="pl-9 mx-auto  md:w-full relative rounded-full h-64 w-64 object-cover" />
        </div>
</div>
        </div>
    </div>
  )
}
export default About;
