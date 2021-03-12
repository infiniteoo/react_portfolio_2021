import React from "react";
import netflix from "../images/covid-tracker_ss.png";
import cityGuide from "../images/hidden_gems_ss.png";
import portfolio from "../images/workout_tracker_ss.png";
import taskManager from "../images/budget_planner_ss.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Pofrfolio = () => {

  // Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={netflix} alt="Covid-19 Data Tracker" />
        
        <p>Real-time COVID-19 data tracker written with the MERN stack.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://covid-track3r-app.herokuapp.com/", "_blank")}>https://covid-track3r-app.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ZiWang55/Covid_19_Tracker")}>https://github.com/ZiWang55/Covid_19_Tracker</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Netflix clone project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }
  
  // City Guide App
  const openPopupboxCityGuide = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={cityGuide} alt="City Guide App Project..." />
        <p>Interactive Google Map with persistent backend and Facebook OAuth authentication.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://ancient-waters-90063.herokuapp.com/", "_blank")}>https://ancient-waters-90063.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/infiniteoo/google_maps_and_facebook_auth_project2", "_blank")}>https://github.com/infiniteoo/google_maps_and_facebook_auth_project2</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
      text: "City Guide App project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Portfolio Project
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={portfolio} alt="Portfolio Project..." />
        <p>NoSQL-powered workout tracker which allows the user to view, create, and track daily workouts.  Also features data-driven pie, bar, and line charts for visualization. </p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://aqueous-reef-38770.herokuapp.com/", "_blank")}>https://aqueous-reef-38770.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/infiniteoo/nosql_workout_tracker/", "_blank")}>https://github.com/infiniteoo/nosql_workout_tracker/</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Poftfolio React and Material UI project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Task Manager React and Redux Project
  const openPopupboxTaskManager = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={taskManager} alt=" React and Redux Project..." />
        <p>Budget tracker which features offline access and visualized data.  Also utilizes IndexedDB, Cache API, Service Workers and MongoDB.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://fast-inlet-48607.herokuapp.com/", "_blank")}>https://fast-inlet-48607.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/infiniteoo/homework_week_19_budget_tracker", "_blank")}>https://github.com/infiniteoo/homework_week_19_budget_tracker</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigTaskManager = {
    titleBar: {
      enable: true,
      text: "Task Manager React and Redux project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
            <img className="portfolio-image" src={netflix} alt="Netflix Clone Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
            <img className="portfolio-image" src={cityGuide} alt="City Guide Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img className="portfolio-image" src={portfolio} alt="Portfolio React and Material UI Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxTaskManager}>
            <img className="portfolio-image" src={taskManager} alt="Task Manager React and Redux Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigCityGuide} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigTaskManager} />
    </div>
  )
}

export default Pofrfolio;
