import React, { useState } from 'react';
import '../app.css';

function FormularioTurno() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [medico, setMedico] = useState('');



    const medicos = [
        { nombre: 'Dr. Jose Fernandez', especialidad: 'cirugia', mat: '9821' },
        { nombre: 'Dra. Analia Corti', especialidad: 'clinica general', mat: '1235' },
        { nombre: 'Dra. Cristina Alexandre', especialidad: 'Pediatría', mat: '8452' },
        { nombre: 'Dra. Rosana Perez', especialidad: 'ginecologia', mat: '6324' },
        { nombre: 'Dr. Victor gomez', especialidad: 'cardiologia', mat: '5213' },
        { nombre: 'Dr. Esteban Garcia', especialidad: 'traumatologia', mat: '32141' },

    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Fecha:', fecha);
        console.log('Hora:', hora);
        console.log('Médico:', medico);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Fecha:</label>
                <input
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                />
            </div>
            <div>
                <label>Hora:</label>
                <input
                    type="time"
                    value={hora}
                    onChange={(e) => setHora(e.target.value)}
                />
            </div>
            <div>
                <label>Médico:</label>
                <select value={medico} onChange={(e) => setMedico(e.target.value)}>
                    <option value="">Selecciona un médico</option>
                    {medicos.map((medico) => (
                        <option key={medico.id} value={medico.nombre}>
                            {medico.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Pedir Turno</button>
        </form>
    );
};

export default FormularioTurno;