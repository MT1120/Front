import React from 'react'
import logo from '../components/assets/project-management.png'
import { useNavigate } from 'react-router-dom'


export default function Navbar() {
    
    const navigate = useNavigate()

    const handleNavigate = (event) => {
        navigate('/addP')
    }
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
                                
                                <button className='btn text-white fs-5' onClick={handleNavigate}>
    
                                    Crear Personas
                                </button>
                            
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
