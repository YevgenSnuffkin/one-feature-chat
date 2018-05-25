import { initialState, ACTIONS } from './consts'

const uuidv4 = require('uuid/v4')

type Action = {
    type: string
    payload: {
        name: string,
        text: string,
        id: string
    }
}

export const messages = (state = initialState, action: Action) => {

    switch (action.type) {
        case ACTIONS.FETCH_MESSAGES: {
            return {...state, fetching: true}
        }
        case ACTIONS.ADD_MESSAGE: {
            return {
                messages: [
                    ...state.messages,
                    {
                        id: uuidv4(),
                        name: action.payload.name,
                        text: action.payload.text
                    }
                ]
            }
        }
        case ACTIONS.DELETE_MESSAGE: {
            return state.messages.filter(message => message.id !== action.payload.id)
        }
        default: {
            return state
        }
    }
}
