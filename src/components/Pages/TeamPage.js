import React from 'react'
import BackendApi from "../../services/BackendApi";
import {Col, Tab, Tabs, Image, Row} from "react-bootstrap";
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
                            <h2>Transfers</h2>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </div>
    }

}

export default TeamPage