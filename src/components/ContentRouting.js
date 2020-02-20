import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LeaguesPage from "./pages/LeaguesPage";
import ClubsPage from "./pages/ClubsPage";
import HomePage from "./pages/HomePage";

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
