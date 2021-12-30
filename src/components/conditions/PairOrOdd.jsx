import React from 'react';

export default props => {
    const isPar = props.number % 2 === 0;
    return (
        <div>
            <span>{isPar ? 'Par' : 'Impar'}</span>
        </div>
    )
}