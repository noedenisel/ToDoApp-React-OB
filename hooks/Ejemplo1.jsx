import React, { useState } from 'react';

const Ejemplo1 = () => {

    //Valor inicial para un contador

    const valorInicial = 0;

    //Valor inicial para una persona

    const personaInicial = {
        nombre: "Martin",
        email: "marin@imaginagroup.com"
    }

    /** Queremos que el valor inicial y personainicial sean parte del estado del componente
     * para asi poder gestionar su cambio y que este se vea reflejado en la vista del componente
     */

    const [contador, setContador ] = useState(valorInicial)
    const [persona, setPersona] = useState(personaInicial)

    /**
     * Funcion para actualizar el estado privado que contiene el contador
     */

    function incrementarContador(){
        //? funcioParaCambiar(nuevoValor)
        setContador (contador +1)
    }

      /**
     * Funcion para actualizar el estado persona del componente
     */
    function actualizarPersona(){
        setPersona(
            {
                nombre: "Pepe",
                email: "pepe@imaginagroup.com"
            }
        )
    }
    return (
        <div>
            <h1>*** Ejemplo de use state()***</h1>
            <h2> CONTADOR: {contador} </h2>
            <h2> DATOS DE LA PERSONA: </h2>
            <h3> Nombre: {persona.nombre} </h3>
            <h4> Email: {persona.email} </h4>

        {/**Bloque de botones para actualizar el estado del componente */}
            <div>
                <button onClick={incrementarContador}>Incrementar contador</button>
                <button onClick={actualizarPersona}>Actualizar Persona</button>
            </div>
        </div>
    );
}

export default Ejemplo1;
