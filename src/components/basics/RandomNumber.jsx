import React from "react";

export default props => {

    const {min, max} = props;
    const random = getRandomNumber(min, max);

    return (
    <div>
        <h2>Números: </h2>
        <div>
            <h2>
                <p>Número minimo é {min}</p>
                <p>Número máximo é {max}</p>
                <p>
                    Número sorteado:
                    <strong> { random }</strong>
                </p>
            </h2>
        </div>
    </div>     
    )
}


function getRandomNumber(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

   
