import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LeaguesPage from "./Pages/LeaguesPage";
import ClubsPage from "./Pages/ClubsPage";
import HomePage from "./Pages/HomePage";

class ContentRouting extends React.Component {
    render() {
        return (<Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/leagues' component={LeaguesPage}/>
            <Route exact path='/clubs' component={ClubsPage}/>
        </Switch>)
    }
}

export default ContentRouting
