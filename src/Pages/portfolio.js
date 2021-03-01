import React from "react";
import "./portfolio.css";
import ReverseHorizontalCard from "../Components/reverseHorizontalCard";
import HorizontalCard from "../Components/horizontalCard";

/* IMAGES */
import flappyBirds from "../images/flappy_birds.png";
import cartpole from "../images/moab_post_training.gif";
import kaggle_house from "../images/kaggle_housing.jpg";
import stock_scraper from "../images/stock_scraper.jpg";
import react_calc from "../images/react_calculator.png";

export default function Portfolio() {
  return (
    <>
      <div className="portfolio-card-container">
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
          path="/calculator"
          src={react_calc}
          alt="Creating A Calculator in React"
          title="Creating A Calculator in React"
          text="I created a fully functional React/Javascript calculator (which takes a little
            more logic than you might imagine!)."
        />
        <ReverseHorizontalCard
          path={{
            pathname:
              "https://github.com/Tropskee/Kaggle-Housing-Price-ML-Model",
          }}
          src={kaggle_house}
          alt="Kaggle Machine Learning House Price Predictor"
          title="Machine Learning House Price Predictor"
          text="I created a machine learning model that I used to get into top 1% in the
          housing price competition on Kaggle."
        />
        <HorizontalCard
          path={{ pathname: "https://github.com/Tropskee/Quick-Stock-Scraper" }}
          src={stock_scraper}
          alt="Python Quick Stock Scraping Script"
          title="Quick + Easy Python Stock Scraper"
          text="Very simple stock scraper that outputs the current stock price in
          real time. Simply change the stock ticker in the code and you can stay up
          to date with how the stock is performing that day."
        />
      </div>
    </>
  );
}
