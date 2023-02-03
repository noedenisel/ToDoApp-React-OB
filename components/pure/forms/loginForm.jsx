/**Componente que va a contener un formulario para autenticacion de usuarios */

import React , { useState }from 'react';
// useState sirve para tener contraolado un usuario inicial
const LoginForm = () => {
    
    const initialCredentials = [
        {
            user: "",
            password: ""
        }
    ]

    const [ credentials, setCredentials ] = useState (initialCredentials)

    
    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
