import React from 'react'
// import proyecto from "../assetes/portfolio/proyecto.png"
import {FaRegHandPointRight} from 'react-icons/fa'


const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">About</p>
        </div>
        <p className="text-xl mt-8 md:mt-20">
          Hi there! My name is Antonella M. Ruiz Diaz and I'm originally from Buenos Aires, Argentina. Currently, I reside in
          the United States. I'm a proud graduate of "Henry's Bootcamp", where I earned my degree in Full Stack Web Developer.
          I work with a variety of technologies in web development, including languages such as JavaScript and SQL.
          As a Front-End, I have experience with:
          React, Redux, Redux Toolkit, Hooks, React-Router, Bootstrap, CSS and more.
          As a Back-End, I have worked with Node.js and Express, and in terms of databases, I have experience with:  
          Sequelize, PostgreSQL, SQLite, MySQL among others. I also have experience with tools like GitHub, Postman, Trello,
          Slack, Visual Studio, Vercel, and Firebase. I am interested in acquiring new experiences in the world of technology
          and continue learning to visualize other realities and continue working on projects that involves solving real
          issues.
        </p>
        <br/>
        <p className="text-xl md:mt-8">
          When I'm not busy coding, you can usually find me:
        </p>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
          <div className="md:flex md:space-x-[-16%] md:mt-4">
            <div className="md:w-1/4">
              <FaRegHandPointRight size={50} className="animate-pulse"/>
            </div>
            <div className="md:w-3/4">
              <p className="text-xl ">Outdoors, exploring new places or getting some exercise.</p>
            </div>
          </div>
          <div className="md:flex md:space-x-[-16%] md:mt-4">
            <div className="md:w-1/4">
              <FaRegHandPointRight size={50} className="animate-pulse"/>
            </div>
            <div className="md:w-3/4">
              <p className="text-lg">One of my favorite activities is going for walks. I find it to be a great way to clear my head and stay active.</p>
            </div>
          </div>
          <div className="md:flex md:space-x-[-16%] md:mt-4">
            <div className="md:w-1/4">
              <FaRegHandPointRight size={50} className="animate-pulse"/>
            </div>
            <div className="md:w-3/4">
              <p className="text-lg">I also love to travel whenever I have the chance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;






