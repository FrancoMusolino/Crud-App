import React, { useState, useEffect } from 'react';

const initialForm = {
    name: "",
    club: "",
    id: null,
}

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
    const [form, seTForm] = useState(initialForm);

    useEffect(() => {
        if (dataToEdit) {
            seTForm(dataToEdit);
        } else {
            seTForm(initialForm);
        }
    }, [dataToEdit]);

    const handleChange = e => {
        seTForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = e => {
        e.preventDefault();


        if (!form.name || !form.club) {
            alert("Datos Incompletos")
            return;
        }

        if (form.id === null) {
            createData(form);
        } else {
            updateData(form);
        }

        handleReset();
    }

    const handleReset = e => {
        seTForm(initialForm);
        setDataToEdit(null);
    }

    return (
        <div>
            {dataToEdit === null ? <h3>Agregar</h3> : <h3>Editar</h3>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={form.name} />
                <input type="text" name="club" placeholder="Club" onChange={handleChange} value={form.club} />
                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpiar" onClick={handleReset} />
            </form>
        </div>
    )
}

export default CrudForm;
