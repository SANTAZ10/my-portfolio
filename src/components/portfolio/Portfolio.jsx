import React from "react";
import "./portfolio.css";
// import IMG1 from "../../assets/portfolio1.jpg";
// import IMG2 from "../../assets/portfolio2.jpg";
// import IMG3 from "../../assets/portfolio3.jpg";

const data = [
  {
    id: 1,
    image: "https://cdn.dribbble.com/userupload/4754373/file/original-69f34e248c3f5c678c3355a670f4a550.jpg?compress=1&resize=1024x768",
    title: "Project 1",
    github: "https://github.com/SANTAZ10/skysphere.git",
    demo: "https://skysphere.netlify.app/",
  },
  // Add more objects as needed
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title,github,demo}) => {
            return(
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href={github} className="btn gpt_button" target="{blank}">
              Github
            </a>
            <a href={demo} className="btn gpt_button btn-primary" target="{blank}">
              Demo
            </a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
