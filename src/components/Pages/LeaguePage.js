import React from 'react'
import BackendApi from "../../services/BackendApi";
import {Row, Col, Image} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import './LeaguePage.css';
import {Link} from "react-router-dom";

class LeaguePage extends React.Component {

    constructor(props) {
        super();
        this.state = {league: {}, teams: []};
        const leagueId = props.match.params.id;
        BackendApi.getLeague(leagueId).then((league) => {
            this.setState({league: league});
        });
        BackendApi.getTeams(leagueId).then((teams) => {
            this.setState({teams: teams});
        });
    }

    renderTeam(team) {
        return <Col xs="6" sm="4" md="3" lg="2" className="pb-3 text-center">
            <Link to={`/team/${team.team_id}`}>
                <Card className="p-3">
                    <Card.Img variant="top" src={team.logo}/>
                    <Card.Body>
                        <p className="pt-2">{team.name}</p>
                    </Card.Body>
                </Card>
            </Link>
        </Col>;
    }

    render() {
        return <div id="league-page">
            <Row>
                <Col>
                    <h2>{this.state.league.name}</h2>
                    <p>{this.state.league.country} | {this.state.league.season}</p>
                    <Image src={this.state.league.logo}></Image>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col xs="12">
                    <h2>Teams</h2>
                </Col>
                {this.state.teams.map(this.renderTeam)}
            </Row>
        </div>
    }
}

export default LeaguePage
