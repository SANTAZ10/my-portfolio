import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_u1szqsf", "template_asljoe9", form.current, "BLE0V5GYE3iYCfztt")
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>fagbolasamuel.sf@gmail.com</h5>
            <a href="mailto:fagbolasamuel.sf@gmail.com" target={"blank"}>
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>Santaz</h5>
            <a
              href="https://twitter.com/messages/compose?recipient_id=1104391884275965953"
              target={"blank"}
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>Santaz</h5>
            <a href="https://wa.me/+2348111211953" target={"blank"}>
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="7" required></textarea>
          <button type="submit" className=" formBtn bg-[#707b99] text-white px-4 py-2 rounded-md hover:bg-white hover:text-[#070714]">
            Send Message
          </button>
        </form>
        <a className='scroll__up' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Scroll Up</a>
        
      </div>
    </section>
  );
};

export default Contact;
