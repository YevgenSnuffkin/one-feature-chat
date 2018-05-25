import React from 'react'
import styled from 'theme'

type FooterProps = {
    className?: string
}

const Footer: React.StatelessComponent<FooterProps> = props => (
    <div className={props.className}>
        <div className="pure-u-1">2018</div>
    </div>
)

export const FooterStyled = styled(Footer)`
width: 100%;
font-size: 25px;
text-align: center;
padding-top: 15px;
background-color: #f7f9fc;
height: 50px;
position: fixed;
bottom: 0;
`
