import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'



const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#/" className='footer__logo'>SANTAZ</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; SANTAZ</small>
      </div>
    </footer>
  )
}

export default Footer