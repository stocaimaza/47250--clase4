import { useState, useEffect } from "react";
import './Nesflic.css';


const Nesflic = () => {
    const [peliculas, setPeliculas] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    
    const MI_KEY = "c9f04fa4";

    useEffect(()=> {
        fetch(`http://www.omdbapi.com/?apikey=${MI_KEY}&s=${busqueda}`)
            .then(respuesta => respuesta.json())
            .then(data => setPeliculas(data.Search))
            .catch(error => console.log("Vamos a morir! " + error))

        }, [busqueda])

    //Función auxiliar para cargar el estado "busqueda" con los datos del input:

    const manejadorSubmit = (event) => {
        event.preventDefault();
        setBusqueda(event.target.busqueda.value);
        event.target.busqueda.value = "";
    }

  return (
    <>
        <h1>Nesflic</h1>
        <form onSubmit={manejadorSubmit}> 
            <input type="text" name="busqueda" />
            <button type="submit"> Buscar </button>
        </form>

        <ul>
            {
                peliculas === undefined ? <h2>La pelicula no esta disponible en nuestra base de datos</h2> : peliculas.map(peli => (<li key={peli.imdbID}> <img src={peli.Poster}  /> {peli.Title} </li>))
            }
        </ul>

    </>
  )
}

export default Nesflic

//Operador ternario es una simplificacion del if else 

//condicion ? codigoSiEsVerdad : codigoSiEsFalso