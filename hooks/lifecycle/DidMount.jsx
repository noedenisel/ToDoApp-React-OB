/** Ejemplo de uso del metodo de cilco de vida en componente clase y el hook de ciclo de vida en componente funcional */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount(){
        //proceso asincrono previo
        console.log("Comportamiento antes de que el componente sea añadido al DOM (renderice)");
    }


    render() {
        return (
            <div>
                <h1> DID MOUNT</h1>
            </div>
        );
    }
}



export const DidMountHook = () => {

    useEffect(()=> {
        console.log("Comportamiento antes de que el componente sea añadido al DOM (renderice)");
        
    },[])

    //[] indica que se usa una vez, sino significa TODAS LAS VECES

    return (
        <div>
        <h1> DID MOUNT</h1>
    </div>
);

}





