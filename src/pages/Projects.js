import React from "react";
import { SiJavascript, SiReact, SiNetlify } from "react-icons/si";
import { UilGithub,UilBrowser,UilReact,UilPackage ,UilTwitter ,UilInstagram,UilLinkedin ,UilHtml5 ,UilCss3Simple,UilJavaScript} from '@iconscout/react-unicons'

const Projects = () => {
  return (
    <div className="project-page">
      <div className="project-page-heading">
        <h1>
          My recent <span>Works</span>
        </h1>
        <p>Here are a few projects i've worked on.</p>
      </div>
      <section className="projects">
        <div className="single-project">
          <SiReact className="project-logo" />
          <div className="project-description">
            <span className="project-title">Food Cart</span>
            <div className="project-link-buttons">
              <a
                href="https://github.com/harshad0505/pizzaShop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="link-btn">
                  <UilGithub />
                  Code URL
                </button>
              </a>
              <a
                href="https://online0shop.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="link-btn">
                  <UilBrowser />
                  Live URL
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="single-project">
          <SiReact className="project-logo" />
          <div className="project-description">
            <span className="project-title">Movie Finder</span>
            <div className="project-link-buttons">
              <a
                href="https://github.com/harshad0505/movie"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="link-btn">
                  <UilGithub />
                  Code URL
                </button>
              </a>
              <a
                href="https://moviedatadb.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="link-btn">
                  <UilBrowser />
                  Live URL
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="single-project">
          <SiReact className="project-logo" />
          <div className="project-description">
            <span className="project-title">Blog App</span>
            <div className="project-link-buttons">
              <a
                href="https://github.com/harshad0505/BlogApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="link-btn">
                  <UilGithub />
                  Code URL
                </button>
              </a>
              <a
                href="https://nyblogs.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="link-btn">
                  <UilBrowser />
                  Live URL
                </button>
              </a>
            </div>
          </div>
        </div>
     
        <div className="single-project">
          <SiReact className="project-logo" />
          <div className="project-description">
            <span className="project-title">Tic Tak</span>
            <div className="project-link-buttons">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="link-btn">
                  <UilGithub />
                  Code URL
                </button>
              </a>
              <a
                href="https://tictacapp.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="link-btn">
                  <UilBrowser />
                  Live URL
                </button>
              </a>
            </div>
          </div>
        </div>
       
       
        <div className="single-project">
          <SiReact className="project-logo" />
          <div className="project-description">
            <span className="project-title">Money Transfer</span>
            <div className="project-link-buttons">
              <a
                href="https://github.com/harshad0505/MoneyTansfer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="link-btn">
                  <UilJavaScript />
                  Code URL
                </button>
              </a>
              <a
                href="https://bankappp.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="link-btn">
                  <UilBrowser />
                  Live URL
                </button>
              </a>
            </div>
          </div>
        </div>


  
        <div className="single-project">
          <SiReact className="project-logo" />
          <div className="project-description">
            <span className="project-title">CockTail Api</span>
            <div className="project-link-buttons">
              <a
                href="https://github.com/harshad0505/CocktailApi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="link-btn">
                  <UilJavaScript />
                  Code URL
                </button>
              </a>
              <a
                href="#"
                rel="noopener noreferrer"
              >
                <button className="link-btn">
                  <UilBrowser />
                  Live URL
                </button>
              </a>
            </div>
          </div>
        </div>








      </section>
    </div>
  );
};

export default Projects;
