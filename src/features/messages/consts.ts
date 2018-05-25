import { Message } from 'types'

export const ACTIONS = {
    FETCH_MESSAGES: 'FETCH_MESSAGES',
    ADD_MESSAGE: 'ADD_MESSAGE',
    DELETE_MESSAGE: 'DELETE_MESSAGE',
}
const Messages: Array<Message> = []

export const initialState= {
    messages: Messages
}
