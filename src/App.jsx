import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Navbar from "./componentes/NavBar"
import HomePage from "./componentes/HomePage"
import ListadoMedicos from "./componentes/ListadoMedicos"
import ListadoPacientes from "./componentes/ListadoPacientes"
import FormularioTurno from "./componentes/FormularioTurno"
import Nosotros from "./componentes/Nosotros"
import Login from "./componentes/Login"
import Dashboard from './componentes/Dashboard';

export default function App() {


  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/medicos" element={<ListadoMedicos />} />
          <Route path="/pacientes" element={<ListadoPacientes />} />
          <Route path="/turnos" element={<FormularioTurno />} />
          <Route path="/Nosotros" element={<Nosotros/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}


