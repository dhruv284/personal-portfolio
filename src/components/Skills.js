import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";

import colorSharp from '../assets/img/color-sharp.png'
import webdevelopment from '../assets/img/web-development-svgrepo-com.svg'
import machine from '../assets/img/machine-learning-model-svgrepo-com.svg'
import dsa from '../assets/img/link-chain-svgrepo-com.svg'
export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill skill1" id="skills" >
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p class="text-justify">
                                Passionate full-stack developer skilled in crafting responsive, high-performance web applications. Experienced in designing scalable backend systems, developing intuitive user interfaces, and integrating AI/ML features for smarter solutions. Strong focus on clean architecture, maintainable code, and problem-solving efficiency.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={dsa} alt="Image"/>
                                    <h5>DSA</h5>
                                </div>
                                <div className="item">
                                    <img src={machine} alt="Image"/>
                                    <h5>AI/ML</h5>
                                </div>
                                <div className="item">
                                    <img src={webdevelopment} alt="Image"/>
                                    <h5>Web Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )

}