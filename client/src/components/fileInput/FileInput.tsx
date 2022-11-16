import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './fileInput.css';
import React from 'react';

interface IFileInput {
    className?: string;
    key?: React.Key;
    type: 'file' | 'url';
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

export const InputBuscar = (props: IFileInput) => {

    return (
        <input
            type={props.type}
            id={props.id}
            className="form-control2"
            value={props.value}
            onChange={props.onChange}
            name={props.name}
            required />
    )
}
