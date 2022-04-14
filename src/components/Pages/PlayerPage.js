import React from 'react'
import BackendApi from "../../services/BackendApi";
import {Col, Image, Row} from "react-bootstrap";
import _ from "lodash";
import Table from "react-bootstrap/Table";
import MissingData from "../MissingData/MissingData";

class PlayerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {player: {player: {}}}
    }

    componentDidMount() {
        const playerId = this.props.match.params.id;
        BackendApi.getPlayer(playerId).then((result) => {
            this.setState({player: result})
        });
    }

    renderStatistics(stats) {
        return <tr>
            <td>{stats.league.name}</td>
            <td>{stats.games.appearences}</td>
            <td>{stats.goals.total}</td>
            <td>{stats.goals.assists || 0}</td>
            <td>{stats.cards.yellow}</td>
            <td>{stats.cards.red}</td>
        </tr>
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
                <Col>
                    <h4 className="mt-2">Statistics</h4>
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