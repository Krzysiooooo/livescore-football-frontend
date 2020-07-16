import React from 'react'
import BriefCard from "../BriefCard/BriefCard";
import {CardDeck} from "react-bootstrap";
import BackendApi from "../../services/BackendApi";

class HomePage extends React.Component {

    constructor() {
        super();
        this.state = {leagues: []};

        const query = {
            ids: ["517", "524", "754", "891"]
        };

        BackendApi.getLeagues(query).then(data => {
            this.setState({leagues: data.leagues})
        });
    }

    render() {
        return <div>
            <h2>Favorites leagues</h2>
            <CardDeck>
                {this.state.leagues.map(league => <BriefCard key={league.league_id} data-league={league}></BriefCard>)}
            </CardDeck>
        </div>
    }
}

export default HomePage
