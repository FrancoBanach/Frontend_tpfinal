import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import '../app.css'; // Asegúrate de que este archivo contenga los estilos necesarios

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
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
              <Link className="nav-link" to="/turnos">Turnos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Nosotros">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">Iniciar Sesion</Link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
}
