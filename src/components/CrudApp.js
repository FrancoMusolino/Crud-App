import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb = [
    {
        id: 1,
        name: "Messi",
        club: "Barcelona",
    },
    {
        id: 2,
        name: "Aguero",
        club: "Barcelona",
    },
    {
        id: 3,
        name: "Paredes",
        club: "Psg",
    },
    {
        id: 4,
        name: "Martinez",
        club: "Inter",
    },
    {
        id: 5,
        name: "Correa",
        club: "Lazio",
    },
];

const CrudApp = () => {
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null)

    const createData = data => {
        //console.log(data);
        data.id = Date.now();
        setDb([...db, data]);
        localStorage.setItem('data', JSON.stringify([...db, data]));
    }

    const updateData = data => {
        let newData = db.map(el => el.id === data.id ? data : el);
        setDb(newData);
        localStorage.setItem('data', JSON.stringify(newData));
    };

    const deleteData = id => {
        let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con el id '${id}'`);

        if (isDelete) {
            let newData = db.filter(el => el.id !== id);
            setDb(newData);
            localStorage.setItem('data', JSON.stringify(newData));
        } else {
            return;
        }
    }

    return (
        <div>
            <h2>CRUD App</h2>
            <article className="grid-1-2">
                <CrudForm createData={createData} updateData={updateData}
                    dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
                <CrudTable data={db} setDb={setDb} setDataToEdit={setDataToEdit} deleteData={deleteData} />
            </article>
        </div>
    );
}

export default CrudApp;

