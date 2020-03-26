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
            activePage: 1,
            paginationItems: [1, 2, 3, 4, 5]
        };

        MockApi.getLeagues(0).then((leagues) => {
            this.setState({leagues: leagues});
        });
        this.onPageChange = this.onPageChange.bind(this);
        this.renderPaginationItem = this.renderPaginationItem.bind(this);
    }

    onPageChange(event) {
        const page = parseInt(event.target.innerText);
        this.setState({activePage: page});
        MockApi.getLeagues(page).then((leagues) => {
            this.setState({leagues: leagues});
        });
    }

    renderLeague(league) {
        return <Col xs={3} className="mb-4" key={league.league_id}><BriefCard key={league.league_id} data-league={league}></BriefCard></Col>
    }

    renderPaginationItem(i) {
        return <Pagination.Item key={i} active={i === this.state.activePage}
                                onClick={this.onPageChange}>{i}</Pagination.Item>;
    }

    render() {
        return (<div>
            <h2>Leagues</h2>
            <Row>
                <Col className="d-flex justify-content-center mb-4"><Pagination>{this.state.paginationItems.map(this.renderPaginationItem)}</Pagination></Col>
            </Row>
            <Row>
                {this.state.leagues.map(this.renderLeague)}
            </Row>
            <Row>
                <Col className="d-flex justify-content-center mt-4"><Pagination>{this.state.paginationItems.map(this.renderPaginationItem)}</Pagination></Col>
            </Row>
        </div>)
    }
}

export default LeaguesPage
