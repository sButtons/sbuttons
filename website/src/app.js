import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Documentation from './pages/Documentation'
import Examples from './pages/Examples'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App () {
    return (
        <Router basename="/sbuttons" >
            <Switch>
                <Route path="/projects-using-sbuttons" component={Projects} />
                <Route path="/documentation" component={Documentation} />
                <Route path="/examples" component={Examples} />
                <Route path="/" exact={true} component={Home} />
            </Switch>
        </Router>
    )
}

export default App