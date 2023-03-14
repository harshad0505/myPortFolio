import React from "react";
import {Typewriter} from "react-simple-typewriter"
import homePic from "../images/homeImage.svg"

const Home = () => {
  return ( 
    <div className="home-page">
      <div className="home-content">
        <p className="greetings">Hi There ! <span className="wave"> 👋 </span></p>
        <p className="name">I'M <span> JEGADEESHWARAN</span></p>
        <p className="role">  <Typewriter
            words={['FULL STACK DEVELOPER', "FRONT END DEVELOPER", 'MERN STACK DEVELOPER']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={150}
            deleteSpeed={40}
            delaySpeed={2000}
          /></p>
      </div>
      <div className="home-image">
        <img src={homePic} alt="Developer-Table" className="home-pic"/>
      </div>
    </div>
  )
};

export default Home;
