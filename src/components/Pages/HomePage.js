import React from 'react'
import BriefCard from "../BriefCard/BriefCard";
import {CardDeck} from "react-bootstrap";
import MockApi from "../../services/MockApi";

class HomePage extends React.Component {

    render() {
        return <div>
            <h2>Start</h2>
            <h3>Leagues</h3>
            <CardDeck>
                <BriefCard data-team={MockApi.getTeam(5)}></BriefCard>
                <BriefCard data-team={MockApi.getTeam(10)}></BriefCard>
                <BriefCard data-team={MockApi.getTeam(3)}></BriefCard>
                <BriefCard data-team={MockApi.getTeam(9)}></BriefCard>
                <BriefCard data-team={MockApi.getTeam(8)}></BriefCard>
            </CardDeck>
        </div>
    }
}

export default HomePage
