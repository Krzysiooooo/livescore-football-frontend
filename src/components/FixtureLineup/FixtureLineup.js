import * as React from "react";
import _ from "lodash";
import MissingData from "../MissingData/MissingData";
import {Link} from "react-router-dom";

class FixtureLineup extends React.Component {

    renderPlayer(player, key) {
        const p = player.player;
        return <tr key={key}>
            <td>{p.number}</td>
            <td><Link to={`/player/${player.player.id}`}>{p.name}</Link></td>
        </tr>
    }

    render() {
        if (!_.has(this.props, "lineup.startXI")) {
            return <MissingData></MissingData>
        }
        return <table className="table">
            <thead>
                <tr>
                    <th> Number</th>
                    <th> Name</th>
                </tr>
            </thead>
            <tbody>
                {this.props.lineup.startXI.map(this.renderPlayer)}
            </tbody>
        </table>
    }
}

export default FixtureLineup