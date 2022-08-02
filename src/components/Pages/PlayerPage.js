import React from 'react'
import BackendApi from "../../services/BackendApi";
import {Col, DropdownButton, Image, Row, Dropdown} from "react-bootstrap";
import _ from "lodash";
import Table from "react-bootstrap/Table";
import MissingData from "../MissingData/MissingData";
import moment from "moment";

class PlayerPage extends React.Component {
    constructor(props) {
        super(props);
        const currentYear = moment().year();
        const seasons = [];
        for (var i = 0; i < 5; i++) {
            seasons.push(currentYear - i)
        }
        this.state = {player: {player: {}}, seasons: seasons, selectedSeason: currentYear}
        this.onSeasonSelect = this.onSeasonSelect.bind(this);
    }

    componentDidMount() {
        const playerId = this.props.match.params.id;
        BackendApi.getPlayer(playerId, this.state.selectedSeason).then((result) => {
            this.setState({player: result})
        });
    }

    renderStatistics(stats, i) {
        return <tr key={i}>
            <td>{stats.league.name}</td>
            <td>{stats.games.appearences}</td>
            <td>{stats.goals.total}</td>
            <td>{stats.goals.assists || 0}</td>
            <td>{stats.cards.yellow}</td>
            <td>{stats.cards.red}</td>
        </tr>
    }

    onSeasonSelect(season) {
        this.setState({selectedSeason: season});
        BackendApi.getPlayer(this.props.match.params.id, season).then((result) => {
            this.setState({player: result});
        })
    }


    render() {
        if (_.isEmpty(this.state.player.player)) {
            return <MissingData></MissingData>;
        }
        return <div>
            <Row>
                <Col xs="2" sm="3">
                    <Image src={this.state.player.player.photo}/>
                </Col>
                <Col xs="10" sm="9">
                    <h2>{this.state.player.player.name} </h2>
                    <p>Birth: {this.state.player.player.birth.date}
                        <br/>Age: {this.state.player.player.age}
                        <br/>Nationality: {this.state.player.player.nationality}
                        <br/>Height: {this.state.player.player.height}
                    </p>
                </Col>
            </Row>
            <Row>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button" onSelect={this.onSeasonSelect}>
                    {this.state.seasons.map((season, i) => {
                        return <Dropdown.Item eventKey={season} key={i}>{season}</Dropdown.Item>
                    })}
                </DropdownButton> </Row>
            <Row>
                <Col>
                    <h4 className="mt-2">Statistics for {this.state.selectedSeason}</h4>
                    <Table className="mt-2">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Games</th>
                                <th>Goals</th>
                                <th>Assists</th>
                                <th>Yellow cards</th>
                                <th>Red cards</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.player.statistics.map(this.renderStatistics)}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>

    }

}

export default PlayerPage