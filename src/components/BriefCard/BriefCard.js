import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";
import './BriefCard.css'

class BriefCard extends React.Component {

    constructor(props) {
        super();
        this.state = {id: props['data-id']};
    }

    render() {
        return <Card className="brief-card">
            <Card.Img variant="top" src={`https://media.api-football.com/leagues/${this.state.id}.png`}/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

    }
}

export default BriefCard
