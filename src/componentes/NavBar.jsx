import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/medicos">Medicos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pacientes">Pacientes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/turnos"> Turnos </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
