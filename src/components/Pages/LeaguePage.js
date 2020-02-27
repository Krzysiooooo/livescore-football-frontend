import React from 'react'
import MockApi from "../../services/MockApi";
import {Image} from "react-bootstrap";

class LeaguePage extends React.Component {

    constructor(props) {
        super();
        const id = props.match.params.id;
        const league = MockApi.getLeague(id);
        this.state = {league: league};
    }

    render() {
        return <div>
            <h2>{this.state.league.name}</h2>
            <p>{this.state.league.country} | {this.state.league.season}</p>
            <Image src={this.state.league.logo}></Image>
        </div>
    }
}

export default LeaguePage
