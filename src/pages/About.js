import React from "react";
import { UilGithub,UilReact,UilPackage ,UilTwitter ,UilInstagram,UilLinkedin ,UilHtml5 ,UilCss3Simple,UilJavaScript} from '@iconscout/react-unicons'
import homePic from "../images/img.jpg";



const About = () => {
  return (
    <div className="about-page">
      <div className="img-container">
        <img  src={homePic} alt="profile" className="my-img" />
        <h1>Harshad Chavan</h1>
        <br />
        <h3>Web Developer</h3>
      </div>
      <div className="about-content">
        <p className="about">
          Hi Everyone, I am Harshad from Mumbai, India. A fresh react
          Full Stack Developer . Developed UI Application and Web Application Using HTML, CSS, JavaScript, and React JS Knowledge of creating user Control, web forms and client-side validations using JavaScript And React Knowledge of SQL Db CRUD (Create Read Update Delete) Operations Used NODE Package manager (NPM) to manage or install the Node JS modules like react-Router.Hands-on experience in maintaining the repository using Git and GitHub.
        </p>
        <span>Professional Skillset</span>
        <div className="skill">
          <div className="box">
            {" "}
            <UilJavaScript className="box-icon" /> JavaScript
          </div>
          <div className="box">
            {" "}
            <UilHtml5 className="box-icon" /> HTML
          </div>
          <div className="box">
            {" "}
            <UilCss3Simple className="box-icon" /> CSS
          </div>
          <div className="box">
            {" "}
            <UilReact className="box-icon" /> React
          </div>
          
        
          <div className="box">
            {" "}
            <UilPackage className="box-icon" /> NPM
          </div>
          <div className="box">
            {" "}
            <UilGithub className="box-icon" /> GIT
          </div>
          
        </div>
        <span>Stay Connected</span>
        <footer className="social-links-container">
          <div className="social-links">
            <a
              href="https://github.com/harshad0505"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <UilGithub className="social-icon" />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/harshad-chavan-97b8b9258/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <UilLinkedin className="social-icon" />{" "}
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <UilInstagram className="social-icon" />{" "}
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <UilTwitter  className="social-icon" />{" "}
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
