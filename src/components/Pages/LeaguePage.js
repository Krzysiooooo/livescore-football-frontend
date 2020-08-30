import React from 'react'
import BackendApi from "../../services/BackendApi";
import {Row, Col, Image, Tabs, Tab} from "react-bootstrap";
import './LeaguePage.css';
import {Link} from "react-router-dom";
import Table from "react-bootstrap/Table";
import moment from "moment";
import _ from "lodash";
import InlineFixture from "../InlineFixture/InlineFixture";

class LeaguePage extends React.Component {

    constructor(props) {
        super();
        this.renderGroupedFixture = this.renderGroupedFixture.bind(this);
        this.state = {league: {}, teams: [], fixtures: {}, fixturesKeys: []};
        const leagueId = props.match.params.id;
        BackendApi.getLeague(leagueId).then(league => this.setState({league: league}));
        BackendApi.getTeams(leagueId).then(teams => this.setState({teams: teams}));
        BackendApi.getFixturesByLeagueId(leagueId).then((data) => {
            const fixtures = _.reverse(data.nextFixtures).concat(data.lastFixtures).map((fixture) => {
                fixture.niceDate = moment(fixture.event_date).format('LL');
                return fixture;
            });
            const groupedFixtures = _.groupBy(fixtures, fixture => fixture.niceDate);
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

    renderGroupedFixture(key) {
        return <div key={key}>
            <h3 className="group-date">{key}</h3>
            {this.state.fixtures[key].map(fixture => <InlineFixture fixture={fixture} key={fixture.fixture_id}></InlineFixture>)}
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
                                <th className="d-none d-sm-table-cell">Matches</th>
                                <th className="d-sm-none">M</th>
                                <th className="d-none d-sm-table-cell">Wins</th>
                                <th className="d-sm-none">W</th>
                                <th className="d-none d-sm-table-cell">Draws</th>
                                <th className="d-sm-none">D</th>
                                <th className="d-none d-sm-table-cell">Loses</th>
                                <th className="d-sm-none">L</th>
                                <th className="d-none d-sm-table-cell">Points</th>
                                <th className="d-sm-none">Pts</th>
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
