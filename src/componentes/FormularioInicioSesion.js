import React, {useState} from 'react';
import Boton from './../elementos/Boton';
import Input from '../elementos/Input';
import Label from '../elementos/Label';
import Formulario from '../elementos/Formulario';
import ContenedorFormulario from '../elementos/ContenedorFormulario';


const FormularioInicioSesion = (props) => {
    const [usuario, cambiarUsuario] = useState('')
    const [password, cambiarPassword] = useState('')

    const onChange = (evento) => {
        if(evento.target.name === 'usuario'){
            cambiarUsuario(evento.target.value)
        }else if (evento.target.name === 'password'){
            cambiarPassword(evento.target.value)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(usuario === 'user' && password === 'pass'){
            props.cambiarEstadoSesion(true);
        }else {
            alert('datos incorrectos')
            cambiarUsuario('')
            cambiarPassword('')
        }
    }

    

    

    return (
        <Formulario action="" onSubmit={onSubmit} >
            <ContenedorFormulario>
                <h2 style={{textAlign: 'center'}}>Ingreso</h2>
                <Input type="text" value={usuario} />
                <br/>
                <Input type="password" value={password}/>
                <br />
                <br />


                <Label htmlFor="usuario">Usuario</Label>
                <br />
                <Input
                    type="text"
                    name="usuario"
                    id="usuario"
                    value={usuario}
                    onChange={onChange}>
                </Input>
                <Label htmlFor="password">Password</Label>
                <br />
                <Input 
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={onChange}>
                </Input>
                <Boton type="submit">Iniciar</Boton>
            </ContenedorFormulario>
        </Formulario>
    )
}


export default FormularioInicioSesion







