import React from 'react'
//import AsyncAwait from './componentes/AsyncAwait/AsyncAwait'
//import JsonPlaceHolder from './componentes/JsonPlaceHolder/JsonPlaceHolder'
//import Nesflic from './componentes/Nesflic/Nesflic';
//import Form from './componentes/Form/Form';
//import Hooks from './componentes/Hooks/Hooks'

//Importamos la función y el componente mensaje: 
import Mensaje from './componentes/Patrones/Mensaje';
import Producto from './componentes/Patrones/Producto';
import { mensajeConTitulo, conAumento } from './componentes/Patrones/Patrones';
import Login from './componentes/Patrones/Login';

//useRef: 

import UseRef from './componentes/useRef/useRef';

const App = () => {

  const NuevoComponente = mensajeConTitulo(Mensaje);
  const NuevoProducto = conAumento(Producto);
  return (
    <div>
      <NuevoComponente/>
      <NuevoProducto nombre="tomate" precio={250}/>
      <Login/>
      <UseRef/>
      {/* 
      <AsyncAwait/>
      <JsonPlaceHolder/> 
      <Nesflic/>
      <Form/>
      <Hooks/>
      */}
    </div>
  )
}

export default App