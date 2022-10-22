import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';


export const Navbar = () => {
    return (
        <>
            <nav className="navbar  navbar-expand-lg navbar-dark bg-primary">
                <div className='d-flex w-100'>
                    <div>
                        <a className="navbar-brand" href="#">Inicio</a>
                    </div>
                    

                    <div className="collapse navbar-collapse" id="navbarMobileToggle">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Agregar revisión</a>
                            </li>
                        </ul>
                        <div className="btn-group float-end">
                            <a href="#" className="dropdown-toggle text-decoration-none text-light" data-bs-toggle="dropdown">
                                <i className="bi bi-person-circle"></i>
                                <span>Bienvenid@:</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a className="dropdown-item" aria-current="page" href="#">Cuenta</a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><button className="dropdown-item"><i className="bi bi-box-arrow-right"></i>Cerrar Sesión</button></li>
                            </ul>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMobileToggle" aria-controls="navbarMobileToggle" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </>
    )
}
