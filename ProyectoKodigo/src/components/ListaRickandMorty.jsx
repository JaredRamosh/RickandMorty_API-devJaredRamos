import React from 'react'
import{ useState, useEffect } from 'react'
import Tarjeta from './Tarjeta'
export default function ListaRickandMorty() {

const [rickandmorty, setRickandmorty] = useState([]);

const obtenerPersonajes = async () => {
    let respuesta= await fetch('https://rickandmortyapi.com/api/character');
    let datos = await respuesta.json();
    /**console.log(datos.results);*/
    setRickandmorty(datos.results);
}
useEffect(() => {
    obtenerPersonajes();
});
console.log(rickandmorty)
  return (
    <div className= 'container'>
        <h1>Lista Rick and Morty</h1> 
        <div className= 'row' >
            {
                rickandmorty.map((personajes, indice) => {
                    return (
                        <div className= 'col-md-4'>
                           <Tarjeta key={indice} {...personajes}/>
                        </div>
                        
                    )
                })
            }
        </div>
    </div>
  )
}
``