import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Documentation from './pages/Documentation'
import Examples from './pages/Examples'
import Home from './pages/Home'

function App () {
    return (
        <Router>
            <Switch>
                <Route path="/documentation" component={Documentation} />
                <Route path="/examples" component={Examples} />
                <Route path="/" exact={true} component={Home} />
            </Switch>
        </Router>
    )
}

export default App