import React from 'react'
import logo from '../components/assets/project-management.png'


export default function navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary mb-4   p-0">
        <div className="container-fluid">
            <a className="navbar-brand" href="/" >
                <div className="d-flex">
                    <img src={logo} alt="logo" className="mr-2"/>
                    <div className='text-white fs-5'>Proyecto Final</div>
                </div>
            </a>
            <div class="collapse navbar-collapse " id="navbarTogglerDemo01">
                
                <ul class="nav ">
                    
                    <li class="nav-item">
                            <a class="nav-link active text-white fs-5" href="/addP" aria-current="page">
                                Crear Personas
                            </a>
                        
                    </li>
                </ul>
            </div>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                <button class="btn btn-primary" type="submit">Buscar</button>
            </form>
        </div>
    </nav>
  )
}
