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
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Guardar revisión
              </button>


              <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="staticBackdropLabel">Resumen de tu revisión</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p>Marca las casillas correspondientes:</p>
                      <p className='p-idioma'>Idioma inglés y estilo: </p>
                      <p className='p-idioma'><input type="radio" name="p0" value="1"/> Se requiere una edición extensa del idioma y estilo en inglés. </p>
                      <p className='p-idioma'><input type="radio" name="p0" value="2"/> Cambios moderados en inglés requeridos</p>
                      <p className='p-idioma'><input type="radio" name="p0" value="3"/> El idioma y el estilo en inglés están bien/se requiere un corrector ortográfico menor</p>
                      <p className='p-idioma'><input type="radio" name="p0" value="4"/> No me siento calificado para juzgar sobre el idioma y el estilo en inglés.</p>
                            <table>
                                <thead>
                                  <tr>
                                    <th className='pregunta'>Pregunta</th>
                                    <th className='columna'>Sí</th>
                                    <th className='columna'>Puede ser mejorado</th>
                                    <th className='columna'>La mayoría se puede mejorar</th>
                                    <th className='columna'>No aplica</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>¿La introducción proporciona antecedentes suficientes e incluye todas las referencias pertinentes?</td>
                                    <td><input type="radio" name="p1" value="1"/></td>
                                    <td><input type="radio" name="p1" value="2"/></td>
                                    <td><input type="radio" name="p1" value="3"/></td>
                                    <td><input type="radio" name="p1" value="4"/></td>
                                  </tr>
                                  <tr>
                                    <td>¿Todas las referencias citadas son relevantes para la investigación?</td>
                                    <td><input type="radio" name="p2" value="1"/></td>
                                    <td><input type="radio" name="p2" value="2"/></td>
                                    <td><input type="radio" name="p2" value="3"/></td>
                                    <td><input type="radio" name="p2" value="4"/></td>
                                  </tr>
                                  <tr>
                                    <td>¿Es adecuado el diseño de la investigación?</td>
                                    <td><input type="radio" name="p3" value="1"/></td>
                                    <td><input type="radio" name="p3" value="2"/></td>
                                    <td><input type="radio" name="p3" value="3"/></td>
                                    <td><input type="radio" name="p3" value="4"/></td>
                                  </tr>
                                  <tr>
                                    <td>¿Se describen adecuadamente los métodos?</td>
                                    <td><input type="radio" name="p4" value="1"/></td>
                                    <td><input type="radio" name="p4" value="2"/></td>
                                    <td><input type="radio" name="p4" value="3"/></td>
                                    <td><input type="radio" name="p4" value="4"/></td>
                                  </tr>
                                  <tr>
                                    <td>¿Se presentan claramente los resultados?</td>
                                    <td><input type="radio" name="p5" value="1"/></td>
                                    <td><input type="radio" name="p5" value="2"/></td>
                                    <td><input type="radio" name="p5" value="3"/></td>
                                    <td><input type="radio" name="p5" value="4"/></td>
                                  </tr>
                                  <tr>
                                    <td>¿Las conclusiones están respaldadas por los resultados?</td>
                                    <td><input type="radio" name="p6" value="1"/></td>
                                    <td><input type="radio" name="p6" value="2"/></td>
                                    <td><input type="radio" name="p6" value="3"/></td>
                                    <td><input type="radio" name="p6" value="4"/></td>
                                  </tr>
                                </tbody>
                            </table>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                      <button type="button" className="btn btn-primary">Guardar revisión</button>
                    </div>
                  </div>
                </div>
              </div>

              <Button type='button'>Exportar comentarios</Button>
              </div>
            </div>
      </div>
      

    </>
  )
}
