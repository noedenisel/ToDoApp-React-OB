/** Ejemplo para entender el uso de props.children */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>*** Ejemplo de CHILDREN PROPS ***</h1>
            <h2>
                Nombre:
            </h2> { props.nombre }

            {/**Props.children pintara por defecto aquello que se encuentre entre las etiquetas de apertura y cierre de este componente desde el componente de orden superior */}

            {props.children} {/**h3 que hace referencia al elemento que se encuentra en el padre */}
        </div>
    );
}

export default Ejemplo4;
