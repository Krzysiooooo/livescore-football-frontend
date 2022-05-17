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
            BackendApi.getFixtureByDate(this.props.date).then(fixtures => {
                const leaguesList = _.chain(fixtures).map(item => item.league.name).uniq().sort().map(item => ({
                    value: item,
                    label: item
                })).value();
                this.setState({fixtures: fixtures, leaguesList: leaguesList})
            });
        }
    }


    onFilterChange(options){
        this.setState({selectedLeagues: options});
        return 0;
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
                <Col>
                    {this.state.selectedLeagues.map(x => x.value).join()}
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
