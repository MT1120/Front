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
        <div class="card-footer text-body-secondary">
            <a href="/" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}
