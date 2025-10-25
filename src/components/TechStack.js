import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";

import colorSharp from '../assets/img/color-sharp.png'
import python from '../assets/img/icons8-python-480.svg'
import react from '../assets/img/react-logo-svgrepo-com.svg'
import node from '../assets/img/nodejs-icon-svgrepo-com.svg'
import javascript from '../assets/img/javascript-svgrepo-com.svg'
import mongoose from '../assets/img/mongodb-svgrepo-com.svg'
import postgre from '../assets/img/postgresql-logo-svgrepo-com.svg'
import supabase from '../assets/img/icons8-supabase.svg'
export const TechStack = () => {
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
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                TechStack
                            </h2>
                           <p></p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={python} alt="Image"/>
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={javascript} alt="Image"/>
                                    <h5>JS</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="Image"/>
                                    <h5>React.Js</h5>
                                </div>
                                <div className="item">
                                    <img src={node} alt="Image"/>
                                    <h5>Node.Js</h5>
                                </div>
                                <div className="item">
                                    <img src={mongoose} alt="Image"/>
                                    <h5>Mongodb</h5>
                                </div>
                                <div className="item">
                                    <img src={postgre} alt="Image"/>
                                    <h5>PostgreSQL</h5>
                                </div>
                                <div className="item">
                                    <img src={supabase} alt="Image"/>
                                    <h5>Supabase</h5>
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