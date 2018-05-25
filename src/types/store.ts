import { Dispatch as ReduxDispatch } from 'redux'
import { MessageReducer } from 'features'

export type RootReducer = {
    messages: MessageReducer
}

export type Dispatch = ReduxDispatch<RootReducer>
