import React from 'react'
import BackendApi from "../../services/BackendApi";
import {Row, Col, Image} from "react-bootstrap";

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
        return <Col xs="3"><Image src={team.logo}></Image><p>{team.name}</p></Col>;
    }

    render() {
        return <div>
            <Row>
                <Col>
                    <h2>{this.state.league.name}</h2>
                    <p>{this.state.league.country} | {this.state.league.season}</p>
                    <Image src={this.state.league.logo}></Image>
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    <h2>Teams</h2>
                </Col>
                {this.state.teams.map(this.renderTeam)}
            </Row>
        </div>
    }
}

export default LeaguePage
