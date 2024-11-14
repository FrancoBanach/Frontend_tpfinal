import React, { useEffect, useState } from 'react';

export default function ListadoPacientes() {

    const pacientesMentira = [
        {
            "paciente_id": 1,
            "numero_historia_clinica": 1001,
            "dni": "12345678A",
            "nombre": "Jorge",
            "apellido": "Franco",
            "domicilio": "Calle Falsa 123",
            "codigo_postal": 28001,
            "telefono": "123-456-789"
        },
        {
            "paciente_id": 2,
            "numero_historia_clinica": 1002,
            "dni": "23456789B",
            "nombre": "Ana",
            "apellido": "Gómez",
            "domicilio": "Avenida Siempreviva 742",
            "codigo_postal": 28002,
            "telefono": "987-654-321"
        },
        {
            "paciente_id": 3,
            "numero_historia_clinica": 1003,
            "dni": "34567890C",
            "nombre": "Luis",
            "apellido": "Martínez",
            "domicilio": "Calle del Sol 56",
            "codigo_postal": 28003,
            "telefono": "456-789-123"
        },
        {
            "paciente_id": 4,
            "numero_historia_clinica": 1004,
            "dni": "45678901D",
            "nombre": "María",
            "apellido": "López",
            "domicilio": "Plaza Mayor 7",
            "codigo_postal": 28004,
            "telefono": "321-654-987"
        }
    ]



    const [pacientes, setPacientes] = useState([]); // Estado para almacenar los pacientes

    useEffect(() => {
        // Función para obtener pacientes desde el endpoint
        const fetchPacientes = async () => {
            try {
                const response = await fetch('http://localhost:8080/pacientes');
                const data = await response.json();
                setPacientes(data);
            } catch (error) {
                console.error('Error al obtener los pacientes:', error);
            }
        };

        fetchPacientes(); // Llama a la función de obtención al montar el componente
    }, []); // Array vacío para que solo se ejecute una vez

    return (
        <div>
            <h2>Listado de Pacientes</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Número de Historia Clínica</th>
                        <th>DNI</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Domicilio</th>
                        <th>Código Postal</th>
                        <th>Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {pacientesMentira.map((paciente) => (
                        <tr key={paciente.paciente_id}>
                            <td>{paciente.paciente_id}</td>
                            <td>{paciente.numero_historia_clinica}</td>
                            <td>{paciente.dni}</td>
                            <td>{paciente.nombre}</td>
                            <td>{paciente.apellido}</td>
                            <td>{paciente.domicilio}</td>
                            <td>{paciente.codigo_postal}</td>
                            <td>{paciente.telefono}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
