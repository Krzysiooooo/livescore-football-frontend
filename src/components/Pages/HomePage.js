import React from 'react'
import BackendApi from "../../services/BackendApi";
import InlineFixture from "../InlineFixture/InlineFixture";
import {Col, Fade, Image, Row} from "react-bootstrap";
import _ from "lodash";
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import './HomePage.css';


class HomePage extends React.Component {

    constructor() {
        super();
        this.state = {fixtures: [], teams: []};
        BackendApi.getLiveFixtures().then(fixtures => {
            this.setState({fixtures: fixtures})
        });
        const promises = [
            this.getTeam(338),
            this.getTeam(165),
            this.getTeam(33),
            this.getTeam(489)
        ];
        Promise.all(promises).then((results) => {
            this.setState({teams: results});
        });
    }

    getTeam(teamId) {
        return BackendApi.getTeam(teamId).then(team => {
            return team.team
        });
    }

    renderFavoriteTeams() {
        if (_.isEmpty(this.state.teams)) {
            return <Row className="favorite-teams"></Row>
        }
        const teams = this.state.teams.map((team, key) => {
            return <Col xs="3" key={key}>
                <div>
                    <Link to={'team/' + team.id}>
                        <Card className="text-center team-card">
                            <Card.Body>
                                <div>
                                    <Image src={team.logo}></Image>
                                </div>
                                <Card.Title> {team.name} </Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
            </Col>
        });
        return <Row className="favorite-teams">
            <Col xs="12">
                <h2>Favorite teams</h2>
            </Col>
            {teams}
        </Row>
    }

    render() {
        return <Fade in={true} appear={true} timeout={5000}>
            <div id="home-page">
                {this.renderFavoriteTeams()}
                <Row>
                    <Col xs="12">
                        <h2>Games in play</h2>
                        {this.state.fixtures.map(fixture => <InlineFixture fixture={fixture}
                                                                           key={fixture.fixture.id}></InlineFixture>)}
                    </Col>
                </Row>
            </div>
        </Fade>
    }
}

export default HomePage
