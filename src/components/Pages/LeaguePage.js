import React from 'react'
import BackendApi from "../../services/BackendApi";
import {Row, Col, Image} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import './LeaguePage.css';
import {Link} from "react-router-dom";

class LeaguePage extends React.Component {

    constructor(props) {
        super();
        this.state = {league: {}, teams: [], fixtures: []};
        const leagueId = props.match.params.id;
        BackendApi.getLeague(leagueId).then((league) => {
            this.setState({league: league});
        });
        BackendApi.getTeams(leagueId).then((teams) => {
            this.setState({teams: teams});
        });
        BackendApi.getFixturesByLeagueId(leagueId).then((data) => {
            this.setState({fixtures:data.fixtures});
        });
    }

    renderTeam(team) {
        return <Col xs="6" sm="4" md="3" lg="2" className="pb-3 text-center" key={team.team_id}>
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
    renderFixture(fixture){
        return  <div key= {fixture.fixture_id} className="fixture">
            <Row className="header">
                <Col>
                    <p className="text-center">{fixture.event_date}</p>
                </Col>
            </Row>
            <Row className="body">
                <Col>
                    <Image src={fixture.homeTeam.logo} className="float-left"></Image>
                    <h3>{fixture.homeTeam.team_name}</h3>
                </Col>
                <Col className="text-center score">{fixture.score.halftime}</Col>
                <Col className="text-right">
                    <Image src={fixture.awayTeam.logo} className="float-right"></Image>
                    <h3>{fixture.awayTeam.team_name}</h3>
                </Col>
            </Row>
        </div>;
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
            <Row>
                <Col>
                    <h2>Recent events</h2>
                    {this.state.fixtures.map(this.renderFixture)}
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
