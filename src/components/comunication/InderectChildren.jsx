import React from 'react';

export default props => {

    const getAge = () => parseInt(Math.random() * (20)) + 20;
    const getNerd = () => Math.random() > 0.5;

    return (
        <div>
            <div>Filho</div>

            <button onClick={_=>props.clickAbout( 'Leonardo', getAge(), getNerd() )}>
                Sobre o PAI
            </button>
        </div>
    )
}