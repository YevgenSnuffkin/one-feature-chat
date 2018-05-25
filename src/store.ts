import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducers } from 'features'
import { reducer as formReducer } from 'redux-form'
import logger from 'redux-logger'

const combinedReducers = combineReducers({
    ...reducers, form: formReducer
})

export const store = createStore(combinedReducers, applyMiddleware(logger))
