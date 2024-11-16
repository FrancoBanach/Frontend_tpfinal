import React from 'react';
import Footer from './Footer';
import '../app.css';



export default function HomePage() {
  return (
    <div className="container">
      <main className="main-content">
      <img src={"$/public/imag_clinica_actual.jpg"} alt="Descripción de la imagen" width="600" />
        <h1 className="centrado">CLINICA DE LA SALUD </h1>
        <h2 className="centrado">BIENVENIDOS</h2>
        <p>Ofrecemos los mejores servicios médicos para UD. y la COMUNIDAD</p>
        {/* <img src="https://api.onedrive.com/v1.0/drives/50B37C0DC2E9328D/items/50B37C0DC2E9328D!533498/thumbnails/0/c1446x675/content/-2067485558_20230206_123601_6913334.c1446x675.jpg?prefer=noredirect%2Cclosestavailablesize&cb=2024-11-15T17%3A12%3A11.39Z&eh=Scenario%3AOneUp.Shared" alt="Nuestra Institucion" width="600" /> </div> */}
      </main>


      <Footer />
    </div>
  )
}


