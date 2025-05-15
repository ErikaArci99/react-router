import React from 'react'
import { NavLink } from "react-router-dom"

const links = [
    {
        path: '/',
        label: 'Homepage',
    },
    {
        path: '/products',
        label: 'Prodotti',
    },
    {
        path: '/aboutus',
        label: 'Su Di Noi',
    },
    {
        path: '/contacts',
        label: 'Contattaci',
    },
]

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom shadow-sm">
            <div className="container justify-content-center">
                <ul className="navbar-nav gap-3">
                    {links.map((link, index) => (
                        <li className="nav-item" key={index}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'nav-link custom-link custom-link-active'
                                        : 'nav-link custom-link'
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar