import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Lohith Mandla</h1>
            <ul className="footer__list">
                <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>
            <div className="footer__social">
            <a href="https://www.linkedin.com/in/lohith-mandla/" className="footer__social-link" target="_blank"><i className="uil uil-linkedin-alt"></i></a>
            <a href="https://github.com/lohithmandla" className="footer__social-link" target="_blank"><i className="uil uil-github-alt"></i></a>
            <a href="https://www.instagram.com/lohith_mandla/" className="footer__social-link" target="_blank"><i className="uil uil-instagram"></i></a>
            </div>
            <span className='footer__copy'>&#169; Lohith Mandla. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer