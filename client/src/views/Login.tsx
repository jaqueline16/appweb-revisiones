import { ChangeEvent, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/Auth.service';

import { Button } from '../components/button/Button';
import { Input } from '../components/input/Input';
import { Label } from '../components/Label/Label';
import { ILogin, IRegister } from '../models/Auth.model';
import reviewerService from '../services/Reviewer.service';

export const Login = () => {

  const navigate = useNavigate();
  const [data, setData] = useState<ILogin>({
    userName: "",
    password: ""
  })

  const [registro, setRegistro] = useState<IRegister>({name:"pp", email:"aa", password:"ss", surname: "", userName: "", confirmPassword:"", institution:""})

  // setRegistro({...registro, name:"", email:"", password:"", surname: "", userName: "", confirmPassword:"", institution:""});
  setRegistro({...registro, name:""});

  const funcion = async () => {
    await reviewerService.obtenerRevisores().then((response) => {
      if (response.status === 200) {
        console.log(response.data);
      } else if (response.status === 404) {
        console.log("Ruta no encontrada");
      }
    }).catch(ex => {
      console.log(ex.message)
    })
  }

  const Login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await authService.login(data!).then((response) => {
      console.log(response);
    }).then((err) => {
      console.log(err);
    })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const [refrescar, setRefrescar] = useState(true)
  useEffect(() => {
    /* Bloque de código a ejecutar por lo menos una vez */
    funcion();
  }, [refrescar])


  return (
    <section className="text-center">

      <div className="p-5 bg-image"></div>

      <div className="card mx-4 mx-md-5 shadow-5-strong">
        <div className="card-body py-5 px-md-5">

          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-5">Ingresar al Sistema</h2>
              <form onSubmit={Login} className="pb-3">

                <div className="form-group">
                  <Input
                    name={'userName'}
                    type={'text'}
                    value={data?.userName}
                    onChange={handleChange} />
                  <Label>Nombre de usuario</Label>
                </div>
                <br />
                <div className="form-group">
                  <Input
                    name={'password'}
                    type={'password'}
                    value={data?.password}
                    onChange={handleChange} />
                  <Label>Contraseña</Label>
                </div>
                <br />
                <Button type='submit'>Ingresar</Button>
              </form>
              <p>¿No tienes una cuenta? Regístrate
                <Link to={'/register'}>
                  aquí

                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
