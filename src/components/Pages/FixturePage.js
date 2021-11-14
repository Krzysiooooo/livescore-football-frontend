import React from 'react'
import BackendApi from "../../services/BackendApi";
import _ from "lodash";
import {Col, Image, Row, Tab, Tabs} from "react-bootstrap";
import './FixturePage.css';
import FixtureLineup from "../FixtureLineup/FixtureLineup";


class FixturePage extends React.Component {

    constructor(props) {
        super(props);
        const fixtureId = props.match.params.id;
        this.state = {id: fixtureId, fixture: {}, statistics: []};
        this.renderEvent = this.renderEvent.bind(this);
    }

    componentDidMount() {
        BackendApi.getFixture(this.state.id).then((result) => {
            this.setState({fixture: result, homeTeamId: result.teams.home.id, awayTeamId: result.teams.away.id}, () => {
                if (!_.isEmpty(this.state.fixture.statistics)) {
                    this.prepareStatistics();
                }
            });
        })
    }

    prepareStatistics() {
        const home = _.find(this.state.fixture.statistics, team => team.team.name === this.state.fixture.teams.home.name);
        const away = _.find(this.state.fixture.statistics, team => team.team.name === this.state.fixture.teams.away.name);
        const results = this.state.fixture.statistics[0].statistics.map((item) => {
            const key = item.type;
            const homeValue = _.find(home.statistics, stat => stat.type === key);
            const awayValue = _.find(away.statistics, stat => stat.type === key);
            return {statistic: key, homeValue: homeValue.value, awayValue: awayValue.value};
        })
        this.setState({statistics: results});
    }

    renderEventDetail(event) {
        return <p>{event.detail} <br/> {event.player.name}{event.assist.id ? `, ${event.assist.name}` : ""}</p>
    }

    renderEvent(event, index) {
        const isHome = event.team.id == this.state.homeTeamId ? true : false;
        return <tr key={index}>
            <td className="text-right">{isHome ? this.renderEventDetail(event) : ""}</td>
            <td className="text-center"><span className="badge badge-secondary">{event.time.elapsed}</span></td>
            <td>{!isHome ? this.renderEventDetail(event) : ""}</td>
        </tr>
    }


    render() {
        if (_.isEmpty(this.state.fixture)) {
            return <p>Loading data</p>;
        }
        return <div id="fixture-page">
            <Row>
                <Col xs={4}>
                    <Image src={this.state.fixture.teams.home.logo} className="float-left mr-2"></Image>
                    <h3 className="mt-5 home-team-name">{this.state.fixture.teams.home.name}</h3>
                </Col>
                <Col xs={4} className="text-center">
                    <h3 className="mt-5 score">{this.state.fixture.goals.home} : {this.state.fixture.goals.away}</h3>
                </Col>
                <Col xs={4} className="text-right">
                    <Image src={this.state.fixture.teams.away.logo} className="float-right ml-2"></Image>
                    <h3 className="mt-5 away-team-name">{this.state.fixture.teams.away.name}</h3>
                </Col>
            </Row>
            <Tabs defaultActiveKey="events">
                <Tab eventKey="events" title="Events">
                    <table className="table">
                        <tbody>
                            {this.state.fixture.events.map(this.renderEvent)}
                        </tbody>
                    </table>
                </Tab>
                <Tab eventKey="statistics" title="Statistics">
                    <h3 className="text-center">{_.isEmpty(this.state.statistics) ? "" : "Top stats"}</h3>
                    <table className="table">
                        <tbody>
                            {this.state.statistics.map((stat, i) => {
                                return <tr key={i}>
                                    <td>{stat.homeValue ? stat.homeValue : "-"}</td>
                                    <td className="text-center">{stat.statistic}</td>
                                    <td className="text-right">{stat.awayValue ? stat.awayValue : "-"}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </Tab>
                <Tab eventKey="lineup" title="Lineup">
                    <Row>
                        <Col>
                            <FixtureLineup lineup={this.state.fixture.lineups[0]}></FixtureLineup>
                        </Col>
                        <Col>
                            <FixtureLineup lineup={this.state.fixture.lineups[1]}></FixtureLineup>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </div>
    }
}


export default FixturePage
