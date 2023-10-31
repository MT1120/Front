import React from 'react'

export default function cardP() {
  return (
    <div class="card ">
        <div class="card-header text-center">
            Carlos
        </div>
        <div class="card-body">
            <h5 class="card-title text-center" >Información</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: XXXXXXX</li>
            <li class="list-group-item">Correo: hola@email.com</li>
            <li class="list-group-item">Fecha de nacimiento: xx/xx/xx</li>
            <li class="list-group-item">Telefono: XXXXXXXXX</li>
            <li class="list-group-item">Genero: XXXXXXXXX</li>
        </ul>
        <div class="card-footer text-center text-body-secondary">
            <a href="/" class="btn btn-primary">Regresar</a>
        </div>
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

            <div class="d-grid gap-2 mt-5">
                <button type="submit" class="btn btn-primary">Editar</button>
            </div>
        
      </form>
    </div>
  )
}
