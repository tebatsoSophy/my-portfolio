import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack E-commerce solution with React & Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio built with modern web technologies",
      technologies: ["React", "Bootstrap", "CSS3"],
      category: "web"
    },
    {
      title: "Task Management App",
      description: "Productivity application with real-time updates",
      technologies: ["React", "Firebase", "Material-UI"],
      category: "mobile"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data analysis and reporting",
      technologies: ["D3.js", "Python", "Flask"],
      category: "data"
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking application",
      technologies: ["React Native", "Redux", "Firebase"],
      category: "mobile"
    },
    {
      title: "API Integration Service",
      description: "RESTful API service with authentication and documentation",
      technologies: ["Express.js", "JWT", "Swagger"],
      category: "web"
    },
  ];

  const webProjects = projects.filter(project => project.category === "web");
  const mobileProjects = projects.filter(project => project.category === "mobile");
  const dataProjects = projects.filter(project => project.category === "data");

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of my recent projects that showcase my skills in web development, mobile applications, and data visualization. Each project represents unique challenges and solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mobile Apps</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Data Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          webProjects.map((project, index) => {
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
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          mobileProjects.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          dataProjects.map((project, index) => {
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
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}