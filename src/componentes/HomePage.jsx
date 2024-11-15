import React from 'react';
import Footer from './Footer';
import '../app.css';



export default function HomePage() {
  return (
    <div className="container">
      <main className="main-content">
        <h1 className="centrado">CLINICA DE LA SALUD </h1>
        <h2 className="centrado">BIENVENIDOS</h2>
        <p>Ofrecemos los mejores servicios médicos para UD. y la COMUNIDAD</p>
      </main>


      <Footer />
    </div>
  )
}


