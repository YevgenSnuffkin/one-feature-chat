import React, { SyntheticEvent } from 'react'
import { RootReducer, Dispatch } from 'types'

import { fetchMessage, addMessage, deleteMessage } from './actions'
import { container } from 'hoc'
import { compose } from 'redux'
import { MessageReducer, Nullable } from './types'
import { MessageStyled, NIckNameStyled, FormStyled } from 'components'

import styled from 'theme'

type nullableString = Nullable<string>

type MessageLayoutProps = {
    messages: MessageReducer
    addMessage(name: nullableString, text: string): void,
    deleteMessage(id: string): void,
    fetchMessage(): void
}

type MessageLayoutState = {
    messageText: string,
    nickName: nullableString
}

export class MessageLayout extends React.Component<MessageLayoutProps, MessageLayoutState> {
    state: MessageLayoutState = {
        nickName: '',
        messageText: ''
    }

    constructor(props: MessageLayoutProps) {
        super(props)

        this.messageSubmit = this.messageSubmit.bind(this)
        this.deleteMessage = this.deleteMessage.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    componentWillMount() {
        this.setState({
            nickName: prompt('type in your name')
        })
    }

    messageSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        this.props.addMessage(this.state.nickName, this.state.messageText)
    }
    handleChange({ currentTarget }: SyntheticEvent<HTMLInputElement>) {
        this.setState({
            messageText: currentTarget.value
        })
    }

    deleteMessage() { }

    render() {
        const { messages } = this.props

        const mappedMessages =  messages.messages.map(message => (
            <StyledLi key={message.id}>
                <NIckNameStyled name={message.name} /> said:
                <MessageStyled message={message.text} />
            </StyledLi>
            )
        )

        return (
            <div className="pure-form">
                <CenteredUl className="pure-menu-list">
                    {mappedMessages}
                </CenteredUl>
                <FormStyled messageSubmit={this.messageSubmit} handleChange={this.handleChange} text={this.state.messageText} />
            </div>
        )
    }
}

const mapStateToProps = (state: RootReducer) => ({
    messages: state.messages
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addMessage: compose(dispatch, addMessage),
    deleteMessage: compose(dispatch, deleteMessage),
    fetchMessage: compose(dispatch, fetchMessage),
})

export default container(
    mapStateToProps,
    mapDispatchToProps
)((props: MessageLayoutProps) => <MessageLayout {...props}/>)

const CenteredUl = styled.ul`
text-align: center;
`
const StyledLi = styled.li`
margin: 15px;
`
