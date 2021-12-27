import React from "react";

export default function withParameter(props) {
    console.log(props)
    const status = props.note >= 7 
            ? 'Aprovado' : props.note <= 3 
            ? 'Reprovado' : 'Recuperação'
    return (
        <div>
            <h2>{ props.Title }</h2>
            <p>
                nome:
                <strong>{ props.student } </strong>
                nota: 
                <strong> { props.note} </strong>
                você está: 
                <strong> { status }</strong>
            </p>
        </div>
    )
}