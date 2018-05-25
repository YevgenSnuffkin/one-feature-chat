import React, { SyntheticEvent } from 'react'
import styled from 'theme'

type FormProps = {
    className?: string,
    text: string,
    messageSubmit(e: SyntheticEvent<HTMLFormElement>): void,
    handleChange(target: SyntheticEvent<HTMLInputElement>): void
}

const Form: React.StatelessComponent<FormProps> = props => (
    <div className={props.className}>
        <form onSubmit={props.messageSubmit}>
            <input type="text" placeholder="enter message" value={props.text} onChange={props.handleChange} />
            <button className="pure-button pure-button-primary">Send</button>
        </form>
    </div>
)

export const FormStyled = styled(Form)`
width: 300px;
margin: 0 auto;
`
