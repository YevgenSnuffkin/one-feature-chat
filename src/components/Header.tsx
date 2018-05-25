import React from 'react'
import { Link } from 'react-router-dom'

const menuItem = [
    {
        path: '/messages',
        label: 'Messages'
    }
]

export const Header: React.StatelessComponent<{}> = () => (
    <nav>
        {menuItem.map((link, index) => (
            <li key={index}>
                <Link to={link.path}>
                    {link.label}
                </Link>
            </li>
        ))}
    </nav>
)
