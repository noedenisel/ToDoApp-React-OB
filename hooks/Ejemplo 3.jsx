/** Ejemplo Hoos 
 * -useState()
 * -useContext()
 */

import React, {  useContext, useState } from 'react';

/** COMPONENTE 1
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor que recibe desde el padre
 */

 const miContexto= React.createContext(null) //Inicializamos un estado vacio que va a rellenarse con los datos del contexto del padre

 const Componente1 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h1>
                El token es: {state.token} 
                {/* Pintamos Componente2 */}
                <Componente2></Componente2>
            </h1>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h2> 
                La sesion es: {state.sesion}
            </h2>
        </div>
    );
}



export default function MicomponenteConContexto(){
    const estadoInicial = {
        token: "1234567",
        sesion: 1
    }

    //creamos el estado de este componente
    
    const [sesionData, setSesionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSesionData({
            token: "JWE1678",
            sesion: sesionData.sesion +1
        }
    )
}


return (
   
   <miContexto.Provider value= {sesionData}>
        <h1>
            Ejemplo de useState() y useContext()
        </h1>
            <button onclick= {actualizarSesion}>Actualizar Sesion</button>
   </miContexto.Provider>

    /* Todo lo que esta aqui dentro puede leer los datos de sesionData, 
    ademas de actualizarse 
    Si se actualizan los componentes de aqui, tambien los actualiza*/
);

};

