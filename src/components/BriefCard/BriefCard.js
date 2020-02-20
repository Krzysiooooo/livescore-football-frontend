import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";
import './BriefCard.css'

class BriefCard extends React.Component {

    constructor(props) {
        super();
        this.state = {team: props['data-team']};
    }

    render() {
        return <Card className="brief-card">
            <Card.Img variant="top" src={(this.state.team.logo)}/>
            <Card.Body>
                <Card.Title>{this.state.team.name}</Card.Title>
                <Card.Text>
                    From: {this.state.team.country} <br/>
                    Founded: {this.state.team.founded}
                </Card.Text>
                <Button variant="primary">Show details</Button>
            </Card.Body>
        </Card>

    }
}

export default BriefCard
