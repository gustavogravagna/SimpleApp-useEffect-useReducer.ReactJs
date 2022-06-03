import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Usuario from './componentes/Usuario';
import FormularioInicioSesion from './componentes/FormularioInicioSesion';
import ContadorClass from './componentes/ContadorClass';
import Boton from './elementos/Boton';
// import ContadorFuncional from './componentes/ContadorFuncional';
import EjemploReducer from './componentes/EjemploReducer';

const App = () => {
  const [session, cambiarEstadoSesion] = useState(false);
  useEffect(() => {
		alert('Bienvenido al Cpanel')
		// Conectar a una API
	}, []);

  return (
    <>
      {session === true ?
      <div>
        <Usuario  nombre = 'Gustavo' pais = 'Italia' /> 
        <ContadorClass cantidadAIncrementar={10} cantidadADisminuir={2} />
        <hr />
        <Usuario />
        <EjemploReducer/>
        <Boton onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesion</Boton>
      </div>
      :
      <div>
        <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion} />
        <br />
      </div>
      }
    </>
  ) 
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


