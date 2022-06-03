import React from 'react';
import ContenedorFlex from './../elementos/ContenedorFlex';

const Usuario = ({nombre = 'Invitado', pais = 'Sin ubicacion'}) => {
    const color = "green";
    return (
        <ContenedorFlex>
            <h1>Su nombre es: {nombre} / Se conecta de: {pais} </h1>
            <h4 style = {{color: color }}>Acceso Autorizado</h4>
        </ContenedorFlex>
    )
}

export default Usuario;