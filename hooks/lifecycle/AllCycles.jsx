import React, {useEffect} from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log("Componente creado");

    const intervalID = setInterval(() => {
        document.title = `${new Date()}`
        //cada segundo la fecha de la pestaña cambia
        console.log("Actualizacion del componente");
    }, 1000)

        return () => {
            console.log("CComponente va a desaparacer");
            //cuando el componente desaparece se limpia el contenido 
            document.title = "Tiempo Detenido"
            clearInterval(intervalID)
        };
    }, []);


    return (
        <div>
    
        </div>
    );
}

export default AllCycles;
