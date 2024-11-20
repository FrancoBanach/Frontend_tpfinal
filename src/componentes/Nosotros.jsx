import React from 'react'
import Footer from './Footer';
import '../app.css';

export default function Nosotros() {
  return (
    <div className="container">
      <main className="main-content">
        <h1 className="centrado">BIENVENIDO A CLINICA DE LA SALUD </h1>
        <h2 className="centrado">ESTA ES NUESTRA HISTORIA</h2>
        <p className="centrado">Esta Institucion tiene  varios años de vida y con el transcurso del tiempo fue afianzandose en el corazon de
          nuestra comunidad <br /> brindando servicios con calidad y experiencia, de manera de ser una herramienta indispensable para la
          salud de las personas.
        </p>
        <video width="600" controls> 
          <source src="/video_clinica.mp4" type="video/mp4" /> 
        Tu navegador no soporta la etiqueta de video. 
        </video>
      </main>


      <Footer />
    </div>
  )
}
