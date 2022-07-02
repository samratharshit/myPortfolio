
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CodingCard from "./CodingCard";

function Coding(){
    return (
        <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "10px" }}>
              My Problem Solving <strong className="purple">Skills</strong>
            </h1>
          </Col>
        </Row>
       <CodingCard />
      </Container>
    </Container>
    );
}

export default Coding;