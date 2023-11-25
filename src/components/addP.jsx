import React, { useState } from 'react';

export default function AddP() {
  const [formData, setFormData] = useState({
    primer_nombre: '',
    segundo_nombre: '',
    apellidos: '',
    correo_electronico: '',
    tipo_documento: 'CC',  // Establece un valor predeterminado para tipo_documento
    fecha_nacimiento: '',
    celular: '',
    genero: 'M',  // Establece un valor predeterminado para genero
    foto: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Validación del tamaño de la foto (2 MB)
    if (!file) {
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert('El tamaño de la foto no debe superar los 2 MB');
      e.target.value = null; // Limpia el input de archivo
      return;
    }

    setFormData({
      ...formData,
      [e.target.name]: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    const isNumber = /^\d+$/;
    const isAlphaSpace = /^[A-Za-z\s]+$/;
    const isValidDate = /^\d{4}-\d{2}-\d{2}$/;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!isNumber.test(formData.nro_documento) || formData.nro_documento.length > 10) {
        alert('Número de documento debe ser un número y no mayor de 10 caracteres');
        return;
    }

    if (!isAlphaSpace.test(formData.primer_nombre) || formData.primer_nombre.length > 30) {
        alert('Primer nombre debe contener solo letras y espacios y no ser mayor de 30 caracteres');
        return;
    }

    if ((!isAlphaSpace.test(formData.segundo_nombre) || formData.segundo_nombre.length > 30) && (formData.segundo_nombre != "")) {
        alert('Segundo nombre debe contener solo letras y espacios y no ser mayor de 30 caracteres');
        return;
    }

    if (!isAlphaSpace.test(formData.apellidos) || formData.apellidos.length > 60) {
        alert('Apellidos debe contener solo letras y espacios y no ser mayor de 60 caracteres');
        return;
    }

    if (!isValidDate.test(formData.fecha_nacimiento)) {
        alert('Fecha de nacimiento inválida');
        return;
    }

    if (!isValidEmail.test(formData.correo_electronico)) {
        alert('Correo electrónico inválido');
        return;
    }

    if (!isNumber.test(formData.celular) || formData.celular.length !== 10) {
        alert('Celular debe ser un número y tener 10 caracteres');
        return;
    }

    // Aquí puedes enviar los datos al servidor para crear la persona
    try {
      const formDataObj = new FormData();

      // Agrega campos de texto al objeto FormData
      Object.keys(formData).forEach((key) => {
        formDataObj.append(key, formData[key]);
      });

      const response = await fetch('http://localhost:8000/app/', {
        method: 'POST',
        body: formDataObj,
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        alert('Persona creada exitosamente');
        window.location.reload();
      }else{
        alert('Error con los datos ingresados');
      }
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="">
      <form className="row g-3 mt-3" role="search" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="col-md-12 text-center mt-3">
          <img
            src={formData.foto ? URL.createObjectURL(formData.foto) : 'https://topesdegama.com/app/uploads-topesdegama.com/2017/11/Cuanta-Google.jpg'}
            alt="Foto"
            style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '50%' }}
          />
          <input
            className="form-control mt-3"
            type="file"
            id="formFile"
            name="foto"
            onChange={handleFileChange}
          />
        </div>
        <div className="col-md-6 mt-5">
          <select
            name="tipo_documento"
            className="form-control"
            onChange={handleChange}
            value={formData.tipo_documento}
          >
            <option>CC</option>
            <option>TI</option>
          </select>
        </div>
        <div className="col-md-6 mt-5">
          <input
            placeholder='Nro documento'
            className="form-control"
            name="nro_documento"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 mt-5">
          <input
            placeholder='Primer nombre'
            className="form-control"
            name="primer_nombre"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 mt-5">
          <label className="visually-hidden" htmlFor="autoSizingInputGroup">
            ID
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="autoSizingInputGroup"
              placeholder="Segundo nombre"
              name="segundo_nombre"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <label className="visually-hidden" htmlFor="autoSizingInputGroup">
            ID
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="autoSizingInputGroup"
              placeholder="Apellidos"
              name="apellidos"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <label className="visually-hidden" htmlFor="autoSizingInputGroup">
            Correo
          </label>
          <div className="input-group">
            <div className="input-group-text">@</div>
            <input
              type="email"
              className="form-control"
              id="autoSizingInputGroup"
              placeholder="Correo"
              name="correo_electronico"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <label className="visually-hidden" htmlFor="autoSizingInputGroup">
            Fecha
          </label>
          <div className="input-group">
            <div className="input-group-text">Fecha</div>
            <input
              type="date"
              className="form-control"
              id="autoSizingInputGroup"
              placeholder="Fecha"
              name="fecha_nacimiento"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <label className="visually-hidden" htmlFor="autoSizingInputGroup">
            Celular
          </label>
          <div className="input-group">
            <div className="input-group-text">Tel</div>
            <input

              type="text"
              className="form-control"
              id="autoSizingInputGroup"
              placeholder="celular"
              name="celular"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <select
            id="inputState"
            className="form-select"
            name="genero"
            value={formData.genero}
            onChange={handleChange}
          >
            <option>M</option>
            <option>F</option>
            <option>NB</option>
            <option>NR</option>
          </select>
        </div>
        <div className="d-grid gap-2 mt-5">
          <button type="submit" className="btn btn-primary">
            Enviar cambios
          </button>
        </div>
      </form>
    </div>
  );
}
