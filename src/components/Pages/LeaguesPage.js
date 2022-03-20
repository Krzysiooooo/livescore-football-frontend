import React from 'react'
import BackendApi from "../../services/BackendApi";
import BriefCard from "../BriefCard/BriefCard";
import {Col, Row, Pagination, Form, InputGroup, Button, Fade} from "react-bootstrap";
import _ from "lodash";
import MissingData from "../MissingData/MissingData";


class LeaguesPage extends React.Component {
    items = [];

    constructor() {
        super();
        this.state = {
            leagues: [],
            activePage: 1,
            paginationItems: [],
            searchValue: "",
            totalLeagues: 0,
            noResultsFound: false
        };
        this.onPageChange = this.onPageChange.bind(this);
        this.renderPaginationItem = this.renderPaginationItem.bind(this);
        this.search = this.search.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onReceiveLeagues = this.onReceiveLeagues.bind(this);
    }

    componentDidMount() {
        BackendApi.getLeagues().then(this.onReceiveLeagues);
    }

    onPageChange(event) {
        const page = parseInt(event.target.innerText);
        this.setState({activePage: page});
        BackendApi.getLeagues({page: page}).then(this.onReceiveLeagues);
    }

    getPaginationArray(activePage, pageCount) {
        pageCount = pageCount || 0;
        const paginationSize = 10;
        const halfPaginationSize = paginationSize / 2;
        let pageStart = activePage - halfPaginationSize;
        let pageEnd = activePage + halfPaginationSize;
        if (pageStart < 1) {
            pageStart = 1;
            pageEnd = Math.min(10, pageCount + 1);
        }
        if (pageEnd > pageCount) {
            pageEnd = pageCount + 1;
            pageStart = pageCount - 10 > 0 ? pageCount - 10 : 1;
        }
        const itemsCount = pageEnd - pageStart;
        const paginationItems = Array.from((new Array(itemsCount)).keys()).map(i => i + pageStart);
        return paginationItems;
    }

    onReceiveLeagues(result) {
        const paginationItems = this.getPaginationArray(this.state.activePage, result.pageCount);
        this.setState({leagues: result.leagues, totalLeagues: result.total || 0, paginationItems: paginationItems});
    }

    renderLeague(league) {
        return <Col xs={12} sm={6} lg={3} className="mb-4" key={league.league.id}>
            <BriefCard key={league.league.id} data-league={league}></BriefCard>
        </Col>
    }

    renderPaginationItem(i) {
        return <Pagination.Item key={i} active={i === this.state.activePage}
                                onClick={this.onPageChange}>{i}</Pagination.Item>;
    }

    search(event) {
        event.preventDefault();
        BackendApi.getLeagues({search: this.state.searchValue}).then((result) => {
            this.setState({noResultsFound: !result.total})
            this.setState({activePage: 1});
            this.onReceiveLeagues(result);
        });
    }

    onSearchChange(event) {;
        event.preventDefault();
        this.setState({searchValue: event.target.value})
    }

    render() {
        let content;
        if (this.state.noResultsFound) {
            content = <Row><Col><MissingData text="No data available at the moment"></MissingData></Col></Row>
        } else {
            content = <React.Fragment>
                <Row>
                    <Col
                        className="d-flex justify-content-center mb-4"><Pagination>{this.state.paginationItems.map(this.renderPaginationItem)}</Pagination></Col>
                </Row>
                <Fade in={!_.isEmpty(this.state.leagues)} timeout={5000} appear={true}>
                    <Row>
                        {this.state.leagues.map(this.renderLeague)}
                    </Row>
                </Fade>
                <Row>
                    <Col
                        className="d-flex justify-content-center mt-4"><Pagination>{this.state.paginationItems.map(this.renderPaginationItem)}</Pagination></Col>
                </Row>
            </React.Fragment>
        }
        return <div>
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
                <Col>
                    <p>Results count: {this.state.totalLeagues}</p>
                </Col>
            </Row>
            {content}
        </div>
    }
}

export default LeaguesPage
