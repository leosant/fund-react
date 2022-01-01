import React from 'react';

import DirectChildren from './DirectChildren'

export default () => {
    return (
        <div>
            <DirectChildren args='Esse arquivo é o pai passando para o componente filho'/>
        </div>
    )
}