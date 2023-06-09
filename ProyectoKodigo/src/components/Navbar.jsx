import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import ListaRickandMorty from './ListaRickandMorty'
import Formulario from './Formulario'

export default function Navbar(props) {

  return (
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Bienvenido, {props.name}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to= '/'>Home</Link>
        <Link to= 'Formulario'>Busqueda</Link>
      </div>
    </div>
  </div>
</nav>
<Routes>
     <Route path= '/' element= {<ListaRickandMorty/>}/>
     <Route path= '/Formulario' element= {<Formulario/>}/>

     
</Routes>
</BrowserRouter>
  )
}
