import React, {useState, useEffect, useRef} from 'react';

const Ejempl2 = () => {

    //Vamos a crear dos contadores distintos
    //cada uno en un estado diferente

    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0)

    //Vamos a crear una referencia con useRef() para activar una variable
    //con un elemento del DOM del componente (vistaHTML)

    const miRef = useRef()

    function incrementar1(){
        setContador1(contador1 + 1)
    }

    function incrementar2(){
        setContador2(contador2 + 1)
    }

    /** Trabajando con UseEffect */

    /**
     * ? caso1:  Ejecutar siempre un snipet de codigo
     * se ejecuta aquello que este dentro del useEffect()
     */

    // useEffect(()=>{ 
    //     console.log("CAMBIO EN EL ESTADO DEL COMPONENTE")
    //     console.log("Mostrando referencia a elemento del dom")
    //     console.log(miRef)
    // })

    /** ? Caso 2: Ejecutar solo cuando cambie contador1
     * cada vez que haya un cambio en contador 1 se ejecuta lo que diga useEffect
     * en cambio que caso que cambie contador2, no habra ejecucion*/ 

    useEffect(() => {
    console.log("CAMBIO EN EL ESTADO DE CONTADOR 1/CONTADOR 2")
        console.log("Mostrando referencia a elemento del dom")
        console.log(miRef)
    
    }, [contador1, contador2]);

    return (
        <div>
             <h1>*** Ejemplo de use state(), useRef() y useEffect()***</h1>
            <h2> CONTADOR 1: {contador1} </h2>
            <h2> CONTADOR 2: {contador2} </h2>

            {/* Elemento referenciado */}

            <h4 ref={miRef}>Ejemplo de elemento referenciado   </h4>
        
            {/**Botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar 1</button>
                <button onClick={incrementar2}>incrementar2</button>
            </div>
        </div>
    );
}

export default Ejempl2;
