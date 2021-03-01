import React from "react";
// import Carousel from "./carousel";
import ReverseHorizontalCard from "../Components/reverseHorizontalCard";
import HorizontalCard from "../Components/horizontalCard";

/* IMAGES FOR CARDS */
import portfolioCard from "../images/stock_portfolio.jpg";
import resumeCard from "../images/stock_resume_type.jpg";
import aboutCard from "../images/stock_about.jpg";
/* End IMAGES */

/* IMAGES FOR PROJECTS*/
import flappyBirds from "../images/flappy_birds.png";
import cartpole from "../images/moab_post_training.gif";
import kaggle_house from "../images/kaggle_housing.jpg";
import stock_scraper from "../images/stock_scraper.jpg";
import Card from "./heroCard";
import "./heroSection.css";

export default function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="personal-details">
          <h2> Andy Czeropski</h2>
          <p>Data Scientist. Engineer. Software Developer. </p>
        </div>
      </div>
      <div className="greeting">
        <p id="hero-thanks">Thanks for visiting my personal website.</p>
        <p> (Take a look around and feel free to leave some feedback.)</p>
      </div>
      <div className="card-container">
        <Card
          path="/portfolio"
          src={portfolioCard}
          title="Portfolio"
          text="Check out some of the projects that I've worked on, and take a look at
          any projects that are currently on-going!"
          buttonText="Go to Portfolio"
        />
        <Card
          path="/resume"
          src={resumeCard}
          title="Resume"
          text="Check out my interactive resume - which includes my experience, roles, education, and more!"
          buttonText="Go to Resume"
        />
        <Card
          path="/about"
          src={aboutCard}
          title="About Me"
          text="Take the opportunity to find out a little more about me - including hobbies, interests, and how to get in touch with me!"
          buttonText="Go to About"
        />
      </div>
      <div className="stock-code-photo" />
      <div className="hero-lower-container">
        <div className="carousel-about">
          <h2>Here are some of my latest projects... </h2>
        </div>
        <HorizontalCard
          path={{ pathname: "https://github.com/Tropskee/NeatFlappyBird" }}
          src={flappyBirds}
          alt="Reinforcement Learning via Flappy Birds"
          title="Flappy Birds Reinforcement Learning"
          text="I employ reinforcement learning to beat the classic game
          of Flappy Birds using the NEAT (NeuroEvolution of Augmenting Topologies) algorithm."
        />
        <ReverseHorizontalCard
          path={{ pathname: "https://github.com/Tropskee/NEAT_CartPole" }}
          src={cartpole}
          alt="Reinforcement Learning via CartPole and OpenAI"
          title="CartPole Reinforcement Learning"
          text="I employ reinforcement learning to beat openAI's
          CartPole game using the NEAT (NeuroEvolution of Augmenting Topologies) algorithm."
        />
        <HorizontalCard
          path={{
            pathname:
              "https://github.com/Tropskee/Kaggle-Housing-Price-ML-Model",
          }}
          src={kaggle_house}
          alt="Kaggle Machine Learning House Price Predictor"
          title="Machine Learning House Price Predictor"
          text="I created a machine learning model that I used to get into top 1% in the
          housing price competition on Kaggle"
        />
      </div>
    </>
  );
}
