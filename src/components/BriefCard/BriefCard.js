import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";
import './BriefCard.css'
import {Image} from "react-bootstrap";

class BriefCard extends React.Component {

    constructor(props) {
        super();
        this.state = {league: props['data-league']};
    }

    render() {
        return <Card className="brief-card">
            <Card.Body>
                <div className="image">
                    <Image src={this.state.league.logo}></Image>
                </div>
                <Card.Title>{this.state.league.name}</Card.Title>
                <Card.Text>
                    From: {this.state.league.country} <br/>
                    Season: {this.state.league.season}
                </Card.Text>
                <Button href={`#/league/${this.state.league.league_id}`} variant="primary">Show details</Button>
            </Card.Body>
        </Card>

    }
}

export default BriefCard
