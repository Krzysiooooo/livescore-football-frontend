import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import './MissingData.css';

class MissingData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {heading: props.text || "No data"}

    }

    render() {
        return <Row className="missing-data-page">
            <Col className="text-center">
            <h3 className="header">{this.state.heading}</h3>
            <Image src="missingData.jpg"></Image>
            </Col>
        </Row>
    }

}

export default MissingData