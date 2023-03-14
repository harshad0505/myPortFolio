import React from "react";
import {SiJavascript, SiHtml5,SiCss3, SiReact, SiNodedotjs} from "react-icons/si"
import {AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineTwitter} from "react-icons/ai"
import myImage from "../images/myImage.jpg";

const About = () => {
  return (
    <div className="about-page">
      <div className="img-container">
        <img src={myImage} alt="profile" className="my-img" />
        <h1>Jegadeeshwaran S</h1>
        <br />
        <h3>Web Developer</h3>
      </div>
      <div className="about-content">
        <p className="about">
          Hi Everyone, I am jegadeeshwaran from TamilNadu, India. A fresh react
          Full Stack Developer . I want to become a successful person in the
          global environment where my contribution would enhance the growth of
          the organization.
        </p>
        <span>Professional Skillset</span>
        <div className="skill">
          <div className="box"> <SiJavascript className="box-icon"/> JavaScript</div>
          <div className="box"> <SiHtml5 className="box-icon"/> HTML</div>
          <div className="box"> <SiCss3 className="box-icon"/> CSS</div>
          <div className="box"> <SiReact className="box-icon"/> React</div>
          <div className="box"> <SiNodedotjs className="box-icon"/> NodeJs</div>
        </div>
        <span>Stay Connected</span>
        <footer className="social-links-container">
          <div className="social-links">
            <a href="http://github.com/Jegadeesh2" target="_blank" rel="noreferrer"> <AiFillGithub className="social-icon"/> </a>
            <a href="https://www.linkedin.com/in/jegadeesh-waran-s/" target="_blank" rel="noreferrer"> <AiFillLinkedin className="social-icon"/> </a>
            <a href="https://www.instagram.com/jegathecoder/" target="_blank" rel="noreferrer"> <AiFillInstagram className="social-icon"/> </a>
            <a href="https://twitter.com/jega_d_e_e_s_h" target="_blank" rel="noreferrer"> <AiOutlineTwitter className="social-icon"/> </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
