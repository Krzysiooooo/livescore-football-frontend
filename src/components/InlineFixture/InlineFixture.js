import * as React from "react";
import {Col, Image, Row, ProgressBar} from "react-bootstrap";
import './InlineFixture.css'
import moment from "moment";
import {Link} from "react-router-dom";

class InlineFixture extends React.Component {

    getHumanDate(eventDate) {
        return moment(eventDate).from();
    }

    render() {
        const fixtureDate = this.getHumanDate(this.props.fixture.fixture.date);
        let score = "0:0";
        if(this.props.fixture.goals.home !== null){
            score = this.props.fixture.goals.home + ":" + this.props.fixture.goals.away;
        }
        return <Link to={"/fixture/" + this.props.fixture.fixture.id}>
            <div className="inline-fixture">
                <Row>
                    <Col xs={4}>
                        <Image src={this.props.fixture.teams.home.logo}></Image>
                        <h3>{this.props.fixture.teams.home.name}</h3>
                    </Col>
                    <Col className="text-center score text-primary" xs={4}>
                        <h3>{fixtureDate}</h3>
                        <h3>{score}</h3>
                        <p>{this.props.fixture.fixture.status.long}</p>
                        <span title={this.props.fixture.fixture.date}>{this.props.fixture.fixture.status.elapsed}</span>
                    </Col>
                    <Col className="text-right" xs={4}>
                        <Image src={this.props.fixture.teams.away.logo}></Image>
                        <h3>{this.props.fixture.teams.away.name}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <ProgressBar now={(this.props.fixture.fixture.status.elapsed / 90) * 100}
                                     className="fixture-elapsed-bar"/>
                    </Col>
                </Row>
            </div>
        </Link>;
    }
}

export default InlineFixture