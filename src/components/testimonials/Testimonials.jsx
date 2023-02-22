import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';


const Data = [
  {
    avatar: AVTR1,
    name: "John Doe",
    review: "I had a great experience with this company. The staff was friendly and helpful, and the product was exactly what I was looking for."
  },
  {
    avatar: AVTR2,
    name: "Jane Smith",
    review: "I highly recommend this company to anyone looking for high-quality products and excellent customer service. I will definitely be a repeat customer!"
  },
  {
    avatar: AVTR3,
    name: "John Doe",
    review: "I had a great experience with this company. The staff was friendly and helpful, and the product was exactly what I was looking for."
  },
  {
    avatar: AVTR4,
    name: "Bob Johnson",
    review: "I was impressed by the professionalism and expertise of the staff at this company. They helped me find exactly what I needed, and I couldn't be happier with my purchase."
  }
];




const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Feedback from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          Data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt={name} />
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="client__Review">{review}
          </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
};

export default Testimonials;
