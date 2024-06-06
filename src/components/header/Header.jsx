import React, { useState } from "react";
import { motion, useScroll } from "framer-motion"
import "./header.css";

const Header = () => {
    const { scrollYProgress } = useScroll();
    window.addEventListener("scroll",function(){
        const header=this.document.querySelector(".header");
        if (this.scrollY >= 560) 
            header.classList.add("show-header");
        else
            header.classList.remove("show-header")
    })
      const[Toggle,showMenu] = useState(false);
      const[activeNav,setActiveNav]=useState("#home")
    return(<>
        <motion.div style={{ scaleX: scrollYProgress }} /> 
        <header className="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo">Lohith</a>

                <div className={Toggle ? "nav__menu show-menu" :"nav__menu"}>
                    <ul className="nav__list grid">

                        <li className="nav__item">
                            <a href="#home" onClick={()=> setActiveNav("#home")}
                             className={activeNav === "#home" ? "nav__link active-link":"nav__link"}>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" onClick={()=> setActiveNav("#about")}
                             className={activeNav === "#about" ? "nav__link active-link":"nav__link"}>
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" onClick={()=> setActiveNav("#skills")}
                             className={activeNav === "#skills" ? "nav__link active-link":"nav__link"}>
                                <i className="uil uil-file-alt nav__icon"></i>Skils
                            </a>
                        </li>

                        {/* <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i>Services
                            </a>
                        </li> */}

                        <li className="nav__item">
                            <a href="#projects" onClick={()=> setActiveNav("#projects")}
                             className={activeNav === "#projects" ? "nav__link active-link":"nav__link"}>
                                <i className="uil uil-scenery nav__icon"></i>Projects
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" onClick={()=> setActiveNav("#contact")}
                             className={activeNav === "#contact" ? "nav__link active-link":"nav__link"}>
                                <i className="uil uil-message nav__icon"></i>contact
                            </a>
                        </li>

                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
        </>
    )
} 
export default Header