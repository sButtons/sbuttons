import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Documentation from './pages/Documentation'
import Examples from './pages/Examples'
import Home from './pages/Home'
import Projects from './pages/Projects'
import vars from './vars'
import NotFound from './pages/404'

function App () {
    return (
        <Router basename={vars.path} >
            <Routes>
                <Route path="/projects-using-sbuttons" element={<Projects />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/examples" element={<Examples />} />
                <Route path="/" exact={true} element={<Home />} />
                <Route element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default App