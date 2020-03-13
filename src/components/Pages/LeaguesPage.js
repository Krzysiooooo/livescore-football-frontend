import React from 'react'
import MockApi from "../../services/MockApi";

class LeaguesPage extends React.Component {

    constructor(){
        super();
        this.state = {
            leagues: []
        };

        MockApi.getLeagues().then((leagues) => {
            this.setState({leages: leagues});
        })
    }

    renderLeague(){
        // todo return JSX with league element
    }

    render() {
        return (<div>
            <h2>Leagues</h2>
            (this.state.leagues.map(renderLeague))
        </div>)
    }
}

export default LeaguesPage
