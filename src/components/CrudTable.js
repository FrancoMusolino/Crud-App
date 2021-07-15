import React, { useEffect } from 'react'
import CrudTableRow from './CrudTableRow';

const CrudTable = ({ data, setDb, setDataToEdit, deleteData }) => {
    useEffect(() => {
        if (localStorage.getItem('data')) {
            setDb(JSON.parse(localStorage.getItem('data')))
        }
    }, [])

    return (
        <div>
            <h3>Tabla de Datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Club</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? <tr><td colSpan="3">No hay datos</td></tr> : (
                        data.map(el => <CrudTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData} />))}
                </tbody>
            </table>
        </div>
    );
}

export default CrudTable
