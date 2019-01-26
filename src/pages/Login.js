import React from "react";
import Jumbotron from "../components/Jumbotron";
//import Container from "../components/Container";
//import Row from "../components/Row";
//import Col from "../components/Col";

function Login() {
  return (
    <div>
      <Jumbotron backgroundImage="../../public/jumboBack.jpg">
        <h1>TableIt</h1>
        <h2>Find dinner tonight... and tomorrow night.</h2>
      </Jumbotron>
      {/* <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To TabeIt!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Yolo #swagginainteasy
            </p>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default Login;