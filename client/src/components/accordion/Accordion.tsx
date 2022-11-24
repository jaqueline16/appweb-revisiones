import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Hr } from '../hr/Hr';
import './accordion.css'

export const Accordion = () => {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Estructura y estilo 
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne">
    <div className="accordion-body">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" >
                Default checkbox
                </label>
                
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" >
                Default checkbox
                </label>
                
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" >
                Default checkbox
                </label>
                
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" >
                Default checkbox
                </label>
                
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" >
                Default checkbox
                </label>
                
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" >
                Default checkbox
                </label>
                
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" >
                Default checkbox
                </label>
                
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" >
                Default checkbox
                </label>
                
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" >
                Default checkbox
                </label>
                
            </div>

            <div className='button-option'>
            <Hr/>
              <button type= "button" 
              className="dropdown-item" 
              data-bs-toggle="modal" 
              data-bs-target="#exampleModal1" 
              data-bs-whatever="@mdo">+Agregar comentario
              </button>
              <div className="modal fade" id="exampleModal1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Estructura y estilo</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-3">
                            <input type="text" className="form-control" id="recipient-name"/>
                          </div>
                          
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary">Agregar</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Lenguaje
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" >
    <div className="accordion-body">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" >
                Comentario 1 
                </label>
               
            </div>

            <div className='button-option'>
            <Hr/>
            <button type= "button" 
              className="dropdown-item" 
              data-bs-toggle="modal" 
              data-bs-target="#exampleModal2" 
              data-bs-whatever="@mdo">+Agregar comentario
              </button>
              <div className="modal fade" id="exampleModal2" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Lenguaje</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-3">
                            <input type="text" className="form-control" id="recipient-name"/>
                          </div>
                          
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary">Agregar</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Referencias y citado 
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree">
    <div className="accordion-body">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" >
                Default checkbox
                </label>
                
            </div>

            <div className='button-option'>
            <Hr/>
            <button type= "button" 
              className="dropdown-item" 
              data-bs-toggle="modal" 
              data-bs-target="#exampleModal3" 
              data-bs-whatever="@mdo">+Agregar comentario
              </button>
              <div className="modal fade" id="exampleModal3" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Referencias y citado</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-3">
                            <input type="text" className="form-control" id="recipient-name"/>
                          </div>
                          
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary">Agregar</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
        Comentarios y sugerencias
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour">
    <div className="accordion-body">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" >
                Default checkbox
                </label>
               
            </div>
            <div className='button-option'>
            <Hr/>
            <button type= "button" 
              className="dropdown-item" 
              data-bs-toggle="modal" 
              data-bs-target="#exampleModal4" 
              data-bs-whatever="@mdo">+Agregar comentario
              </button>
              <div className="modal fade" id="exampleModal4" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Comentarios y sugerencias</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-3">
                            <input type="text" className="form-control" id="recipient-name"/>
                          </div>
                          
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary">Agregar</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>
  )
}

