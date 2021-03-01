import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function HeroCards(props) {
  return (
    <Card className="card-item" style={{ width: "22rem" }}>
      <Link className="cards-link" to={props.path}>
        <Card.Img className="card-image" variant="top" src={props.src} />
      </Link>
      <Card.Body className="card-body">
        <Link className="cards-link" to={props.path}>
          <Card.Title className="card-title">{props.title}</Card.Title>
        </Link>
        <Card.Text className="card-text">{props.text}</Card.Text>
        <Button className="card-button" variant="primary" href={props.path}>
          {props.buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}
