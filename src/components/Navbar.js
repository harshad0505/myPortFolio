import React from 'react'
import { Link } from 'react-router-dom';
import { UilEstate , UilUserCheck ,UilCheckCircle  } from '@iconscout/react-unicons'


const Navbar = () => {
  return (
    <>
    <nav>
    <div className="navbar-container">
    <Link to="/" className='logo-link'>
      <h1 className='logo'>PortFolio</h1></Link>
      <div className='links-container'>
      <Link to="/" className='link'> 
      <UilEstate className='icons'/> 
      <p className='links-title'>Home</p></Link>
      <Link to="/about" className='link'>
      < UilUserCheck  className='icons'/> 
      <p className='links-title'>About</p></Link>
      <Link to="/projects" className='link'> 
      <UilCheckCircle className='icons'/> 
      <p className='links-title project-link'>Projects</p></Link>
      </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar