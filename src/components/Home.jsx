import React, { useEffect, useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll'
import headerImg from '../assetes/portfolio/header-img.svg'
import TypeWriterEffect from 'react-typewriter-effect';



export const Home = () => {
  const phrases = ["Full Web Stack Developer" , "Desarrolladora" , "Passionate about technology", "Active learner Research", "Love to learn new stuffs"]
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [currentPhraseIndex,phrases.length]);

  return (
    <div name="home" className="min-h-screen bg-gradient-to-b from-black via-black to-gray-800 overflow-y-auto">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <div className="wellcome">
            <h2>
              Wellcome...
            </h2>
          </div>
          <p className="text-gray-500 sm:text-4xl py-4 max-w-md">
            My name is Antonella M. Ruiz Diaz 
            <br/>
            <div className="py-4 max-w-md">
              <span className="sm:text-4xl py-4 max-w-md">
                <TypeWriterEffect
                  textStyle={{
                    color: '#3F3D56',
                  }}
                  startDelay={1000}
                  cursorColor="#3F3D56"
                  multiText={[
                    'Full Web Stack Developer',
                    'Desarrolladora web',
                    'Passionate about technology',
                    'Active learner Research',
                    'Love to learn new stuffs',
                  ]}
                  multiTextDelay={3000}
                  typeSpeed={60}
                  multiTextLoop
                />
              </span>
            </div>
          </p>
          <div>
            <Link
              to="proyects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Proyects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="animate-wiggle pl-10">
          <img
            src={headerImg}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full pl-7 pt-[30%]"
          />
        </div>
      </div>
    </div>
  );
                }
