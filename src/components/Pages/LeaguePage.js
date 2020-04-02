import React from 'react'
import BackendApi from "../../services/BackendApi";
import {Image} from "react-bootstrap";

class LeaguePage extends React.Component {

    constructor(props) {
        super();
        this.state = {league:{}};
        const id = props.match.params.id;
        BackendApi.getLeague(id).then((league) => {
            this.setState({league: league});
        });
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
