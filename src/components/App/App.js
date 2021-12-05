import React from 'react';
import './App.css';
import {Container} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {HashRouter} from "react-router-dom";
import ContentRouting from "../ContentRouting";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import BackendApi from "../../services/BackendApi";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {status : false};
        this.statusHandler = this.statusHandler.bind(this);
        BackendApi.registerStatusHandler(this.statusHandler);
    }

    statusHandler(status){
        this.setState({status});
    }


    render(){
        return <div>
            <Loader className="loader"
                visible={this.state.status  }
                type="Oval"
                color="#276955"
                height={100}
                width={100}
            />
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#/">
                        <img src="logolf.png" className="logo" alt="Livescore Football logo"/>
                        Livescore Football
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#leagues">Ligi</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <main role="main" className="pt-4">
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
    }
}

export default App;
