import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/hiIMG.png";
import HeaderSocials from "./HeaderSocials";
import CV from '../../assets/cv.pdf'

const Header = () => {

  return (
    <header className="px-10"> 

      <section className="min-h-screen mt-0">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-2xl">SANTAZ</h1>
          <ul className="items-center">
            <li>
              <a
              className="bg-[#707b99] text-white px-4 py-2 rounded-md hover:bg-white hover:text-[#070714]"
              href={CV} download>Resume</a>
            </li>
          </ul>
        </nav>
        <div className="container header__container" >
          <h5>Hello I'm</h5>
          <h1>SANTAZ</h1>
          <h5 className="text-light">A Full-Stack Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <img src={ME} alt="" />
          </div>

          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </section>
    </header>
  );
};

export default Header;
