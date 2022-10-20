import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './input.css';
import React from 'react';

interface IInput {
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

export const Input = (props: IInput) => {

    return (
        <input
            type={props.type}
            id={props.id}
            className="form-control"
            value={props.value}
            onChange={props.onChange}
            name={props.name}
            required />
    )
}



