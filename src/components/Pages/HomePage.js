import React from 'react'
import BackendApi from "../../services/BackendApi";
import InlineFixture from "../InlineFixture/InlineFixture";
import {Fade} from "react-bootstrap";
import _ from "lodash";


class HomePage extends React.Component {

    constructor() {
        super();
        this.state = {fixtures: []};
        BackendApi.getLiveFixtures().then(fixtures => {
            this.setState({fixtures: fixtures})
        });
    }

    render() {
        return <Fade in={!_.isEmpty(this.state.fixtures)} appear={true} timeout={5000} >
        <div>
            <h2>Games in play</h2>
            {this.state.fixtures.map(fixture => <InlineFixture fixture={fixture} key={fixture.fixture.id}></InlineFixture>)}
        </div>
        </Fade>
    }
}

export default HomePage
