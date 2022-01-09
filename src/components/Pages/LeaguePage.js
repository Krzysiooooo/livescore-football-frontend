import React from 'react'
import BackendApi from "../../services/BackendApi";
import {Row, Col, Image, Tabs, Tab, Fade} from "react-bootstrap";
import './LeaguePage.css';
import {Link} from "react-router-dom";
import Table from "react-bootstrap/Table";
import moment from "moment";
import _ from "lodash";
import InlineFixture from "../InlineFixture/InlineFixture";

class LeaguePage extends React.Component {

    constructor(props) {
        super(props);
        this.renderGroupedFixture = this.renderGroupedFixture.bind(this);
        this.state = {league: {}, teams: [], fixtures: {}, fixturesKeys: []};
        const leagueId = props.match.params.id;
        BackendApi.getLeague(leagueId).then(league => {
            const currentSeason = _.find(league.seasons, {'current':true});
            league.currentSeason = _.pick(currentSeason, ['year','start','end']);
            this.setState({league: league})
        });
        BackendApi.getTeams(leagueId).then(teams => this.setState({teams: teams}));
        BackendApi.getFixturesByLeagueId(leagueId).then((data) => {
            const fixtures = _.reverse(data.nextFixtures).concat(data.lastFixtures).map((fixture) => {
                fixture.niceDate = moment(fixture.fixture.date).format('LL');
                return fixture;
            });
            const groupedFixtures = _.groupBy(fixtures, fixture => fixture.niceDate);
            const fixturesKeys = _.keys(groupedFixtures);
            this.setState({fixtures: groupedFixtures, fixturesKeys: fixturesKeys});
        });
    }

    renderTeam(team, index) {
        return <tr key={team.team.id}>
            <td>{index + 1}</td>
            <td><img src={team.team.logo} className="team-logo" alt="Team logo"/></td>
            <td><Link to={`/team/${team.team.id}`}>{team.team.name}</Link></td>
            <td>{team.stats.fixtures.played.total}</td>
            <td>{team.stats.fixtures.wins.total}</td>
            <td>{team.stats.fixtures.draws.total}</td>
            <td>{team.stats.fixtures.loses.total}</td>
            <td>{team.stats.statistics.points}</td>
        </tr>;
    }

    renderGroupedFixture(key) {
        return <div key={key}>
            <h3 className="group-date">{key}</h3>
            {this.state.fixtures[key].map(fixture => <InlineFixture fixture={fixture}
                                                                    key={fixture.fixture.id}></InlineFixture>)}
        </div>;
    }

    render() {
        if (_.isEmpty(this.state.league)){
            return <p>Loading data</p>;
        }
        return <Fade in={!_.isEmpty(this.state.league)} timeout={5000} appear={true}>
        <div id="league-page">
            <Row className="header">
                <Col>
                    <Image src={this.state.league.league.logo}></Image>
                    <div>
                        <h2>{this.state.league.league.name}</h2>
                        <p>{this.state.league.country.name} <span
                            className="text-muted">{this.state.league.currentSeason.year}</span>
                        </p>
                    </div>
                </Col>
            </Row>
            <Tabs defaultActiveKey="table" >
                <Tab eventKey="table" title="Table">
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th></th>
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
        </Fade>
    }
}

export default LeaguePage
