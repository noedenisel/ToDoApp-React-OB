import React, { useState } from 'react';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';

//Definiendo styles en constantes

// ? Estilo para usuario logueado
const loggedStyle = {
    color: "blue"
}

// ? Estilo para usuario no logueado
const unloggedStyle = {
    color: "tomato",
    fontWeight: "bold"
}


const GreetinStyled = (props) => {

    //Generamos un estado para el componente para controlar si el usuario esta o no logueado

    const [logged, setLogged] = useState(false);

    const greetinUser = () => (<p>Hola, { props.name }</p>) 
    const pleaseLogin = () => (<p>Please Login</p>)


    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
        { logged ? 
            greetinUser()
            : 
            pleaseLogin()
        }
        
            <button onClick={()=>{
                console.log("Boton pulsado")
                setLogged(!logged);
                }}>
                { logged ? "Logout" : "Login"}
            </button>
        </div>
    );
}

export default GreetinStyled;
