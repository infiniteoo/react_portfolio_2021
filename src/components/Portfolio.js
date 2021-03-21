import React from "react";
import netflix from "../images/covid_2.png";
import cityGuide from "../images/hidden_gems_ss.png";
import portfolio from "../images/business_dashboard.png";
import taskManager from "../images/pizza.png";
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
        <b>Demo:</b> <a className="hyper-link" href="/#" onClick={() => window.open("https://covid-track3r-app.herokuapp.com/", "_blank")}>https://covid-track3r-app.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" href="/#" onClick={() => window.open("https://github.com/ZiWang55/Covid_19_Tracker")}>https://github.com/ZiWang55/Covid_19_Tracker</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Troy Dorman Portfolio Examples"
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
        <b>Demo:</b> <a className="hyper-link" href="/#" onClick={() => window.open("https://ancient-waters-90063.herokuapp.com/", "_blank")}>https://ancient-waters-90063.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" href="/#" onClick={() => window.open("https://github.com/infiniteoo/google_maps_and_facebook_auth_project2", "_blank")}>https://github.com/infiniteoo/google_maps_and_facebook_auth_project2</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
      text: "Troy Dorman Portfolio Examples"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Portfolio Project
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={portfolio} alt="Portfolio Project..." />
        <p>Randomly generated, data-driven table and bar chart written in React with a dark mode switch. </p>
        <b>Demo:</b> <a className="hyper-link" href="/#" onClick={() => window.open("https://infiniteoo.github.io/react_business_dashboard/", "_blank")}>https://infiniteoo.github.io/react_business_dashboard/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" href="/#" onClick={() => window.open("https://github.com/infiniteoo/react_business_dashboard", "_blank")}>https://github.com/infiniteoo/react_business_dashboard</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Troy Dorman Portfolio Examples"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Troy Dorman
  const openPopupboxTaskManager = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={taskManager} alt=" React and Redux Project..." />
        <p>Online pizza ordering website built in React and deployed with Firebase.</p>
        <b>Demo:</b> <a className="hyper-link" href="/#" onClick={() => window.open("https://pizza-2025b.web.app/", "_blank")}>https://pizza-2025b.web.app/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" href="/#" onClick={() => window.open("https://github.com/infiniteoo/homework_week_19_budget_tracker", "_blank")}>https://github.com/infiniteoo/react_pizza</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigTaskManager = {
    titleBar: {
      enable: true,
      text: "Troy Dorman Portfolio Examples"
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
            <img className="portfolio-image" src={netflix} alt="Troy Dorman Portfolio Examples" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxTaskManager}>
            <img className="portfolio-image" src={taskManager} alt="Troy Dorman Portfolio Examples" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
            <img className="portfolio-image" src={cityGuide} alt="Troy Dorman Portfolio Examples" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img className="portfolio-image" src={portfolio} alt="Troy Dorman Portfolio Examples" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          
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
