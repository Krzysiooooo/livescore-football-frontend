import Card from "react-bootstrap/Card";
import React from "react";
import './BriefCard.css'
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import _ from "lodash";

class BriefCard extends React.Component {

    constructor(props) {
        super();
        this.state = {
            league: props['data-league'].league,
            seasons: props['data-league'].seasons,
            country: props['data-league'].country,
            currentSeason: _.find(props['data-league'].seasons, {'current':true})
        };
    }

    selectLeague() {
        return console.log("clicked");
    }

    render() {
        return <Link to={`/league/${this.state.league.id}`} className="brief-card-link">
            <Card className="brief-card">
                <Card.Body>
                    <div className="image">
                        <Image src={this.state.league.logo}></Image>
                    </div>
                    <Card.Title>{this.state.league.name}</Card.Title>
                    <Card.Text>
                        From: {this.state.country.name} <br/>
                        Season: {this.state.currentSeason.year}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    }
}

export default BriefCard
