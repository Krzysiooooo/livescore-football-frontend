import React from 'react'
import BackendApi from "../../services/BackendApi";
import {Row, Col, Image, Tabs, Tab} from "react-bootstrap";
import './LeaguePage.css';
import {Link} from "react-router-dom";
import Table from "react-bootstrap/Table";
import moment from "moment";
import _ from "lodash";

class LeaguePage extends React.Component {

    constructor(props) {
        super();
        this.renderGroupedFixture = this.renderGroupedFixture.bind(this);
        const date1 = "2020-08-01T16:00:00+00:00";
        const date2 = new Date(date1);
        console.log(date1, date2);
        console.log(moment(date2).format('LL'));
        this.state = {league: {}, teams: [], fixtures: {}, fixturesKeys: []};
        const leagueId = props.match.params.id;
        BackendApi.getLeague(leagueId).then((league) => {
            this.setState({league: league});
        });
        BackendApi.getTeams(leagueId).then((teams) => {
            this.setState({teams: teams});
        });
        BackendApi.getFixturesByLeagueId(leagueId).then((data) => {
            const fixtures = _.reverse(data.nextFixtures).concat(data.lastFixtures).map((fixture) => {
                fixture.niceDate = moment(fixture.event_date).format('LL');
                return fixture;
            });
            const groupedFixtures = _.groupBy(fixtures, (fixture) => {
                return fixture.niceDate
            });
            console.log(groupedFixtures);
            console.log(data);
            const fixturesKeys = _.keys(groupedFixtures);
            this.setState({fixtures: groupedFixtures, fixturesKeys: fixturesKeys});
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
                </Col>
                <Col className="text-right">
                    <Image src={fixture.awayTeam.logo} className="float-right"></Image>
                    <h3>{fixture.awayTeam.team_name}</h3>
                </Col>
            </Row>
        </div>;
    }

    renderGroupedFixture(key) {
        return <div key={key}>
            <h3 className="group-date">{key}</h3>
            {this.state.fixtures[key].map(this.renderFixture)}
        </div>;
    }

    render() {
        return <div id="league-page">
            <Row className="header">
                <Col>
                    <Image src={this.state.league.logo}></Image>
                    <div>
                        <h2>{this.state.league.name}</h2>
                        <p>{this.state.league.country} <span className="text-muted">{this.state.league.season}</span>
                        </p>
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
                    {this.state.fixturesKeys.map(this.renderGroupedFixture)}
                </Tab>
            </Tabs>
        </div>
    }
}

export default LeaguePage
