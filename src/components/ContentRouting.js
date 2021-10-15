import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LeaguesPage from "./Pages/LeaguesPage";
import HomePage from "./Pages/HomePage";
import LeaguePage from "./Pages/LeaguePage";
import TeamPage from "./Pages/TeamPage";
import FixturePage from "./Pages/FixturePage";

class ContentRouting extends React.Component {
    render() {
        return (<Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/leagues' component={LeaguesPage}/>
            <Route exact path='/league/:id' component={LeaguePage}/>
            <Route exact path='/team/:id' component={TeamPage}/>
            <Route exact path='/fixture/:id' component={FixturePage}/>
        </Switch>)
    }
}

export default ContentRouting
