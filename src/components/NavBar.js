import { use, useEffect, useState } from "react"
import {Navbar, Container, Nav} from "react-bootstrap"
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import git from "../assets/img/git.svg"
import git2 from '../assets/img/refinedgithub.svg'
import programming from'../assets/img/developer.png'
export const NavBar = ({ onNavClick }) => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) setScrolled(true);
            else setScrolled(false);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
        onNavClick(value); // <-- Scroll to section
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={programming} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link 
                            className={activeLink==="home"?'active navbar-link': 'navbar-link'} 
                            onClick={()=>onUpdateActiveLink('home')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link 
                            className={activeLink==="skills"?'active navbar-link': 'navbar-link'} 
                            onClick={()=>onUpdateActiveLink('skills')}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link 
                            className={activeLink==="projects"?'active navbar-link': 'navbar-link'} 
                            onClick={()=>onUpdateActiveLink('projects')}
                        >
                            Projects
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/dhruv-agarwal-18b7821a8"><img src={navIcon1} alt=""/></a>
                            <a href="https://github.com/dhruv284"><img src={git2} alt=""/></a>
                            <a href="https://www.instagram.com/dhruv.agarwxl/"><img src={navIcon3} alt=""/></a>
                        </div>
                        <button className="vvd" onClick={() => onNavClick('contact')}>
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
