/* Unused for now, might incorporate later */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./carousel.css";
import Carousel from "react-bootstrap/Carousel";
import carouselImage1 from "../images/flappy_birds.png";
import carouselImage2 from "../images/moab_post_training.gif";
import carouselImage3 from "../images/ContactMe_carousel.jpg";

export default function ProjectCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Link
          to={{ pathname: "https://github.com/Tropskee/NeatFlappyBird" }}
          target="_blank"
        >
          <img
            className="carousel d-block w-100"
            src={carouselImage1}
            alt="NEAT Flappy Birds slide"
          />
        </Link>
        <Carousel.Caption className="carousel--caption">
          <h3>NEAT Flappy Birds</h3>
          <p>Beating flappy birds using reinforcement learning!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link
          to={{ pathname: "https://github.com/Tropskee/NEAT_CartPole" }}
          target="_blank"
        >
          <img
            className="carousel d-block w-100"
            src={carouselImage2}
            alt="Cart Pole Simulator slide"
          />
        </Link>

        <Carousel.Caption className="carousel--caption">
          <h3>Pole Cart Simulator</h3>
          <p>Balancing a pole on a cart using reinforcement learning!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="mailto:acz0919@yahoo.com">
          <img
            className="carousel d-block w-100"
            src={carouselImage3}
            alt="Contact me slide"
            href="mailto:acz0919@yahoo.com"
          />
        </a>
      </Carousel.Item>
    </Carousel>
  );
}
