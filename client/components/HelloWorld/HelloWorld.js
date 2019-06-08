import React from "react";
import "./helloWorld.style.scss";
import { Jumbotron, Container } from "reactstrap";

const HelloWorld = () => (
  <div className="hwWrapper">
    <Jumbotron fluid style={{ backgroundColor: "inherit" }}>
      <Container fluid>
        <h1 style={{ color: "#3f3f3f" }}>Welcome to Qdex Pro</h1>
        <p className="lead d-flex justify-content-center">
          Automation begins here..
        </p>
      </Container>
    </Jumbotron>
  </div>
);
{
  /* <div className="hwWrapper"> Landing Page </div>; */
}
export default HelloWorld;
