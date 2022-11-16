import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './select.css';
import React from 'react';

export const Select = () => {
  return (
    <>
            <div className="input-group mb-3">
              <select className="form-select" aria-label="Default select example">
                  <option selected>Revista o Congreso</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
              </select>
              <button className="btn btn-outline-primary btn-select" 
              type="button" 
              id="button-addon2"
              data-bs-toggle="modal" 
              data-bs-target="#exampleModal" 
              data-bs-whatever="@mdo">+Agregar
              </button>
              <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Nueva revista o congreso</h1>
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
                        <button type="button" className="btn btn-primary">Guardar</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
    </>
  )
}
