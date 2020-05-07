import React from 'react'

class TeamPage extends React.Component{

    constructor(props){
        super(props);
        const teamId = props.match.params.id;
        console.log(teamId);
    }

   render() {
       return <h1>TeamPage</h1>
   }

}

export default TeamPage