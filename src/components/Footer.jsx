import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaInstagram} from 'react-icons/fa'

const date = new Date();
const year = date.getFullYear();

const style = { color: "white", fontSize: "1.5em" }

const Footer = () => {
  return (
    <div>
    <div className="w-full bg-black text-white flex ml-auto mr-auto pl-6 pr-4 pt-6 pb-4 ">
     
    <p>Designed &#38; Developed by Antonella M. Ruiz Diaz</p>
    <div className="flex ml-[20%] pl-4">
    <p >copyright &copy;{year}</p>
    </div>
    <div className="flex ml-[35%] space-x-4">
    <a  href="https://github.com/maggieruizdiaz22">
   <AiFillGithub size={25} style={style} />
   </a>
   <a href="https://www.linkedin.com/in/magal%C3%ADruizdiaz/">
   <AiFillLinkedin size={25}/>
   </a>
   <a href="https://www.instagram.com/ant.ruizdiaz/?igshid=YmMyMTA2M2Y%3D">
   <FaInstagram size={25}/>
   </a>
   </div>
    </div>
    </div>
  )
}

export default Footer