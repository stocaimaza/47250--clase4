/** PATRONES DE DISEÑO **/

//En React tenemos algunos patrones de diseño que nos permite REUTILIZAR COMPONENTES. 

//1) High Order Components (HOC)
//2) Render Props. 

//1) Es una función que recibo como argumento un componente y devuelve un nuevo componente con una funcionalidad adicional. 

//EJERCICIO 1: Voy a armar una función que recibe un componente con un mensaje y voy a retornar un nuevo componente con ese mensaje + un titulo. 

export const mensajeConTitulo = (Mensaje) => {
    return function() {
        return (
            <>
                <h2>Titulo agregado</h2>
                <Mensaje/>
            </>
        )
    }
}

//EJERCICIO 2: aumento de precios. 

export const conAumento = (Producto) => {
    return function({nombre, precio}) {
        let nuevoPrecio = precio + 500;
        return <Producto  nombre={nombre} precio = {nuevoPrecio} />
    }
}

