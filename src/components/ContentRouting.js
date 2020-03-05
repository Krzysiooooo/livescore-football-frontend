import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LeaguesPage from "./Pages/LeaguesPage";
import HomePage from "./Pages/HomePage";
import LeaguePage from "./Pages/LeaguePage";

class ContentRouting extends React.Component {
    render() {
        return (<Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/leagues' component={LeaguesPage}/>
            <Route exact path='/league/:id' component={LeaguePage}/>
        </Switch>)
    }
}

export default ContentRouting
