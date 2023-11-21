import React from 'react'

export default function addP() {
  return (
    <div className=''>
      <form class="row g-3 mt-5" role="search">
        
        <div class="col-md-6 mt-5 ">
          <input type="text" class="form-control" placeholder="Primer Nombre" aria-label="First name"/>
        </div>
        <div class="col-md-6 mt-5">
          <input type="text" class="form-control" placeholder="Segundo Nombre" aria-label="Last name"/>
        </div>
        
        <div class="col-md-6 mt-5">
          <input type="text" class="form-control" placeholder="Apellido" aria-label="First name"/>
        </div>
        <div class="col-md-6 mt-5">
          <label class="visually-hidden" for="autoSizingInputGroup">Correo</label>
          <div class="input-group">
            <div class="input-group-text">@</div>
            <input type="email" class="form-control" id="autoSizingInputGroup" placeholder="Correo"/>
          </div>
        </div>
        <div class="col-md-6 mt-5">
          <label class="visually-hidden" for="autoSizingInputGroup">ID</label>
          <div class="input-group">
            <div class="input-group-text">ID</div>
            <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="ID"/>
          </div>
        </div>
        <div class="col-md-6 mt-5">
          <label class="visually-hidden" for="autoSizingInputGroup">Fecha</label>
          <div class="input-group">
            <div class="input-group-text">Fecha</div>
            <input type="date" class="form-control" id="autoSizingInputGroup" placeholder="Fecha"/>
          </div>
        </div>

        <div class="col-md-6 mt-5">
          <label class="visually-hidden" for="autoSizingInputGroup">Celular</label>
          <div class="input-group">
            <div class="input-group-text">#</div>
            <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Text"/>
          </div>
        </div>

        <div class="col-md-6 mt-5">
          
          <select id="inputState" class="form-select">
            <option selected>Genero</option>
            <option>Masculino</option>
            <option>Femenino</option>
          </select>
        </div>

        <div class = "col-md-6 mt-5">
          
          <input class="form-control" type="file" id="formFile"/>
        </div>

        <div class="d-grid gap-2 mt-5">
          <button type="submit" class="btn btn-primary">Crear</button>
        </div>
        
      </form>
    </div>
  )
}
