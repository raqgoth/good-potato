import React from 'react'
import { Switch, Route, withRouter } from 'react-router'
import Home from '../Pages/Home'
import Login from '../Pages/Login'


const Router = (props) => {
    return (
        <main>
            <Switch>
                <Route
                exact 
                path = "/login"
                component = {props => {
                    <Login {...props} />
                }}
                />
                <Route 
                exact 
                path = "/home"
                component = {props => {
                    <Home {...props} />
                }}
                />
            </Switch>

        </main>
    )
}

export default withRouter(Router)


