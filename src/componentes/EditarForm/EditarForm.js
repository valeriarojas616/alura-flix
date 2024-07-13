import React, { useState } from 'react';
import './EditarForm.css';

function EditarForm({ datos, save, cancel }) {
  const [newDatos, setNewDatos] = useState(datos);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDatos(prevDatos => ({
      ...prevDatos,
      [name]: value
    }));
  };

  const handleSave = () => {
    save(newDatos);
  };

  return (
    <div className='editar-form'>
        <h3 className='title-edit'>Editar video</h3>
        
        <label className='label-edit'>Nuevo Título</label>
        <input
            className='input-edit'
            type='text'
            name='titulo'
            value={newDatos.titulo}
            onChange={handleChange}
        />
        <label className='label-edit'>Nueva Descripción</label>
        <input
            className='input-edit'
            type='text'
            name='descripcion'
            value={newDatos.descripcion}
            onChange={handleChange}
        />
        <label className='label-edit'>Nueva URL de Imagen</label>
        <input            
            className='input-edit'
            type='text'
            name='imagen'
            value={newDatos.imagen}
            onChange={handleChange}
        />
        <label className='label-edit'>Nueva URL de Video</label>
        <input
            className='input-edit'
            type='text'
            name='video'
            value={newDatos.video}
            onChange={handleChange}
        />
        <div className='editar-form-buttons'>
            <button onClick={handleSave}>Guardar</button>
            <button onClick={cancel}>Cancelar</button>
        </div>
    </div>
  );
}

export default EditarForm;