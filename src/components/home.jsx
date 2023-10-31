import React from 'react'
import { FaUser } from "react-icons/fa"
import { FaTrash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


export default function Home() {

    const navigate = useNavigate()

    const handleNavigate = (event) => {
        navigate('/cardP')
    }
    return (
        <div>

            <table className="table table-hover mt-5">
                <thead>{/*<tr className="table-primary">*/}
                    <tr className="table-primary">
                        <th scope="col">Nombre</th>
                        <th scope="col">Email</th>
                        <th scope="col">Teléfono</th>
                        <th scope= "col">id</th>
                        <th scope="col">Fecha de nacimiento</th>
                        <th scope="col">Género</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Carlos</td>
                        <td>Carlos</td>
                        <td>Carlos</td>
                        <td>Carlos</td>
                        <td>Carlos</td>
                        <td>Carlos</td>
                        <td className='d-flex align-items-center justify-content-evenly'>
                            <button className="btn btn-danger btn-sm" onClick={handleNavigate}>
                                <FaUser/>
                            </button>
                            <button className="btn btn-danger btn-sm " >
                                <FaTrash/>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Carlos</td>
                        <td>Carlos</td>
                        <td>Carlos</td>
                        <td>Carlos</td>
                        <td>Carlos</td>
                        <td>Carlos</td>
                        <td className='d-flex align-items-center justify-content-evenly'>
                            <button className="btn btn-danger btn-sm" onClick={handleNavigate}>
                                <FaUser/>
                            </button>
                            <button className="btn btn-danger btn-sm " >
                                <FaTrash/>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Carlos</td>
                        <td>Carlos</td>
                        <td>Carlos</td>
                        <td>Carlos</td>
                        <td>Carlos</td>
                        <td>Carlos</td>
                        <td className='d-flex align-items-center justify-content-evenly'>
                            <button className="btn btn-danger btn-sm" onClick={handleNavigate}>
                                <FaUser/>
                            </button>
                            <button className="btn btn-danger btn-sm " >
                                <FaTrash/>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Carlos</td>
                        <td>Carlos</td>
                        <td>Carlos</td>
                        <td>Carlos</td>
                        <td>Carlos</td>
                        <td>Carlos</td>
                        <td className='d-flex align-items-center justify-content-evenly'>
                            <button className="btn btn-danger btn-sm" onClick={handleNavigate}>
                                <FaUser/>
                            </button>
                            <button className="btn btn-danger btn-sm " >
                                <FaTrash/>
                            </button>
                        </td>
                    </tr>
                </tbody>
                </table>
        </div>
    )
}
