import React from 'react'
import BriefCard from "../BriefCard/BriefCard";
import {CardDeck} from "react-bootstrap";
import BackendApi from "../../services/BackendApi";

class HomePage extends React.Component {

    constructor() {
        super();
        this.state = {leagues: []};

        const query = {
            ids: ["2", "35", "55", "30"]
        };

        BackendApi.getLeagues(query).then(data => {
            this.setState({leagues: data})
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
