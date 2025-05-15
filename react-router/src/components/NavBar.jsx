import React from 'react'
import { NavLink } from "react-router-dom"

const links = [
    {
        path: '/',
        label: 'Homepage',
    },
    {
        path: '/about',
        label: 'About',
    },
    {
        path: '/products',
        label: 'Prodotti',
    },
]

const NavBar = () => {
    return (
        <nav>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                                isActive ? 'custom-link custom-link-active' : 'custom-link'
                            }
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar