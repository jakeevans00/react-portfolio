import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Wordle.png";
import projImg2 from "../assets/img/Trainclimbing.png";
import projImg3 from "../assets/img/Egypt.png";
import projImg4 from "../assets/img/byu.png";
import projImg5 from "../assets/img/alien.png";
import projImg6 from "../assets/img/coming.png";

export const Projects = () => {
  const projects_all = [
    {
      title: "Wordle Game",
      description: "Python app built with tkinter module. View in github!",
      imgUrl: projImg1,
    },
    {
      title: "Chalk Up",
      description:
        "Designed by and for climbers, this app provides goal tracking, progress visualizations, and a community chat feature. Uses web sockets, Node/Express, & MongoDB. Visit at startup.trainclimbing.com",
      imgUrl: projImg2,
    },
    {
      title: "Alien Slayer",
      description:
        "Exciting shooter game with cutting-edge gameplay. Just kidding, this was my first project in Python... takes me back :) Uses pygame module",
      imgUrl: projImg5,
    },
    {
      title: "Startup Management",
      description:
        "Django web application, developed for BYU's Center for Entrepreneurship and Technology. Facilitates team and KPI tracking",
      imgUrl: projImg4,
    },
    {
      title: "Egypt Researcher App",
      description:
        "ASP.net application deployed on AWS Elastic Beanstalk. Uses Boosted Trees algorithm and ML to help Egyptology researchers from BYU to predict mummy characteristics. View in github!",
      imgUrl: projImg3,
    },
    {
      title: "Spotify Analytics",
      description: "Coming soon! Analytics project using Spotify API",
      imgUrl: projImg6,
    },
  ];

  const projects_web = [
    {
      title: "Startup Management",
      description:
        "Django web application, developed for BYU's Center for Entrepreneurship and Technology. Facilitates team and KPI tracking",
      imgUrl: projImg4,
    },
    {
      title: "Egypt Researcher App",
      description:
        "ASP.net application deployed on AWS Elastic Beanstalk. Uses Boosted Trees algorithm and ML to help Egyptology researchers from BYU to predict mummy characteristics. View in github!",
      imgUrl: projImg3,
    },
    {
      title: "Chalk Up",
      description:
        "Designed by and for climbers, this app provides goal tracking, progress visualizations, and a community chat feature. Uses web sockets, Node/Express, & MongoDB. Visit at startup.trainclimbing.com",
      imgUrl: projImg2,
    },
  ];

  const projects_personal = [
    {
      title: "Wordle Game",
      description: "Python app built with tkinter module. View in github!",
      imgUrl: projImg1,
    },
    {
      title: "Chalk Up",
      description:
        "Designed by and for climbers, this app provides goal tracking, progress visualizations, and a community chat feature. Uses web sockets, Node/Express, & MongoDB. Visit at startup.trainclimbing.com",
      imgUrl: projImg2,
    },
    {
      title: "Alien Slayer",
      description:
        "Exciting shooter game with cutting-edge gameplay. Just kidding, this was my first project in Python... takes me back :) Uses pygame module",
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Games, web apps, creative projects, & more! Explore on my{" "}
              <a href="https://github.com/jakeevans00" className="text-light">
                Github
              </a>
            </p>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Web Dev</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Personal</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects_all.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects_web.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects_personal.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* <img className="background"></img> */}
    </section>
  );
};
