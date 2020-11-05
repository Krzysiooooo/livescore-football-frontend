import Card from "react-bootstrap/Card";
import React from "react";
import './BriefCard.css'
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";

class BriefCard extends React.Component {

    constructor(props) {
        super();
        this.state = {league: props['data-league']};
    }

    selectLeague(){
        return console.log("clicked");
    }

    render() {
        return <Link to={`/league/${this.state.league.league_id}`} className="brief-card-link">
        <Card className="brief-card">
            <Card.Body>
                <div className="image">
                    <Image src={this.state.league.logo}></Image>
                </div>
                <Card.Title>{this.state.league.name}</Card.Title>
                <Card.Text>
                    From: {this.state.league.country} <br/>
                    Season: {this.state.league.season}
                </Card.Text>
            </Card.Body>
        </Card>
        </Link>
    }
}

export default BriefCard
