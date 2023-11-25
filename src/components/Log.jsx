import React, { useState, useEffect } from 'react';

export default function Log() {
  const [filter, setFilter] = useState({
    tipo_documento: 'CC',
    nro_documento: '',
    fecha: '',    
  });
  const [logs, setLogs] = useState([]);

const handleSearch = async () => {
    const { tipo_documento, nro_documento, fecha } = filter;

    // Verificar si hay un número de documento y una fecha
    if (fecha.trim() !== '') {
        const response = await fetch(`http://localhost:8000/log/${fecha}/`);
        const data = await response.json();
        if (nro_documento.trim() !== '') {
            const filteredData = data.filter((log) => log.tipo_documento === tipo_documento && log.nro_documento === nro_documento);
            setLogs(filteredData);
        } else {
            setLogs(data);
        }
    } else if (nro_documento.trim() !== '') {
        const response = await fetch(`http://localhost:8000/log/${tipo_documento}/${nro_documento}/`);
        const data = await response.json();
        setLogs(data);
    } else {
        // Si no hay número de documento o fecha, muestra un mensaje de error o realiza la lógica que desees
        console.error('Número de documento y/o fecha son obligatorios');
    }
};

  return (
    <div>
      {/* Filtros */}
      <div className='bg-secondary rounded'>
        {/* Filtro por Tipo de Documento */}
        <div className='input-group mb-3 p-2'>
          <label className='input-group-text' htmlFor='tipo_documento'>
            Tipo de Documento
          </label>
          <select
            className='form-select'
            id='tipo_documento'
            name='tipo_documento'
            onChange={(e) => setFilter({ ...filter, tipo_documento: e.target.value })}
            value={filter.tipo_documento}
          >
            {/* Opciones de tipo de documento */}
            <option>CC</option>
            <option>TI</option>
          </select>
        </div>

        {/* Filtro por Número de Documento */}
        <div className='input-group mb-3 p-2'>
          <label className='input-group-text' htmlFor='nro_documento'>
            # de Documento
          </label>
          <input
            type='text'
            className='form-control'
            id='nro_documento'
            name='nro_documento'
            onChange={(e) => setFilter({ ...filter, nro_documento: e.target.value })}
            value={filter.nro_documento}
          />
        </div>

        {/* Filtro por Fecha */}
        <div className='justify-content-center mb-3 p-2'>
          <label className='visually-hidden' htmlFor='fecha'>
            Fecha
          </label>
          <div className='input-group'>
            <div className='input-group-text'>Fecha</div>
            <input
              type='date'
              className='form-control'
              id='fecha'
              name='fecha'
              onChange={(e) => setFilter({ ...filter, fecha: e.target.value })}
              value={filter.fecha}
            />
          </div>
        </div>
      </div>

      {/* Botón de búsqueda */}
      <div className='d-grid gap-2 p-2'>
        <button type='button' className='btn btn-primary' onClick={handleSearch}>
          Buscar
        </button>
      </div>

      {/* Resultados de búsqueda */}
      <table className='table table-hover mt-5'>
        <thead>
          <tr className='table-primary'>
            <th scope='col'>ID</th>
            <th scope='col'>Fecha</th>
            <th scope='col'>Acción</th>
            <th scope='col'>Tipo de Documento</th>
            <th scope='col'># de documento</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(logs) && logs.length > 0 ? (
            logs.map((log) => (
              <tr key={log.id}>
                <td>{log.id}</td>
                <td>{log.timestamp}</td>
                <td>{log.action}</td>
                <td>{log.tipo_documento}</td>
                <td>{log.nro_documento}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='5'>No hay resultados</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
