import React, { useState, useEffect } from 'react';
import { FaUser, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { BarLoader } from 'react-spinners'; // Importa el componente BarLoader

export default function Home() {
    const [personas, setPersonas] = useState([]);
    const [loading, setLoading] = useState(true); // Estado para controlar si los datos están cargando
    const navigate = useNavigate();

    const handleNavigate = (persona) => {
        navigate(`/cardP/${persona.tipo_documento}/${persona.nro_documento}`, { state: { tipo_documento: persona.tipo_documento, nro_documento: persona.nro_documento } });
    };

    useEffect(() => {
        // Realiza la solicitud GET al servidor
        fetch('http://localhost:8000/app/')
            .then((response) => response.json())
            .then((data) => setPersonas(data))
            .catch((error) => console.error('Error fetching data:', error))
            .finally(() => setLoading(false)); // Oculta el indicador de carga cuando la solicitud ha terminado
    }, []); // El array vacío asegura que useEffect solo se ejecute una vez, similar a componentDidMount

    return (
        <div>
            {loading ? (
                // Muestra el indicador de carga
                <div className="d-flex align-items-center justify-content-center" style={{ height: '300px' }}>
                    <BarLoader color="#36D7B7" loading={loading} />
                </div>
            ) : (
                <table className="table table-hover mt-5">
                    <thead>
                        <tr className="table-primary">
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Email</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Documento</th>
                            <th scope="col">Fecha de nacimiento</th>
                            <th scope="col">Género</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {personas.map((persona) => (
                            <tr key={persona.nro_documento}>
                                <td>{persona.primer_nombre} {persona.segundo_nombre}</td>
                                <td>{persona.apellidos}</td>
                                <td>{persona.correo_electronico}</td>
                                <td>{persona.celular}</td>
                                <td>{persona.tipo_documento} {persona.nro_documento}</td>
                                <td>{persona.fecha_nacimiento}</td>
                                <td>{persona.genero}</td>
                                <td className="d-flex align-items-center justify-content-evenly">
                                    <button className="btn btn-danger btn-sm" onClick={() => handleNavigate(persona)}>
                                        <FaUser />
                                    </button>
                                    <button className="btn btn-danger btn-sm"
                                        onClick={() => {
                                            const shouldDelete = window.confirm('¿Estás seguro de que deseas eliminar a esta persona?');

                                            if (shouldDelete) {
                                                // Aquí puedes realizar la lógica para borrar la persona
                                                // Puedes hacer una solicitud DELETE al servidor, por ejemplo.
                                                fetch(`http://localhost:8000/app/${persona.tipo_documento}/${persona.nro_documento}/`, {
                                                    method: 'DELETE',
                                                })
                                                    .then((response) => {
                                                        if (!response.ok) {
                                                            throw new Error(`Error deleting data: ${response.statusText}`);
                                                        }

                                                        // Verifica si la respuesta tiene datos antes de intentar analizarla como JSON
                                                        return response.text().then((text) => (text ? JSON.parse(text) : {}));
                                                    })
                                                    .then((data) => {
                                                        // Recarga la página después de eliminar exitosamente
                                                        window.location.reload();
                                                    })
                                                    .catch((error) => console.error(error));
                                            }
                                        }}

                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
