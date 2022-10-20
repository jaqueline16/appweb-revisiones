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
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" >
                Default checkbox
                </label>
                <Hr/>
            </div>

            <button className="dropdown-item"><i className="bi bi-box-arrow-right"></i>+Agregar comentario</button>
            
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Lenguaje
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" >
                Default checkbox
                </label>
                <Hr/>
            </div>

            <button className="dropdown-item"><i className="bi bi-box-arrow-right"></i>+Agregar comentario</button>
            
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Referencias y citado 
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" >
                Default checkbox
                </label>
                <Hr/>
            </div>

            <button className="dropdown-item"><i className="bi bi-box-arrow-right"></i>+Agregar comentario</button>
            
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
        Comentarios y sugerencias
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" >
                Default checkbox
                </label>
                <Hr/>
            </div>

            <button className="dropdown-item"><i className="bi bi-box-arrow-right"></i>+Agregar comentario</button>
            
        </div>
    </div>
  </div>
</div>
  )
}
