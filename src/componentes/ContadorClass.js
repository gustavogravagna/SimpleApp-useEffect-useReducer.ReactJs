import React, {Component} from 'react'

class Contador extends Component{
    constructor(props){
        super(props);
        this.state = {contador: 0}
    }

    incrementar(cantidad){
        this.setState((estadoAnterior) => {
            return{
                contador: estadoAnterior.contador + cantidad
            }
        })
    }

    disminuir(cantidad){
        this.setState((estadoAnterior) => {
            return {
                contador: estadoAnterior.contador - cantidad
            }
        })
    }


    render(){
        return(
            <div>
                <h2>Contador: {this.state.contador}</h2>
                <button onClick={()=> this.incrementar(this.props.cantidadAIncrementar)}>Incrementar</button>
                <button onClick={()=> this.disminuir(this.props.cantidadADisminuir)}>Disminuir</button>
            </div>
        )
    }
}

export default Contador;