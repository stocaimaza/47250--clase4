import { useState } from "react";
import emailjs from "emailjs-com";


const Form = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    //Funciones auxiliares: 

    const enviarMensaje = (event) => {
        event.preventDefault();

        const templateParams = {
            from_name: nombre,
            from_email: email,
            message: mensaje
        };

        emailjs.send(
            //id del servicio
            //id de la template
            //objeto con los datos del formulario
            //id del usuario (key publica)
            "service_0i6lrvs",
            "template_it5t113",
            templateParams,
            "hDNpBj6cDuzmgECwW"
        )
        .then(() => console.log("Mensaje enviado!"))
        .catch(error => console.log(error))

        setNombre("");
        setEmail("");
        setMensaje("");

    }

  return (
    <form onSubmit={enviarMensaje}>
        <label htmlFor="">Nombre: </label>
        <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)} />

        <label htmlFor="">Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="">Mensaje: </label>
        <textarea value={mensaje} onChange={(e)=> setMensaje(e.target.value)} cols="30" rows="10"></textarea>

        <button type='submit'>Enviar Mensaje</button>

    </form>
  )
}

export default Form