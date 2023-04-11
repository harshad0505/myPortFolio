import React from 'react'
import { Link } from 'react-router-dom';
import { BsFillInfoCircleFill} from "react-icons/bs"
import { AiFillHome, AiFillProject} from "react-icons/ai";

const Navbar = () => {
  return (
    <>
    <nav>
    <div className="navbar-container">
    <Link to="/" className='logo-link'>
      <h1 className='logo'>Jega..</h1></Link>
      <div className='links-container'>
      <Link to="/" className='link'> 
      <AiFillHome className='icons'/> 
      <p className='links-title'>Home</p></Link>
      <Link to="/about" className='link'>
      <BsFillInfoCircleFill className='icons'/> 
      <p className='links-title'>About</p></Link>
      <Link to="/projects" className='link'> 
      <AiFillProject className='icons'/> 
      <p className='links-title project-link'>Projects</p></Link>
      </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar