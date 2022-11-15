import { React } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";
import Contact from "./contact"
import Home from "./Home"
import About from "./about"
import Footer from "./footer"
import Forms from "./Forms"

const NavigationBar = () => {
    return (
        <Router>
            <div>
                <Navbar variant="dark">
                    <Container>
                        <NavbarBrand>MUFILMS</NavbarBrand>
                        <Nav>
                            <Nav.Link href="#home">HOME</Nav.Link>
                            <Nav.Link href="#trending">TRENDING</Nav.Link>
                            <Nav.Link href="#contact">CONTACT</Nav.Link>
                            <Nav.Link href="#about">ABOUT</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            {/* <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Forms" element={<Forms />} />
                <Route path="/Footer" element={<Footer />} />

            </Routes> */}
        </Router>
    )
}
export default NavigationBar