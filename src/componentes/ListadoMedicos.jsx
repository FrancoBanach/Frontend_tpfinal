import React from 'react';
import '../app.css';

function ListadoMedicos ()  {
  const medicos = [
    { nombre: 'Dr. Jose Fernandez', especialidad: 'cirugia' , mat: '9821' },
        { nombre: 'Dra. Analia Corti', especialidad: 'clinica general', mat: '1235' },
        { nombre: 'Dra. Cristina Alexandre', especialidad: 'Pediatría', mat: '8452' },
        { nombre: 'Dra. Rosana Perez', especialidad: 'ginecologia' , mat: '6324' },
        { nombre: 'Dr. Victor gomez', especialidad: 'cardiologia' , mat: '5213' },
        { nombre: 'Dr. Esteban Garcia', especialidad: 'traumatologia' , mat: '32141' },

    
  ];

  return (
    <ul>
      {medicos.map(medico => (
        <li key={medico.id}>
          {medico.nombre} - {medico.especialidad} - {medico.telefono} - {medico.email}
        </li>
      ))}
    </ul>
  );
};

export default ListadoMedicos;
