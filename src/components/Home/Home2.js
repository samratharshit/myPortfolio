import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/harshit.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a Full Stack Web as well as App Developer.
              <br />
              <br />I am fluent in languages like
              <i>
                <b className="purple"> C++ and Javascript. </b>
              </i>
              <br />
              <br />
              My field of Interest is to Develop highly interactive Front end / User Interfaces &nbsp;
              <i>
                <b className="purple"> for Web and mobile applications </b> and
                also developing backends using {" "}
                <b className="purple">
                 the MERN Stack. 
                </b>
              </i>
              <br />
              <br />
              I use React for front-end web development. I think it is one of  <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  the best library for front-end development.
                </b>
              </i>
              &nbsp; For Android and IOS Apps, I use 
              <i>
                <b className="purple"> React Native</b>
              </i>
            </p>
          </Col>
          <Col md={3} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/samratharshit"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/theshm2303"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/harshit-mishra-777107203/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/theshm23/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
