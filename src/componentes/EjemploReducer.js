import React,{useReducer} from 'react'

//ESTADO INICIAL
const contadorInicial = {contador: 0}

//Reducer
const reducer = (estado, accion) => {
    switch(accion.tipo){
        case 'INCREMENTAR':
            return{contador: estado.contador + 1}
        case 'DISMINUIR':
            return{contador: estado.contador -1}
        case 'REINICIAR':
            return{contador: 0}
        default:
            return estado;
    }
}



const EjemploReducer = () => {
    const [estado, dispatch] = useReducer(reducer, contadorInicial);

    return(
        <div>
            <h2>Contador: {estado.contador}</h2>
            <button
                onClick={()=>dispatch({ tipo: 'INCREMENTAR'})}
            >
                INCREMENTAR
            </button>

            <button
                onClick={()=>dispatch({ tipo: 'DISMINUIR'})}
            >
                DISMINUIR
            </button>
            <button
                onClick={()=> dispatch({ tipo: 'REINICIAR'})}
            >
                REINICIAR
            </button>
        </div>
    )
}


export default EjemploReducer;