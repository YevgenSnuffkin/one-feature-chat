import React from 'react'
import styled from 'theme'

type MessageProps = {
    message: string,
    className?: string
}

const Message: React.StatelessComponent<MessageProps> = props => (
    props.message.length > 0 ? (
        <div className={props.className}>
            {props.message}
        </div>
    ) : null
)

export const MessageStyled = styled(Message)`
font-family: 'Roboto', sans-serif;
`
