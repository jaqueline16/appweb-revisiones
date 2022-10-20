import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from '../components/navbar/Navbar'
import { Hr } from '../components/hr/Hr';
import { Accordion } from '../components/accordion/Accordion';
import { Button } from '../components/button/Button';

export const Review = () => {
  return (
    <div>
        <Navbar/>
        <div className='row'>
            <div className="col-7 pdf">
                <h1>Visualización del PDF</h1>
            </div>
            <div className="col-5 com">
                <br/>
                <h5>Selecciona tus comentarios</h5>
                <Hr/>
                <Accordion/>
                <br/>
                <Hr/>
                <Button type='button'>Guardar revisión</Button> <Button type='button'>Exportar comentarios</Button>
            </div>
        </div>
    
    </div>
  )
}
