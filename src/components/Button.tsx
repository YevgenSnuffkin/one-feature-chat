import React, { SyntheticEvent } from 'react'

type ButtonProps = {
    label: string,
    onClick?(event: SyntheticEvent<HTMLButtonElement>): void
}

export const Button: React.StatelessComponent<ButtonProps> = props => (
    <button onClick={props.onClick}>
        {props.label}
    </button>
)
