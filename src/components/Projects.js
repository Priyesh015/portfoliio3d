import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Virtual Assistant",
      description: "An interactive Voice Assistant for PC",
      imgUrl: projImg1,
    },
    {
      title: "Food Ordering Web application",
      description: "project involved creating a user-friendly interface for food ordering",
      imgUrl: projImg2,
    },
    {
      title: "Netflix Landing page",
      description: "Netflix clone with HTML,CSS and Javascript",
      imgUrl: projImg3,
    },
    {
      title: "Apple Vision Pro Website Clone",
      description: "Apple Vision website from scratch using HTML, CSS, and JavaScriptt",
      imgUrl: projImg4,
    },
    {
      title: "Hospital Management System",
      description: "It captures and stores the medical history, treatment required, details of their previous visits, upcoming appointments.",
      imgUrl: projImg5,
    },
    {
      title: "3D Animted portfolio",
      description: "Recently made a 3D portfolio using Reactjs + Vite + TailwindCSS + Many other React libraries",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p style={{ textAlign: 'justify' }}>I have successfully developed and contributed to several projects that demonstrate my diverse technical skills and problem-solving abilities. One of my key projects is an interactive Virtual Assistant for PC, which utilizes speech recognition to convert audio into text and leverages the Google recognizer for searching, along with Pyttsx3 for audio output. This assistant can send emails, provide weather updates, and perform Google searches based on voice commands. Another significant project is a Hospital Management System designed to capture and store medical history, manage treatment plans, and track appointments, ensuring efficient patient care and record-keeping. Additionally, I developed a Food Ordering Web Application using ReactJS, where I focused on creating a user-friendly interface, integrating real-time restaurant data via Swiggy's API, and implementing seamless navigation across different pages. Recently, I created a Netflix Landing Page clone using HTML, CSS, and JavaScript, as well as a 3D portfolio utilizing ReactJS, Vite, TailwindCSS, and various other React libraries, showcasing my front-end development and UI/UX design capabilities.
</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
