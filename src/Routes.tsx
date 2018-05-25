import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { MessageLayout } from 'features'

const routesPath = [
    {
        path: '/messages',
        component: MessageLayout
    }
]

export const Routes: React.StatelessComponent<{}> = () => (
    <Switch>
        {routesPath.map((route, index) => (
            <Route
                key={index}
                exact
                path={route.path}
                component={route.component}
            />
        ))}
        <Redirect to="/messages"/>
    </Switch>
)
