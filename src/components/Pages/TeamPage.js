import React from 'react'
import BackendApi from "../../services/BackendApi";
import {Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import './TeamPage.css';

class TeamPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {team: {}};
        const teamId = props.match.params.id;
        BackendApi.getTeam(teamId).then((team) => {
            this.setState({team: team});
        })
    }

    render() {
        return <Row id="team-page">
            <Col>
                <h1>{this.state.team.name}</h1>
                <p>Since: {this.state.team.founded} <br/>{this.state.team.country}, {this.state.team.venue_city}</p>
            </Col>
            <Col>
                <Image src={this.state.team.logo} className="team-logo"></Image>
            </Col>
        </Row>
    }

}

export default TeamPage