import React from "react";
import { Link } from "react-router-dom";
import "./reverseHorizontalCard.css";
import Button from "react-bootstrap/Button";

export default function ReverseHorizontalCard(props) {
  /* 
  PROPS------
  path: URL
  src: Image source
  alt: Alt text
  title: Card Title
  text: Card body text
  */

  return (
    <>
      <div className="horizontal-card-container">
        <div className="horizontal-card-wrapper">
          <div className="horizontal-card-text-container">
            <Link
              className="horizontal-cards-link"
              to={props.path}
              target="_blank"
            >
              <h4 className="horizontal-card-title">{props.title}</h4>
            </Link>
            <p className="horizontal-card-text">{props.text}</p>
            <Button
              className="horizontal-card-button"
              variant="info"
              href={props.href}
              target="_blank"
              block
            >
              Read More
            </Button>
          </div>
          <div className="horizontal-card-image-container">
            <Link
              className="horizontal-cards-link"
              to={props.path}
              target="_blank"
            >
              <img
                src={props.src}
                alt={props.alt}
                className="horizontal-card-image"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
