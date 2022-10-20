import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Button } from '../components/button/Button'
import { Input } from '../components/input/Input'
import { Label } from '../components/Label/Label'
import { IRegister } from '../models/Auth.model'
import authService from '../services/Auth.service'

export const Register = () => {

    const [data, setData] = useState<IRegister>({
        name: "",
        surname: "",
        confirmPassword: "",
        password: "",
        email: "",
        institution: "",
        userName: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
        setData({ ...data, [e.target.name]: e.target.value });

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await authService.register(data).then((response) => {
            console.log(response);

        })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <section className="text-center">

            <div className="p-5 bg-image"></div>

            <div className="card mx-4 mx-md-5 shadow-5-strong">
                <div className="card-body py-5 px-md-5">

                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="fw-bold mb-5">Regístrate</h2>
                            <form onSubmit={submit}>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="form-group">
                                            <Input
                                                name='name'
                                                type={'text'}
                                                value={data.name}
                                                onChange={handleChange}
                                            />
                                            <Label>Nombre</Label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="form-group">
                                            <Input
                                                name='surname'
                                                type={'text'}
                                                value={data.surname}
                                                onChange={handleChange} />
                                            <Label>Apellido</Label>
                                        </div>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <Input
                                        name='userName'
                                        type={'text'}
                                        value={data.userName}
                                        onChange={handleChange} />
                                    <Label>Nombre de Usuario</Label>
                                </div>

                                <br />

                                <div className="form-group">
                                    <Input
                                        name='email'
                                        type={'email'}
                                        value={data.email}
                                        onChange={handleChange} />
                                    <Label>Correo Electrónico</Label>
                                </div>
                                <br />

                                <div className="form-group">
                                    <Input
                                        name='institution'
                                        type={'text'}
                                        value={data.institution}
                                        onChange={handleChange} />
                                    <Label>Institución a la que perteneces</Label>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="form-group">
                                            <Input
                                                name='password'
                                                type={'password'}
                                                value={data.password}
                                                onChange={handleChange}
                                            />
                                            <Label>Contraseña</Label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="form-group">
                                            <Input
                                                name='confirmPassword'
                                                type={'password'}
                                                value={data.confirmPassword}
                                                onChange={handleChange} />
                                            <Label>Confirmar Contraseña</Label>
                                        </div>
                                    </div>
                                </div>
                                <Button type='submit'>Registrarme</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
