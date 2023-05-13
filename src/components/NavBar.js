import { useState, useEffect } from "react"

import { Navbar, Container,Nav } from "react-bootstrap"

import logo from '../assets/img/bmw_logo.png';
import navicon1 from '../assets/img/nav-icon1.svg';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY>50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return() => window.removeEventListener("scroll", onScroll);
    }, [])

        const onuUpdateActiveLink = (value) => {
            setActiveLink(value);
        }

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt ="Think Tank"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onuUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#teams" className={activeLink === 'team' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onuUpdateActiveLink('team')}>Team</Nav.Link>
                    <Nav.Link href="#weare" className={activeLink === 'whatwedo' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onuUpdateActiveLink('whatwedo')}>What we do</Nav.Link>
                </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/company/bmw-group/"><img src={navicon1} alt=""/></a>
                        </div>
                        <button className="vvd" onClick={() => document.getElementById('connect').scrollIntoView({behavior: 'smooth'})}>
                                <span>Let's Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    )
}