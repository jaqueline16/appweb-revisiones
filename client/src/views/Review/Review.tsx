import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './review.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Hr } from '../../components/hr/Hr';
import { Accordion } from '../../components/accordion/Accordion';
import { Button } from '../../components/button/Button';

export const Review = () => {
  return (
    <>
    <Navbar/>
    <div className='review-container'>
            <div className='pdf-container'>
              <div className='pdf'>

              </div>
            </div>
            <div className='com-container'>
              <div className='com-title'>
                <h5>Selecciona tus comentarios</h5>
                <Hr/>
              </div>
              <div className='com-accordion'>
                <Accordion/>
              </div>
              <div className='com-options'>
              <Button type='button'>Guardar revisión</Button> 
              <Button type='button'>Exportar comentarios</Button>
              </div>
            </div>
      </div>
      

    </>
  )
}
