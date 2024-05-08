import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState,setToggleState]= useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }
  return (
    <section className='qualification section'>
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">MY personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" :"qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" :"qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>
            </div>
            <div className="qualification__sections">
                <div className={toggleState ===1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.com (computers)</h3>
                            <span className="qualification__subtitle">
                                Rayalaseema university
                                kurnool
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2019 - 2022
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Intermediate</h3>
                            <span className="qualification__subtitle">
                                Sri krishana jr college
                                kurnool
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2016 - 2018
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">SCC</h3>
                            <span className="qualification__subtitle">
                                 ZPHS R.colony<br/>
                                 kurnool
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2015 - 2016
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>

                <div className={toggleState ===2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Python Devloper</h3>
                            <span className="qualification__subtitle">
                                Aptsol global
                                Hyderbad
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2023 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification