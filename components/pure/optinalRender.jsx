import React, {useState} from 'react';

// Login/ LogOut buttons

const LogInButton = ({logInAction}) => {
    return (
        <button onClick={logInAction}>LogIn</button>
    )
}

const LogOutButton = ({logOutAction}) => {
    return (
        <button onClick={logOutAction}>LogIn</button>
    )
}

// ? (Expresion true) && expresion => se renderiza la expresion
// ? (Expresion false) && expresion => no se renderiza la expresion



const OptionalRender = () => {

    let [acces, setAcces] = useState(true);

    let [nMessage, setNMessage] = useState(true);

    // const updateAcces = () => {
    //     setAcces(!acces)
    // } 

    let logInAction = () => {
        setAcces(true)
    }

    let logOutAction =() => {
        setAcces(false)
    }

    let optionalButton

    // if(acces){
    //     optionalButton = <button onClick={updateAcces}>LogOut</button>
    // } else {
    //     optionalButton = <button onClick={updateAcces}>LogIn</button>
    // }


    if(acces){
        optionalButton = <LogOutButton logOutAction={logOutAction}>LogOut</LogOutButton>
    } else {
        optionalButton = <LogInButton logInAction={logInAction} >LogIn</LogInButton>
    }


    //add mensajes

    let addMesseges =() => {
        setNMessage(nMessage++)
    }
    return (
        <div>
            {optionalButton}
            {/* {nMessage > 0 || <p> Hay {nMessage} sin leer </p>}
            {nMessage === 0 && <p>No tienes nuevos mensajes</p>}  */}

           {nMessage > 0 
            ? <p> Hay {nMessage} mensaje{nMessage > 1 ? "s" : null} sin leer ...</p> 
            : <p> No tienes nuevos mensajes </p>} 
            
            <button onClick={addMesseges}>Add new Message</button>
        </div>
    );
}

export default OptionalRender;
