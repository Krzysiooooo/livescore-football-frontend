import React from 'react'
import { Col, Image, Row} from "react-bootstrap";
import BackendApi from "../../services/BackendApi";


class HomePage extends React.Component {

    constructor() {
        super();
        this.renderLiveFixtures = this.renderLiveFixtures.bind(this);
        this.state = {leagues: [], fixtures: []};
        BackendApi.getLiveFixtures().then(data => this.setState({fixtures: data.fixtures}));
    }

    renderLiveFixtures(fixture) {
        return <div key={fixture.fixture_id} style={{height:70}}>
            <Row >
                <Col>
                    <Image src={fixture.homeTeam.logo} className="float-left" style={{height:50}}></Image>
                    <h3>{fixture.homeTeam.team_name}</h3>
                </Col>
                <Col className="text-center score">
                    <h3>{fixture.goalsHomeTeam} : {fixture.goalsAwayTeam}</h3>
                </Col>
                <Col className="text-right">
                    <Image src={fixture.awayTeam.logo} className="float-right" style={{height:50}} ></Image>
                    <h3>{fixture.awayTeam.team_name}</h3>
                </Col>
            </Row>
        </div>;
    }

    render() {
        return <div>
            <h2>Games in play</h2>
           {this.state.fixtures.map(this.renderLiveFixtures)}
        </div>
    }
}

export default HomePage
