import React, { useState } from 'react';
import FormularioTurno from './FormularioTurno';
import ListadoMedicos from './ListadoMedicos';
// import Login from './Login';
import '../App.css'; 

export default function Header  () {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarListado, setMostrarListado] = useState(false);
  const [mostrarLogin, setMostrarLogin] = useState(false);

  function toggleFormulario ()  {
    setMostrarFormulario(!mostrarFormulario);
  };

  function toggleListado  ()  {
    setMostrarListado(!mostrarListado);
  };
  function toggleLogin ()  {
    setMostrarLogin(!mostrarLogin);
  };

  return (
    <nav classe="centrado">
      <a href="#ingresos">Ingresos</a>
      <a href="#pacientes">Pacientes</a>    
      <button onClick={toggleListado}>Médicos</button>
      {mostrarListado && <ListadoMedicos />}
      <button onClick={toggleFormulario}> Turnos</button>
      {mostrarFormulario && <FormularioTurno />}
      {/* <button onClick={toggleLogin}>Login</button>
      {mostrarFormulario && <Login/>} */}
      <a href="#contactarnos">Contactarnos</a>
    </nav>
  );
};


