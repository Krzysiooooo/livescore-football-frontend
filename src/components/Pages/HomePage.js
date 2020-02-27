import React from 'react'
import BriefCard from "../BriefCard/BriefCard";
import {CardDeck} from "react-bootstrap";
import MockApi from "../../services/MockApi";

class HomePage extends React.Component {

    constructor() {
        super();
        this.state = {leagues: MockApi.getFavoritesLeagues()};
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
