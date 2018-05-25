import React from 'react'
import styled from 'theme'

type NickNameProps = {
    name: string,
    className?: string
}

const NickName: React.StatelessComponent<NickNameProps> = props => (
        <span className={props.className}>
            {props.name}
        </span>
)

// font-family: 'Roboto', sans-serif;
export const NIckNameStyled = styled(NickName)`
font-family: 'Roboto', sans-serif;
font-size: 20px;
`
