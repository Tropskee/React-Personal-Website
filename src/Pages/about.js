import React from "react";
import Button from "react-bootstrap/Button";
import "./about.css";

export default function About() {
  return (
    <>
      <div classname="about-container">
        <div className="about-wrapper">
          <div className="about-text">
            <h2>About Andy.</h2>
            <p>
              I have a bit of a diverse background... I have a degree in
              mechanical engineering, a career in data science, and a passion
              for software development. Beyond that I am an automotive
              enthusiast, and an avid camper/outdoorsman. Right now I am
              balancing my career by day, while working on various startups by
              night (and weekends).
            </p>
          </div>
          <div className="interests-text">
            <h2>Professional Interests.</h2>
            <p>
              I have been increasingly interested with the field of
              reinforcement learning, as can be seen in my recent personal
              projects. I have been implementing the NEAT algorithm to help AI
              agents beat simple mobile games. Apart from RL, I am very
              interested in engineering design/development within the automotive
              industry. I will never turn down a fun computer vision project or
              an opportunity to develop a clever machine learning application,
              the more challenging the better.
            </p>
          </div>
          <div className="about-contact">
            <p>
              <hr id="about-hr" />
              If you have any questions, or just want to chat feel free to hit
              the "contact" button in the navbar/footer and drop me a line.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
