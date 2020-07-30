import React from 'react'
import BackendApi from "../../services/BackendApi";
import {Row, Col, Image, Tabs, Tab} from "react-bootstrap";
import './LeaguePage.css';
import {Link} from "react-router-dom";
import Table from "react-bootstrap/Table";

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
            this.setState({fixtures: data.fixtures});
        });
    }

    renderTeam(team, index) {
        return <tr key={team.team_id}>
            <td>{index + 1}</td>
            <td><Link to={`/team/${team.team_id}`}>{team.name}</Link></td>
            <td>{team.stats.statistics.matchs.matchsPlayed.total}</td>
            <td>{team.stats.statistics.matchs.wins.total}</td>
            <td>{team.stats.statistics.matchs.draws.total}</td>
            <td>{team.stats.statistics.matchs.loses.total}</td>
            <td>{team.stats.statistics.points}</td>
        </tr>;
    }

    renderFixture(fixture) {
        return <div key={fixture.fixture_id} className="fixture">
            <Row className="body">
                <Col>
                    <Image src={fixture.homeTeam.logo} className="float-left"></Image>
                    <h3>{fixture.homeTeam.team_name}</h3>
                </Col>
                <Col className="text-center score">
                    <h3>{fixture.goalsHomeTeam} : {fixture.goalsAwayTeam}</h3>
                    <span style={({fontSize:"10px"})}>{fixture.event_date}</span>
                </Col>
                <Col className="text-right">
                    <Image src={fixture.awayTeam.logo} className="float-right"></Image>
                    <h3>{fixture.awayTeam.team_name}</h3>
                </Col>
            </Row>
        </div>;
    }

    render() {
        return <div id="league-page">
            <Row className="header">
                <Col>
                    <Image src={this.state.league.logo}></Image>
                    <div>
                        <h2>{this.state.league.name}</h2>
                        <p>{this.state.league.country}  <span className="text-muted">{this.state.league.season}</span></p>
                    </div>
                </Col>
            </Row>
            <Tabs defaultActiveKey="table">
                <Tab eventKey="table" title="Table">
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Team</th>
                                <th>Matches</th>
                                <th>Wins</th>
                                <th>Draws</th>
                                <th>Loses</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.teams.map(this.renderTeam)}
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="matches" title="Matches">
                    <h2>Recent events</h2>
                    <Row>
                        <Col xs="12">
                            {this.state.fixtures.map(this.renderFixture)}
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </div>
    }
}

export default LeaguePage
