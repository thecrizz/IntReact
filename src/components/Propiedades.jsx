import React from "react";
export const Propiedades = (props) => {
return(
    <>
    <li>{props.string}</li>
    <li>{props.number}</li>
    <li>{props.booleano ? 'True' : 'False' }</li>
    <li>{props.array.join('')}</li>
    <li>{props.objeto.nombre + '' + props.objeto.email}</li>
    <li>{props.array.map(props.function)}</li>
    <li>{props.elementoReact}</li>
    <li>{props.componrntr.React}</li>
    </>
)
}