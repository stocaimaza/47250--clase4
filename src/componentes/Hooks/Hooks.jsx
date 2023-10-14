//Vamos a trabajar con Customs Hooks
//1) Importamos el useContador: 
import { useContador } from "../../custom-hooks/useContador";

//2) Importamos el useFetch: 
import { useFetch } from "../../custom-hooks/useFetch";




const Hooks = () => {
    const {contador, incrementar, decrementar} = useContador(1, 10);

    const data = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <div>
        <h2>Contador con Custom Hooks </h2>
        <button onClick={decrementar}> restar </button>
        <strong> {contador} </strong>
        <button onClick={incrementar}> sumar </button>

        <hr />

        <h2>Fetch de Datos </h2>

        {data && data.map(usuario => <p key={usuario.id}> {usuario.name} </p>)}
    </div>
  )
}

export default Hooks