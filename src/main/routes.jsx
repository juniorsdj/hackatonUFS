import React from 'react'
import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router'

import Bot from './basico'
import App from './app'
import Intermediario from './intermediario'
import Avancado from './avancado'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            {/* <IndexRoute component={Bot} />
            <Route path='/intermediario' component={Intermediario}/>
            <Route path='/avancado' component={Avancado}/> */}
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)

