import React from 'react'
import BackendApi from "../../services/BackendApi";
import BriefCard from "../BriefCard/BriefCard";
import {Col, Row, Pagination, Form, InputGroup, Button} from "react-bootstrap";

class LeaguesPage extends React.Component {
    items = [];

    constructor() {
        super();
        this.state = {
            leagues: [],
            activePage: 1,
            paginationItems: [1, 2, 3, 4, 5],
            searchValue: ""
        };
        this.onPageChange = this.onPageChange.bind(this);
        this.renderPaginationItem = this.renderPaginationItem.bind(this);
        this.search = this.search.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onReceiveLeagues = this.onReceiveLeagues.bind(this);
        BackendApi.getLeagues().then(this.onReceiveLeagues);
    }

    onPageChange(event) {
        const page = parseInt(event.target.innerText);
        this.setState({activePage: page});
        BackendApi.getLeagues({page: page}).then(this.onReceiveLeagues);
    }

    onReceiveLeagues(result) {
        console.log(result);
        this.setState({leagues: result.leagues});
    }

    renderLeague(league) {
        return <Col xs={3} className="mb-4" key={league.league_id}><BriefCard key={league.league_id}
                                                                              data-league={league}></BriefCard></Col>
    }

    renderPaginationItem(i) {
        return <Pagination.Item key={i} active={i === this.state.activePage}
                                onClick={this.onPageChange}>{i}</Pagination.Item>;
    }

    search() {
        BackendApi.getLeagues({search: this.state.searchValue}).then(this.onReceiveLeagues);
    }

    onSearchChange(event) {
        event.preventDefault();
        this.setState({searchValue: event.target.value})
    }

    render() {
        return (<div>
            <h2 className="pb-4">Leagues</h2>
            <Row>
                <Col xs="12">
                    <Form onSubmit={this.search}>
                        <Form.Row>
                            <Form.Group as={Col} md="4">
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search league"
                                        aria-describedby="inputGroupPrepend"
                                        value={this.state.searchValue}
                                        onChange={this.onSearchChange}/>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend" type="submit"
                                                         as={Button}>Search</InputGroup.Text>
                                    </InputGroup.Prepend>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col
                    className="d-flex justify-content-center mb-4"><Pagination>{this.state.paginationItems.map(this.renderPaginationItem)}</Pagination></Col>
            </Row>
            <Row>
                {this.state.leagues.map(this.renderLeague)}
            </Row>
            <Row>
                <Col
                    className="d-flex justify-content-center mt-4"><Pagination>{this.state.paginationItems.map(this.renderPaginationItem)}</Pagination></Col>
            </Row>
        </div>)
    }
}

export default LeaguesPage
