import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { FooterStyled, Header } from 'components'
import { store } from './store'
import { Routes } from './Routes'

export const App: React.StatelessComponent<{}> = () => (
    <BrowserRouter>
        <Provider store={store}>
            <Fragment>
                <Header/>
                    <Routes/>
                <FooterStyled/>
            </Fragment>
        </Provider>
    </BrowserRouter>
)
