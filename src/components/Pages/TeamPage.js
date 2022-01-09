import React from 'react'
import BackendApi from "../../services/BackendApi";
import {Col, Tab, Tabs, Image, Row} from "react-bootstrap";
import './TeamPage.css';
import Table from "react-bootstrap/Table";

class TeamPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {venue: {}, team: {}, transfersData: [], squad: []};
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
    }

    renderTransfer(transfer, i) {
        return <p key={i}><span
            className="text-muted">{transfer.date}</span> {transfer.player.name} left {transfer.teams.out.name} and
            joined {transfer.teams.in.name}</p>
    }

    renderSquad(player) {
        return <tr key={player.player.id}>
            <td>{player.player.name}</td>
            <td>{player.player.nationality}</td>
            <td>{player.statistics[0].games.position}</td>
        </tr>
    }

    render() {
        return <div id="team-page">
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
                            {this.state.transfersData.map(this.renderTransfer)}
                        </Tab>
                        <Tab eventKey="squad" title="Squad">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Player Name</th>
                                        <th>Nationality</th>
                                        <th>Position</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.squad.map(this.renderSquad)}
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="venue" title="Venue">
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
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </div>
    }

}

export default TeamPage