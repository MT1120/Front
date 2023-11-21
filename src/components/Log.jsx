import React from 'react'
// import { FaUser } from "react-icons/fa"
// import { FaTrash } from 'react-icons/fa'

export default function Log() {
    return (
        <div>
            <div className='bg-secondary rounded'>


                <div className='input-group mb-3 p-2'>


                    <label class="input-group-text" for="inputGroupSelect01"># de Documento</label>
                    <select class="form-select" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                </div>

                <div className='input-group mb-3 p-2'>


                    <label class="input-group-text" for="inputGroupSelect01">Tipo De Documento</label>
                    <select class="form-select" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                </div>

                <div class="justify-content-center mb-3 p-2">
                    <label class="visually-hidden" for="autoSizingInputGroup">Fecha</label>
                    <div class="input-group">
                        <div class="input-group-text">Fecha</div>
                        <input type="date" class="form-control" id="autoSizingInputGroup" placeholder="Fecha" />
                    </div>
                </div>

            </div>
            <table className="table table-hover mt-5">
                <thead>{/*<tr className="table-primary">*/}
                    <tr className="table-primary">
                        <th scope="col">ID</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Acción</th>
                        <th scope="col">Tipo de Documento</th>
                        <th scope="col"># de documento</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Carlos</td>
                        <td>Carlos@email.com</td>
                        <td>2131315</td>
                        <td>64</td>
                        <td>11/04/1999</td>

                    </tr>
                    <tr>
                        <td>Carlos</td>
                        <td>Carlos@email.com</td>
                        <td>2131315</td>
                        <td>64</td>
                        <td>11/04/1999</td>

                    </tr>
                    <tr>
                        <td>Carlos</td>
                        <td>Carlos@email.com</td>
                        <td>2131315</td>
                        <td>64</td>
                        <td>11/04/1999</td>

                    </tr>
                    <tr>
                        <td>Carlos</td>
                        <td>Carlos</td>
                        <td>Carlos</td>
                        <td>Carlos</td>
                        <td>Carlos</td>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}
