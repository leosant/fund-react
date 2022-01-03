import React from 'react';

export default props => {
    return (
        <div>
            <label htmlFor={props.id}>{props.args}</label>
            <input
                id={props.id}
                placeholder={props.placeholder}
                type={props.type}
                min={props.id == 'step' ? 0 : {} }
                value={props.value}
                onChange={ e => props.change(+e.target.value) }
            />
        </div>
    )
}