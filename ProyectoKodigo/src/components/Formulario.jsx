import React, { useState } from 'react'

export default function Formulario() {
    const [name, setName] = useState({});
    const [nombre, setNombre] = useState("");

    const handleName = (e) => {
       //console.log(e.target.value);
       setNombre (e.target.value);
    }
    const obtenerPersonajeByName= async () => {
        const respuesta = await  fech(`https://rickandmortyapi.com/api/character ${nombre}`);
        const datos = await respúesta.json();
        setName(datos);
    }
    const handleSubmit = () => {
        obtenerPersonajeByName();
        e.preventDefault();

    }
    console.log(name);
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Ingresa el nombre del Personaje</label>
            <input type="text" placeholder= 'Ingrese Personaje' className= 'form-control' onChange={handleName} /> <br />
            <button className='btn btn-dark' type='submit' >Buscar Personaje</button>
        </form>
        <h2>{name.name}</h2>
    </div>
  )
}
