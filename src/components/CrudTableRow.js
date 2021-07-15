import React from 'react'

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
    let { name, club, id } = el;

    return (
        <tr>
            <td>{name}</td>
            <td>{club}</td>
            <td><button className="edit" onClick={() => setDataToEdit(el)}>Editar</button><button className="delete" onClick={() => deleteData(id)}>Eliminar</button></td>
        </tr>
    )
}

export default CrudTableRow
