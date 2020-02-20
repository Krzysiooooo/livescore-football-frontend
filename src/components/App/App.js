import React from 'react';
import './App.css';
import {Container} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {HashRouter} from "react-router-dom";
import ContentRouting from "../ContentRouting";

function App() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Livescore Football</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#/">Start</Nav.Link>
                            <Nav.Link href="#leagues">Ligi</Nav.Link>
                            <Nav.Link href="#clubs">Kluby</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <main role="main">
                <div className="container">
                    <HashRouter>
                        <ContentRouting></ContentRouting>
                    </HashRouter>
                </div>
            </main>
            <footer>
                <p className="text-center pt-5 pb-5">Livescore Football</p>
            </footer>
        </div>
    );
}

export default App;
