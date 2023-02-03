/** Ejemplo de componente de tipo clase que dispone de los metodos del ciclo de vida */

import React, {Component} from "react";
import PropTypes from "prop-types"

class LifeCycleExample extends Component {

    constructor(props) {
        super(props)
        console.log("CONSTRUCTOR Cuando se instancia el componente")
    }

    componentWilllMount(){
        console.log("WILLMOUNT: Antes del montaje del componente")
    }

    componentDidMount(){
        console.log("DIDMOUNT: Justo al del montaje del componente antes de renderizarlos")
    }

    componentWillReceiveProps(nextProps){
        console.log("WillReceiveProps: si  va a recibir nuevas props")
    }

    shouldComponentUpdate(nextProps,nextState) {
        /** Sirve apra controlar si el componente debe o no actualizarse */
        // return true or false
    }

    componentWillUpdate(nextProps, nextState){
        console.log("WillUpdate: Justo antes de actualizarse")
        //Deprecated

    }
    componentDidUpdate(prevProps, prevState){
        console.log("DidUpdate: justo despues de actualizarse ")

    }

    componentWillUnmount(){
        console.log("WillUnmoun: justo antes de desaparecer")
    }

    render(){
       return(
        <div>

        </div>
       )

       }
}

LifeCycleExample.propTypes = {

}