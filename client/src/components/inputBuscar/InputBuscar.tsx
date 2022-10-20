import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './inputBuscar.css';
import React from 'react';

interface IInputBuscar {
    className?: string;
    key?: React.Key;
    type: 'text' | 'password' | 'email' | 'file' | 'color' | 'number' | 'search' | 'tel' | 'time' | 'url';
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    id?: string;
    name?: string;
    required?: boolean;
    autofocus?: boolean;
    max?: string | number;
    min?: string | number;
    maxlength?: number;
    multiple?: boolean;
    pattern?: string;
    title?: string;
    step?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
}

export const InputBuscar = (props: IInputBuscar) => {

    return (
        <input
            type={props.type}
            id={props.id}
            className="form-control2"
            value={props.value}
            onChange={props.onChange}
            name={props.name}
            placeholder="Buscar aquí"
            required />
    )
}
