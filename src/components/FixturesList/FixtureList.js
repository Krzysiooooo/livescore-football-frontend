import React from 'react'
import BackendApi from "../../services/BackendApi";
import InlineFixture from "../InlineFixture/InlineFixture";
import {Col, Row} from "react-bootstrap";
import _ from "lodash";
import Select from 'react-select'

class FixtureList extends React.Component {

    date = null;

    constructor(props) {
        super(props);
        this.state = {fixtures: [], leaguesList: [], selectedLeagues: []};
        this.onFilterChange = this.onFilterChange.bind(this);
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.date !== this.date) {
            this.date = this.props.date;
            const filters = {date: this.date}
            if (!_.isEmpty(this.state.selectedLeagues)) {
                filters.leagues = this.state.selectedLeagues.map(item => item.value);
            }
            this.loadFixtures(filters);
            this.loadLeagues();
        }
    }


    loadLeagues() {
        BackendApi.getLeagues({size: 20000}).then((data) => {
            const leaguesList = data.leagues.map(item => {
                return {value: item.league.id, label: item.league.name + " from " + item.country.name}
            })
            this.setState({leaguesList: leaguesList});
        })
    }


    loadFixtures(filters) {
        BackendApi.searchFixtures(filters).then(fixtures => this.setState({fixtures: fixtures}));
    }


    onFilterChange(options) {
        this.setState({selectedLeagues: options}, () => {
            const filters = {date: this.date}
            if (!_.isEmpty(this.state.selectedLeagues)) {
                filters.leagues = this.state.selectedLeagues.map(item => item.value);
            }
            this.loadFixtures(filters);
        });
    };


    render() {
        return <div id="fixture-list">
            <Row>
                <Col xs="12">
                    <Select
                        options={this.state.leaguesList}
                        onChange={this.onFilterChange}
                        isMulti/>
                </Col>
            </Row>
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
