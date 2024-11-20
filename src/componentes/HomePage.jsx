import React from 'react';
import Footer from './Footer';
import '../app.css';



export default function HomePage() {
  return (
    <div className="container">
      <main className="main-content">

      <h1 className="centrado">CLINICA DE LA SALUD </h1>
      <h2 className="centrado">BIENVENIDOS</h2>

      <p>OFRECEMOS LOS MEJORES SERVICIOS MEDICOS PARA UD. y LA COMUNIDAD</p>


        <figure className="centrado"> <img src="/imag_clinica_antes.jpg" alt="Descripción de la imagen" width="600" />
          <figcaption>NUESTROS INICIOS...</figcaption> </figure>
        <figure className="centrado"> <img src="/imag_clinica_actual.jpg" alt="Descripción de la imagen" width="600" />
          <figcaption>NUESTRO PRESENTE...</figcaption> </figure>

     
        
       
      </main>


      <Footer />
    </div>
  )
}


