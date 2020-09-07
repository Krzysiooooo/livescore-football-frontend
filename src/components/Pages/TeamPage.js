import React from 'react'
import BackendApi from "../../services/BackendApi";
import {Col, Tab, Tabs, Image, Row} from "react-bootstrap";
import './TeamPage.css';
import Table from "react-bootstrap/Table";

class TeamPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {team: {}, transfersData: {transfers: []}, squad: {players: []}};
        const teamId = props.match.params.id;
        BackendApi.getTeam(teamId).then((team) => {
            this.setState({team: team});
        });
        BackendApi.getTeamTransfers(teamId).then((transfers) => {
            this.setState({transfersData: transfers});
        });
        BackendApi.getTeamsSquad(teamId).then((squad) => {
            this.setState({squadData: squad});
        });
    }

    renderTransfer(transfer) {
        return <p><span
            className="text-muted">{transfer.transfer_date}</span> {transfer.player_name} left {transfer.team_out.team_name} and
            joined {transfer.team_in.team_name}</p>
    }

    renderSquad(player) {
        return <tr key={player.player_id}>
            <td>{player.player_name}</td>
            <td>{player.nationality}</td>
            <td>{player.position}</td>
        </tr>
    }

    render() {
        return <div id="team-page">
            <Row>
                <Col>
                    <h1>{this.state.team.name}</h1>
                    <p>Since: {this.state.team.founded} <br/>{this.state.team.country}, {this.state.team.venue_city}</p>
                </Col>
                <Col>
                    <Image src={this.state.team.logo} className="team-logo"></Image>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Tabs defaultActiveKey="transfers">
                        <Tab eventKey="transfers" title="Transfers">
                            {this.state.transfersData.transfers.map(this.renderTransfer)}
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
                                    {this.state.squad.players.map(this.renderSquad)}
                                </tbody>
                            </Table>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </div>
    }

}

export default TeamPage