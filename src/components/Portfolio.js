import React from "react";
import Burger from "../assets/burger.jpg";
import Places from "../assets/places.png";
import Profile from '../assets/portfolio.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Portfolio = () => {

    const openPopUpBoxBurger = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={Burger} alt="burger.." />
            <p>Build a dynamic single page application called Burger Builder</p>
            <b>GitHub:</b> <a href className="hyper-link" onClick={() => window.open("https://github.com/satyachiratla/burger_builder")}>https://github.com/satyachiratla/burger_builder</a>
            <br />
            <b>Demo:</b> <a href className="hyper-link" onClick={() => window.open("https://satyachiratla.github.io/burger_builder/")}>https://satyachiratla.github.io/burger_builder/</a>
            </>
        )
        PopupboxManager.open({ content });
    }

    const popUpBoxConfigureBurger = {
        titleBar: {
            enable: true,
            text: 'Burger Project'
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopUpBoxPlaces = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={Places} alt="places.." />
            <p>Created a saving places app that you can visit in future.</p>
            <b>GitHub:</b> <a href className="hyper-link" onClick={() => window.open("https://github.com/satyachiratla/places/tree/master")}>https://github.com/satyachiratla/places/tree/master</a>
            <br />
            <b>Demo:</b> <a href className="hyper-link" onClick={() => window.open("https://vivekchowdary.herokuapp.com/")}>https://vivekchowdary.herokuapp.com/</a>
            </>
        )
        PopupboxManager.open({ content });
    }

    const popUpBoxConfigurePlaces = {
        titleBar: {
            enable: true,
            text: 'Places Project'
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopUpBoxPortfolio = () => {
      const content = (
          <>
          <img className="portfolio-image-popupbox" src={Profile} alt="profile.." />
          <p>My Profile</p>
          <b>GitHub:</b> <a href className="hyper-link" onClick={() => window.open("")}></a>
          <br />
          <b>Demo:</b> <a href className="hyper-link" onClick={() => window.open("")}></a>
          </>
      )
      PopupboxManager.open({ content });
  }

  const popUpBoxConfigurePortfolio = {
      titleBar: {
          enable: true,
          text: 'Portfolio Project'
      },
      fadeIn: true,
      fadeInSpeed: 500
  }

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
        <div className="portfolio-img-box" onClick={openPopUpBoxBurger}>
          <img className="portfolio-img" src={Burger} alt="burger..." />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        {/* , */}
        <div className="portfolio-img-box" onClick={openPopUpBoxPlaces}>
          <img className="portfolio-img" src={Places} alt="places..." />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
         {/* , */}
         <div className="portfolio-img-box" onClick={openPopUpBoxPortfolio}>
          <img className="portfolio-img" src={Profile} alt="portfolio..." />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
      </div>
      </div>
      <PopupboxContainer {...popUpBoxConfigureBurger} />
      <PopupboxContainer {...popUpBoxConfigurePlaces} />
      <PopupboxContainer {...popUpBoxConfigurePortfolio} />
    </div>
  );
};

export default Portfolio;
