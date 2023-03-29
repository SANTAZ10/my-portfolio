import React from "react";
import "./about.css";
import ME from "../../assets/wave.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Work Experience</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Experience</h5>
              <small>50+ Projects Completed</small>
            </article>
          </div> */}

          <p className=" text-justify">
          Hi, I'm Santaz, a frontend developer with 2 years of experience in crafting beautiful and functional websites. With a passion for design and a keen eye for detail, I strive to create engaging user experiences that leave a lasting impression. I'm always eager to learn new technologies to stay ahead of the curve. Let's work together to bring your vision to life!
          </p>

          <a href="#contact" className=' bg-[#707b99] text-white px-4 py-2 rounded-md hover:bg-white hover:text-[#070714]'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
