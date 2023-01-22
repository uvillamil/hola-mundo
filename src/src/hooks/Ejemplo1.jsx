/**
 * Ejemplo del uso del HOOK useState.
 * 
 * Crear un componente de tipo funcion y accesder a su estado
 * privado a tavés de un hook y, además, poder modificarlo.
 */

import React, {useState} from 'react';

const Ejemplo1 = () => {
     //Valor inicial para un contador

     const valorInicial = 0;

     // valor inicial para una persona

     const personaInicial = {
        nombre : 'Uriel',
        email : 'uvillamil@gmail.com'
     }

     /**
      * Queremos que el VALORINICIAL y PERSONAINICIAL sean
      * parte del estado del componente para así poder gestionar su cambio 
      * y que éste se vea reflejado en la vista del componente.
      * 
      * const [nombreVariable, funciónParaCambiar] = useState(valorInicial) 
      */
     const [contador, setContador] = useState(valorInicial);
     const [persona, setPersona] = useState(personaInicial);

     /**
      * Función para actualizar el estado privado que contiene el contador
      */
     
     function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1)
     }

     /**
      * Función para actualizar el estado de persona en el componente
      */

     function actualizarPersona(){
        setPersona(
            {
                nombre: 'Arnulfo',
                email: 'arnol@gmail.com'
            }
        )
     }


    return (
        <div>
        <h1>*** Ejemplo de useState() ***</h1>
        <h2>CONTADOR: {contador}</h2>
        <h2>DATOS DE LA PERSONA</h2>
        <h3>NOMBRE: {persona.nombre}</h3>
        <h4>EMAIL: {persona.email}</h4>
        {/*Bloque de botones para actualizar el estado del componente*/}
        <button onClick={incrementarContador}>Incrementar  Contador</button>
        <button onClick={actualizarPersona}>Actualizar  Persona</button>
            
        </div>
    );
}

export default Ejemplo1;
