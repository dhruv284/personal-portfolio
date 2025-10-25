import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import  projImg1 from "../assets/img/project-img1.png"
import  projImg2 from "../assets/img/project-img2.png"
import  projImg3 from "../assets/img/project-img3.png"
import leetcode from "../assets/img/leetcode.png"
import gfg from '../assets/img/gfg.png'
import codechef from "../assets/img/CodeChef_idFhzUjQZL_0.png"
export const Projects=()=>{
    

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, iste provident odit sit perspiciatis voluptatem sequi perferendis, id in dolore eos aperiam neque tempora, non modi est similique unde libero!</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Project</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Coding Profiles</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">
                            Disabled
                            </Nav.Link>
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
