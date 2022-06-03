import React,{useState} from 'react'



const ContadorFuncional = (props) => {
    const [cuenta, cambiarCuenta] = useState(0)

    const incrementar = (cantidad) => {
        cambiarCuenta(cuenta + cantidad)
    }
    const disminuir = (cantidad) => {
        cambiarCuenta(cuenta - cantidad)
    }
    return(
       <></>
    )
}


export default ContadorFuncional;