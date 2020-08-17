import * as React from "react";
import {Col, Image, Row} from "react-bootstrap";
import './InlineFixture.css'
import moment from "moment";

class InlineFixture extends React.Component{

    getHumanDate(eventDate){
        return moment(eventDate).from();
    }

   render() {
        return <div key={this.props.fixture.fixture_id} className="inline-fixture">
           <Row>
               <Col>
                   <Image src={this.props.fixture.homeTeam.logo} className="float-left"></Image>
                   <h3>{this.props.fixture.homeTeam.team_name}</h3>
               </Col>
               <Col className="text-center score">
                   <h3>{this.props.fixture.goalsHomeTeam} : {this.props.fixture.goalsAwayTeam}</h3>
                   <span title={this.props.fixture.event_date}>{this.getHumanDate(this.props.fixture.event_date)}</span>
               </Col>
               <Col className="text-right">
                   <Image src={this.props.fixture.awayTeam.logo} className="float-right"></Image>
                   <h3>{this.props.fixture.awayTeam.team_name}</h3>
               </Col>
           </Row>
       </div>;
    }
}

export default InlineFixture