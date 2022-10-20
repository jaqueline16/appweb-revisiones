import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './label.css';
import React from 'react';

interface ILabel {
    id?: string;
    className?: string;
    key?: React.Key;
    for?: string;
    children: React.ReactNode;
}

export const Label = (props: ILabel) => {

    return (
        <label
            id={props.id}
            key={props.key}
            htmlFor={props.for}
            className={"input-label " + props.className} >
            {props.children}
        </label>
    )
}

