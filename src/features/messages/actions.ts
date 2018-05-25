import { ACTIONS } from './consts'

export const addMessage = (name: string | null, text: string) => ({
    type: ACTIONS.ADD_MESSAGE,
    payload: {
        name,
        text
    }
})

export const deleteMessage = (id: string) => ({
    type: ACTIONS.DELETE_MESSAGE,
    payload: {
        id
    }
})

export const fetchMessage = () => ({
    type: ACTIONS.FETCH_MESSAGES
})
