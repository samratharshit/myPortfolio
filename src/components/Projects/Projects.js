import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jack from "../../Assets/Projects/jack.png";
import robo from "../../Assets/Projects/robo.png";
import dhf from "../../Assets/Projects/dhf.png";
import hind from "../../Assets/Projects/hind.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dhf}
              isBlog={false}
              title="DHF Cafe"
              description="DHF Cafe is next generation Food Ordering and delivery app. It is designed using React Native as the Frontend Library.It incorporates Admin as well as User roles inside a single app. Redux, React-Navigation and Nativebase have been used in the front end. Backend is developed using MnogoDB,Express,Node.js"
              ghLink="https://github.com/samratharshit/dhf-frontend"
              demoLink="https://play.google.com/store/apps/details?id=com.harshit701.dhfcafe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hind}
              isBlog={false}
              title="Hind Shopping Store"
              description="This is a full stack furniture shopping website.I have used React as a Frontend Library along with Tailwind CSS for designing the site. The Backend  is designed using Node, Express and Firebase."
              ghLink="https://play.google.com/store/apps/details?id=com.harshit701.JackTheGiant"
              demoLink="https://play.google.com/store/apps/details?id=com.harshit701.JackTheGiant"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jack}
              isBlog={false}
              title="Jack The Giant"
              description="This a Single player Jumping and Arcade category game developed in Unity using C#.The game has various difficulty level options as well.."
              ghLink="https://play.google.com/store/apps/details?id=com.harshit701.JackTheGiant"
              demoLink="https://play.google.com/store/apps/details?id=com.harshit701.JackTheGiant"              
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robo}
              isBlog={false}
              title="Robofriends"
              description="This is a cool minimalist web app wherein we can generate random robots implementing search feature."
              ghLink="https://github.com/samratharshit/robofriends"
              demoLink="https://samratharshit.github.io/robofriends/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
