import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../app.css';

export default function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <h1 class = "centrado"> CLINICA DE LA SALUD  </h1>
        <h2 class="centrado"> BIENVENIDOS </h2>
        <p>Ofrecemos los mejores servicios médicos para UD. y la COMUNIDAD</p>
        
      </main>
      


      <Footer />
    </div>
  )
}


