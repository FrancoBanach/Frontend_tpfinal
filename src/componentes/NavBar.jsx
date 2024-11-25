import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import '../app.css'; // Asegúrate de que este archivo contenga los estilos necesarios
const reload = () => {
  window.location.reload(); // Recarga la página
};
export default function NavBar() {
  return (
    <nav style={{backgroundColor:"#41f805"}} className="navbar navbar-expand-lg ">
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
            <button style={{backgroundColor:"#41f805"}} onClick={reload} type="button">Cerrar Sesion</button>
          </ul>
          
        </div>
      </div>
    </nav>
  );
}
