import React from "react";
import { Propiedades } from "./propiedades";
Propiedades
export const Lista = () =>{
    return(
        <>
            <Propiedades
                className='lista'
                string='Esto es un string'
                number={20}
                booleano
                array={[1,2,3]}
            />
        </>
    )
}