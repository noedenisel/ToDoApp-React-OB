/** Ejemplo de uso de metodo componentDidUpdate en componente clase y hook en componente funcional */

import React, { Component, useEffect } from 'react'

export  class DidUpdate extends Component {

    componentDidUpdate(){
        console.log("Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado");
    }
  render() {
    return (
      <div>
        <h1>Did Update</h1>
      </div>
    )
  }
}



export const DidUpdateHook = () => {

    useEffect(()=> {
        console.log("Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado");
    })

    //SIN LIMITE para que se ejecute TODAS LAS VECES por eso NO VAN los []

    return (
        <div>
            <h1>Did Update</h1>
        </div>
    );
}



