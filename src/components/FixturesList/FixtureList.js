import React from 'react'
import BackendApi from "../../services/BackendApi";
import InlineFixture from "../InlineFixture/InlineFixture";
import {Col,Row} from "react-bootstrap";

class FixtureList extends React.Component {

    date = null;

    constructor(props) {
        super(props);
        this.state = {fixtures: []};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.date !== this.date) {
            this.date = this.props.date;
            BackendApi.getFixtureByDate(this.props.date).then(fixtures => {
                this.setState({fixtures: fixtures})
            });
        }
    }

    render() {
        return <div id="fixture-list">
            <Row>
                <Col xs="12">
                    {this.state.fixtures.map(fixture => <InlineFixture fixture={fixture}
                                                                       key={fixture.fixture.id}></InlineFixture>)}
                </Col>
            </Row>
        </div>
    }
}

export default FixtureList
