import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">HomePage</NavLink>
                </li>
            </ul>

        </div>
    )
}
