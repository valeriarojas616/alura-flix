import React from "react";

const BotonEditar = (props)=>{
    return (
    <input 
    className='buttons edit-button' 
    type='button' 
    value='Editar' 
    onClick={props.mostrarEditar}
    />
    );
};
export default BotonEditar;