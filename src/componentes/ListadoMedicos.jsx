
import '../app.css';

import React, { useEffect, useState } from 'react';

export default function ListadoMedicos() {
  const [medicos, setMedicos] = useState([]);
  // const [medicos, setMedicos] = useState([{ nombre: 'Dr. Jose Fernandez', especialidad: 'cirugia' , mat: '9821' },
  //   { nombre: 'Dra. Analia Corti', especialidad: 'clinica general', mat: '1235' },
  //   { nombre: 'Dra. Cristina Alexandre', especialidad: 'Pediatría', mat: '8452' },
  //   { nombre: 'Dra. Rosana Perez', especialidad: 'ginecologia' , mat: '6324' },
  //   { nombre: 'Dr. Victor gomez', especialidad: 'cardiologia' , mat: '5213' },
  //   { nombre: 'Dr. Esteban Garcia', especialidad: 'traumatologia' , mat: '32141' },

  // ]);
  const [nuevoMedico, setNuevoMedico] = useState({
    matricula: '',
    especialidad: '',
    apellido: '',
    nombre: '',
    telefono: '',
    direccion: ''
});
const [editando, setEditando] = useState(false);
    const [matriculaEditando, setMatriculaEditando] = useState('');
  
        
    const obtenerMedicos = async () => {
      try {
          const response = await fetch('http://localhost:3000/api/medico');
          if (!response.ok) throw new Error('Error al obtener médicos');
          const data = await response.json();
          setMedicos(data);
      } catch (error) {
          console.error('Error al obtener médicos:', error);
      }
  };  
        
  useEffect(() => {
    obtenerMedicos();
}, []);

const manejarEnvio = async (e) => {
  e.preventDefault();
  try {
      if (editando) {
          // Actualiza el médico existente
          const response = await fetch(`http://localhost:3000/api/medico/${matriculaEditando}`, {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(nuevoMedico),
          });
          if (!response.ok) throw new Error('Error al actualizar médico');
          setEditando(false);
          setMatriculaEditando('');
      } else {
          // Crea un nuevo médico
          const response = await fetch('http://localhost:3000/api/medico', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(nuevoMedico),
          });
          if (!response.ok) throw new Error('Error al crear médico');
      }
      // Reinicia el formulario y recarga la lista de médicos
      setNuevoMedico({
          matricula: '',
          especialidad: '',
          apellido: '',
          nombre: '',
          telefono: '',
          direccion: ''
      });
      obtenerMedicos(); // Recargar la lista de médicos
  } catch (error) {
      console.error('Error al guardar médico:', error);
  }
};

const editarMedico = (medico) => {
  setNuevoMedico(medico);
  setEditando(true);
  setMatriculaEditando(medico.matricula);
};

const eliminarMedico = async (matricula) => {
  try {
      const response = await fetch(`http://localhost:3000/api/medico/${matricula}`, {
          method: 'DELETE',
      });
      if (!response.ok) throw new Error('Error al eliminar médico');
      obtenerMedicos(); // Recargar la lista de médicos
  } catch (error) {
      console.error('Error al eliminar médico:', error);
  }
};

  return (
    <div className="container">
      <h2>Listado de Médicos</h2>
      <form onSubmit={manejarEnvio} className="medico-form">
                <input
                    type="text"
                    placeholder="Matrícula"
                    value={nuevoMedico.matricula}
                    onChange={(e) => setNuevoMedico({ ...nuevoMedico, matricula: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Especialidad"
                    value={nuevoMedico.especialidad}
                    onChange={(e) => setNuevoMedico({ ...nuevoMedico, especialidad: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Apellido"
                    value={nuevoMedico.apellido}
                    onChange={(e) => setNuevoMedico({ ...nuevoMedico, apellido: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Nombre"
                    value={nuevoMedico.nombre}
                    onChange={(e) => setNuevoMedico({ ...nuevoMedico, nombre: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Teléfono"
                    value={nuevoMedico.telefono}
                    onChange={(e) => setNuevoMedico({ ...nuevoMedico, telefono: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Dirección"
                    value={nuevoMedico.direccion}
                    onChange={(e) => setNuevoMedico({ ...nuevoMedico, direccion: e.target.value })}
                    required
                />
                <button style={{backgroundColor:"#46c65d", marginTop: '1rem'}} type="submit" className="" >{editando ? 'Actualizar' : 'Agregar'} Médico</button>
            </form>

      <table className="table table-striped">
        <thead>
          <tr>
          <th>Matrícula</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Especialidad</th>
                        <th>Teléfono</th>
                        <th>Dirección</th>
                        <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        {medicos.map((medico) => (
                        <tr key={medico.matricula}>
                            <td>{medico.matricula}</td>
                            <td>{medico.nombre}</td>
                            <td>{medico.apellido}</td>
                            <td>{medico.especialidad}</td>
                            <td>{medico.telefono}</td>
                            <td>{medico.direccion}</td>
                            <td>
                                <button className="btn-edit" onClick={() => editarMedico(medico)}>Editar</button>
                                <button className="btn-delete" onClick={() => eliminarMedico(medico.matricula)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
        </tbody>
      </table>
    </div>
  );
}





// function ListadoMedicos ()  {
//   const medicos = [
//     { nombre: 'Dr. Jose Fernandez', especialidad: 'cirugia' , mat: '9821' },
//         { nombre: 'Dra. Analia Corti', especialidad: 'clinica general', mat: '1235' },
//         { nombre: 'Dra. Cristina Alexandre', especialidad: 'Pediatría', mat: '8452' },
//         { nombre: 'Dra. Rosana Perez', especialidad: 'ginecologia' , mat: '6324' },
//         { nombre: 'Dr. Victor gomez', especialidad: 'cardiologia' , mat: '5213' },
//         { nombre: 'Dr. Esteban Garcia', especialidad: 'traumatologia' , mat: '32141' },

    
//   ];

//   return (
//     <ul>
//       {medicos.map(medico => (
//         <li key={medico.id}>
//           {medico.nombre} - {medico.especialidad} - {medico.telefono} - {medico.email}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ListadoMedicos;
