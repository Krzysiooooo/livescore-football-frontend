import React from 'react'
import { Col, Image, Row} from "react-bootstrap";
import BackendApi from "../../services/BackendApi";
import InlineFixture from "../InlineFixture/InlineFixture";


class HomePage extends React.Component {

    constructor() {
        super();
        this.state = {fixtures: []};
        BackendApi.getLiveFixtures().then(data => this.setState({fixtures: data.fixtures}));
    }

    render() {
        return <div>
            <h2>Games in play</h2>
            {this.state.fixtures.map(fixture => <InlineFixture fixture={fixture} key={fixture.fixture_id}></InlineFixture>)}
        </div>
    }
}

export default HomePage
