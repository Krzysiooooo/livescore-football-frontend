import React from 'react'
import BackendApi from "../../services/BackendApi";
import {Col, Tab, Tabs, Image, Row} from "react-bootstrap";
import './TeamPage.css';

class TeamPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {team: {}, transfersData: {transfers: []}, squadData: {players: []}};
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

    renderSquad(squad) {
        return <Row className="player">
            <Col>
                {squad.player_name}
            </Col>
            <Col>
                {squad.nationality}
            </Col>
            <Col>
                {squad.position}
            </Col>
        </Row>
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
                           <Row>
                               <Col><h3>Player name</h3></Col>
                               <Col><h3>Nationality</h3></Col>
                               <Col><h3>Position</h3></Col>
                           </Row>
                            {this.state.squadData.players.map(this.renderSquad)}
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </div>
    }

}

export default TeamPage