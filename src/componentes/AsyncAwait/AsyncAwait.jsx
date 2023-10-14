import React from 'react';
import { useState, useEffect } from 'react';

//ARRAY DE PRODUCTOS: 

const misProductos = [
    {nombre: "Mouse", precio: 1500},
    {nombre: "Teclado", precio: 3500},
    {nombre: "Monitor", precio: 10000},
];

//FUNCIÓN QUE RETORNA UNA PROMESA CON UN RETRASO DE 2 SEGUNDOS

const getMisProductos = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(misProductos);
        }, 2000)
    })
}



const AsyncAwait = () => {
    const [productos, setProductos] = useState([]);

    const pedirDatos = async () => {
        const inventario = await getMisProductos();
        setProductos(inventario);
    }

    pedirDatos();
  return (
    <div>
        <h2>Mis productos usando Async Await</h2>

        {
            productos.map((item, index) => {
                return (
                    <div key={index}>
                        <p> {item.nombre} </p>
                        <p> {item.precio} </p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default AsyncAwait