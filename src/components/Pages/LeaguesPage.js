import React from 'react'
import MockApi from "../../services/MockApi";
import BriefCard from "../BriefCard/BriefCard";
import {Col, Row, Pagination} from "react-bootstrap";

class LeaguesPage extends React.Component {
    items = [];

    constructor() {
        super();
        this.state = {
            leagues: [],
            activePage: 1
        };

        MockApi.getLeagues().then((leagues) => {
            this.setState({leagues: leagues});
        });
        this.onPageChange = this.onPageChange.bind(this);
    }

    onPageChange(event){
        const page = parseInt(event.target.innerText);
        this.setState({activePage:page});
    }


    renderLeague(league) {
        return <Col xs={3} className= "mb-4" key={league.league_id} ><BriefCard key={league.league_id} data-league={league}></BriefCard></Col>
    }

    render(){
        return (<div>
            <h2>Leagues</h2>
            <Row>
                {this.state.leagues.map(this.renderLeague)}
            </Row>
            <div>
                <Pagination>
                    <Pagination.Prev></Pagination.Prev>
                    /* TODO */
                        <Pagination.Item key={1} active={1 === this.state.activePage} onClick ={this.onPageChange}>{1}</Pagination.Item>
                        <Pagination.Item key={2} active={2 === this.state.activePage} onClick ={this.onPageChange}>{2}</Pagination.Item>
                    <Pagination.Next></Pagination.Next>
                </Pagination>
            </div>
        </div>)
    }
}

export default LeaguesPage
