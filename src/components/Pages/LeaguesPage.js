import React from 'react'
import MockApi from "../../services/MockApi";
import BriefCard from "../BriefCard/BriefCard";
import {Col, Row} from "react-bootstrap";

class LeaguesPage extends React.Component {

    constructor() {
        super();
        this.state = {
            leagues: []
        };

        MockApi.getLeagues().then((leagues) => {
            this.setState({leagues: leagues});
        })
    }

    renderLeague(league) {
        return <Col xs={3} className= "mb-4" key={league.league_id} ><BriefCard key={league.league_id} data-league={league}></BriefCard></Col>
    }

    render() {
        return (<div>
            <h2>Leagues</h2>
            <Row>
                {this.state.leagues.map(this.renderLeague)}
            </Row>
        </div>)
    }
}

export default LeaguesPage
