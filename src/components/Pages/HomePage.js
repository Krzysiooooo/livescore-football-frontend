import React from 'react'
import BriefCard from "../BriefCard/BriefCard";
import {CardDeck} from "react-bootstrap";

class HomePage extends React.Component {
    render() {
        return <div>
            <h2>Home</h2>
            <h3>Leagues</h3>
            <CardDeck>
                <BriefCard data-id="1"></BriefCard>
                <BriefCard data-id="2"></BriefCard>
                <BriefCard data-id="3"></BriefCard>
            </CardDeck>
        </div>
    }
}

export default HomePage
