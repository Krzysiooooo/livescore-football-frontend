import React from 'react'
import BackendApi from "../../services/BackendApi";
import {Col, Tab, Tabs, Image, Row, Breadcrumb} from "react-bootstrap";
import './TeamPage.css';
import Table from "react-bootstrap/Table";
import MissingData from "../MissingData/MissingData";
import _ from "lodash";
import {Link} from "react-router-dom";
import {ArrowRight, ArrowLeft} from 'react-feather';

class TeamPage extends React.Component {

    constructor(props) {
        super(props);
        let parentLeague = {};
        if (_.isString(this.props.location.search)) {
            parentLeague = _.chain(this.props.location.search)
                .trimStart('?')
                .split('&')
                .reduce((acc, item) => {
                    const reducedItem = _.split(item, '=');
                    acc[reducedItem[0]] = reducedItem[1];
                    return acc;
                }, {})
                .value();
        }
        this.state = {venue: {}, team: {}, transfersData: [], squad: [], league: {}, parentLeague };
        const teamId = props.match.params.id;
        BackendApi.getTeam(teamId).then((team) => {
            this.setState({team: team.team});
            this.setState({venue: team.venue});
        });
        BackendApi.getTeamTransfers(teamId).then((transfers) => {
            this.setState({transfersData: transfers});
        });
        BackendApi.getTeamsSquad(teamId).then((squad) => {
            this.setState({squad: squad});
        });
        BackendApi.getLeagueByTeamId(teamId).then((league) => {
            this.setState({league: league.league})
        })
        this.renderTransfer = this.renderTransfer.bind(this);

    }

    renderTransfer(transfer, i) {
        let typeContent, logo;
        if (this.state.team.id === transfer.teams.in.id) {
            typeContent = <span>In <ArrowLeft color="green"/></span>;
            logo = transfer.teams.out.logo;
        } else {
            typeContent = <span>Out <ArrowRight color="red"/></span>;
            logo = transfer.teams.in.logo;
        }
        return <tr key={i}>
            <td>{transfer.date}</td>
            <td>{transfer.player.name}</td>
            <td>{typeContent}</td>
            <td><Image src={logo} className="transfer-logo"/></td>
        </tr>
    }

    renderTransfers() {
        if (_.isEmpty(this.state.transfersData)) {
            return <MissingData></MissingData>
        } else {
            return <Table striped hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Player</th>
                        <th>Type</th>
                        <th>rom/To</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.transfersData.map(this.renderTransfer)}
                </tbody>
            </Table>
        }
    }

    renderPlayer(player) {
        return <tr key={player.player.id}>
            <td><Link to={`/player/${player.player.id}`}>{player.player.name}</Link></td>
            <td>{player.player.nationality}</td>
            <td>{player.statistics[0].games.position}</td>
        </tr>
    }

    renderSquad() {
        if (_.isEmpty(this.state.squad)) {
            return <MissingData></MissingData>
        } else {
            return <Table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Nationality</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.squad.map(this.renderPlayer)}
                </tbody>
            </Table>
        }

    }

    renderVenue() {
        if (_.isEmpty(this.state.venue.name)) {
            return <MissingData></MissingData>
        } else {
            return <div>
                <Row>
                    <Col>
                        <img src={this.state.venue.image} className="team-venue" alt="Team's venue"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{this.state.venue.name} in {this.state.venue.city}</p>
                        <p>Surface: {this.state.venue.surface}</p>
                    </Col>
                </Row>
            </div>
        }
    }

    render() {
        return <div id="team-page">
            <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item
                            href={`/#/league/${this.state.parentLeague.leagueId || this.state.league.id}`}>{this.state.parentLeague.leagueName || this.state.league.name}</Breadcrumb.Item>
                        <Breadcrumb.Item active>{this.state.team.name}</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row noGutters={true}>
                <Col xs="2" sm="2">
                    <Image src={this.state.team.logo} className="team-logo"></Image>
                </Col>
                <Col xs="10" sm="4">
                    <h2>{this.state.team.name}</h2>
                    <p>Since: {this.state.team.founded} <br/>{this.state.team.country}, {this.state.venue.city}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Tabs defaultActiveKey="transfers">
                        <Tab eventKey="transfers" title="Transfers">
                            {this.renderTransfers()}
                        </Tab>
                        <Tab eventKey="squad" title="Squad">
                            {this.renderSquad()}
                        </Tab>
                        <Tab eventKey="venue" title="Venue">
                            {this.renderVenue()}
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </div>
    }

}

export default TeamPage