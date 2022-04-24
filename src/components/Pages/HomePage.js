import React from 'react'
import BackendApi from "../../services/BackendApi";
import InlineFixture from "../InlineFixture/InlineFixture";
import {Col, Fade, Image, Row, Form} from "react-bootstrap";
import _ from "lodash";
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import './HomePage.css';
import FixtureList from "../FixturesList/FixtureList";
import moment from "moment";


class HomePage extends React.Component {

    constructor() {
        super();
        this.state = {fixtures: [], teams: [], date: moment().format("YYYY-MM-DD")};
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
        this.onDateChange = this.onDateChange.bind(this);
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
            return <Col xs={12} sm={6} lg={3} key={key}>
                <div>
                    <Link to={'team/' + team.id}>
                        <Card className="text-center team-card">
                            <Card.Body>
                                <div>
                                    <Image src={team.logo}></Image>
                                </div>
                                <Card.Title className="team-card-title"> {team.name} </Card.Title>
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

    onDateChange(event) {
        this.setState({date: event.target.value})
    }

    render() {
        return <Fade in={true} appear={true} timeout={5000}>
            <div id="home-page">
                <Row>
                    <Col>
                        {this.renderFavoriteTeams()}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Fixtures for {this.state.date}</h2>
                        <Form.Control onChange={this.onDateChange} type="date" name="dob" placeholder="Date of Birth"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FixtureList date={this.state.date}></FixtureList>
                    </Col>
                </Row>
            </div>
        </Fade>
    }
}

export default HomePage
