import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"

import leetcode from "../assets/img/leetcode.png"
import gfg from '../assets/img/gfg.png'
import codechef from "../assets/img/CodeChef_idFhzUjQZL_0.png"
import chart from "../assets/img/chart.svg"
import clinical_ai from "../assets/img/clinical_AI.svg"
import traffic from "../assets/img/traffic_data.svg"
export const Projects=()=>{
    

  const projects = [
    {
      title: "Clincal AI",
      description: "A full-stack healthcare web application that enables patients to book appointments via voice commands and automatically assigns the most suitable doctor based on the patient’s symptoms using a machine learning model.",
      imgUrl: clinical_ai,
      link: "https://github.com/dhruv284/clinical_ai",
    },
    {
      title: "Real State Price Detection",
      description: "This project demonstrates the implementation of a Linear Regression model for predictive analysis.",
      imgUrl: chart,
      link: "https://github.com/dhruv284/real-state-price-detection",
    },
    {
      title: "Traffic Data Anyalsis",
      description: "Developed a traffic sign classification system using Convolutional Neural Networks (CNNs) on the German Traffic Sign Recognition Benchmark (GTSRB) dataset to accurately identify and categorize traffic signs from images.",
      imgUrl: traffic,
      link: "https://github.com/dhruv284/traffic-signal-data-analysis",
    },
    
    
  ];
  const profiles = [
    {
      title: "Leetcode",
      description: "600+ DSA Problems Solved",
      imgUrl: leetcode,
      link: 'https://leetcode.com/u/dhruv_agarwal_/',
    },
    {
      title: "GFG",
      description: "200+ DSA Problems Solved",
      imgUrl: gfg,
      link: "https://www.geeksforgeeks.org/user/agarwaldhruv284/"
    },
    {
      title: "CodeChef",
      description: "3* On Codechef",
      imgUrl: codechef,
      link: "https://www.codechef.com/users/agarwaldhruv28"
    },
  ];

    return (
        <section>
            <Container>
                <Row>
                    <Col>
                    <h2>Projects / Coding Profiles</h2>
                    <p>Explore my featured projects that demonstrate my skills in Full Stack Development, Machine Learning, and Data Science.
You can also check my competitive coding profiles to see how I apply these skills to solve real-world problems.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first"> Projects </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Coding Profiles</Nav.Link>
                        </Nav.Item>
                        
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project,index)=>{
                                        return(
                                            <ProjectCard key={index}
                                            {...project}/>
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row>
                                {
                                    profiles.map((project,index)=>{
                                        return(
                                            <ProjectCard key={index}
                                            {...project}/>
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">lorem ipsum</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
