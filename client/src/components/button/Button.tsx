import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

interface IButton {
    id?: string;
    className?: string;
    key?: React.Key;
    name?: string;
    type: 'submit' | 'button' | 'reset';
    children: React.ReactNode;
    size?: 'default' | 'large';
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = (props: IButton) => {

    return (
        <button
            key={props.key}
            id={props.id}
            name={props.name}
            className={"btn btn-primary " + props.className}>
            {props.children}
        </button>
    )
}