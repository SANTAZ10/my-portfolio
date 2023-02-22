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
    github: "https://github.com/user/project1",
    demo: "https://example.com/project1-demo",
  },
  {
    id: 2,
    image: "https://cdn.dribbble.com/userupload/4757561/file/original-c4d786f30df9fdb53239217c39900603.png?compress=1&resize=1024x768",
    title: "Project 2",
    github: "https://github.com/user/project2",
    demo: "https://example.com/project2-demo",
  },
  {
    id: 3,
    image: "https://cdn.dribbble.com/userupload/4712306/file/original-0f121b8f65bd6bda9ad8135d92babf64.png?compress=1&resize=1024x768",
    title: "Project 3",
    github: "https://github.com/user/project3",
    demo: "https://example.com/project3-demo",
  }
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
