import React from 'react'
import { Link } from 'react-scroll'


const NavLinks = ({link,className,onClick}) => {
  return (
    <li className={className}>
        <Link to={link} smooth duration={500} activeClass="active" spy={true} onClick={onClick}>{link}</Link>
    </li>
  )
}

export default NavLinks