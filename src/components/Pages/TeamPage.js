import React from 'react'
import BackendApi from "../../services/BackendApi";
import {Col, Tab, Tabs, Image, Row, Breadcrumb} from "react-bootstrap";
import './TeamPage.css';
import Table from "react-bootstrap/Table";
import MissingData from "../MissingData/MissingData";
import _ from "lodash";
import {Link} from "react-router-dom";

class TeamPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {venue: {}, team: {}, transfersData: [], squad: [], league: {}};
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
    }

    renderTransfer(transfer, i) {
        return <p key={i}><span
            className="text-muted">{transfer.date}</span> <Link
            to={`/player/${transfer.player.id}`}> {transfer.player.name} </Link> left {transfer.teams.out.name} and
            joined {transfer.teams.in.name}</p>
    }

    renderTransfers() {
        if (_.isEmpty(this.state.transfersData)) {
            return <MissingData></MissingData>
        } else {
            return this.state.transfersData.map(this.renderTransfer)
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
                            href={`/#/league/${this.state.league.id}`}>{this.state.league.name}</Breadcrumb.Item>
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