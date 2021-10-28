import * as React from "react";

class FixtureLineup extends React.Component {

    renderPlayer(player, key) {
        const p = player.player;
        return <tr key={key}>
            <td>{p.number}</td>
            <td>{p.name}</td>
        </tr>
    }

    render() {
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