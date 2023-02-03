import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef ("")
    const nameRef = useRef ("")

    function pulsarBoton (){
        const text = messageRef.current.value 
        alert(`Text in input ${Text}`)

    }

    function pulsarBotonParams(text){
        alert(`Text: ${text}`)
    }

    function submitName (e) {
        e.preventDefault()
        update(nameRef.current.value)
    }


    return (
        <div style={{background: "green", padding: "30px"}}>
            <p onMouseOver={()=> console.log("On mouse over")}>
                Hello, {name}
            </p>
            
            <button onClick={()=> console.log("Boton 1 pulsado")}>
                Boton 1
            </button>

            <button onClick={pulsarBoton}>
                Boton 2
            </button>

            <button onClick={()=> pulsarBotonParams("Hello")}>
                Boton 3
            </button>

            <input 
                placeholder= "send a text to your father"
                onFocus={()=> console.log("Input Focus")}
                onChange={(e) =>console.log("Input changed", e.target.value)}
                onCopy={()=> console.log("Copied text from input")}    
                ref = {messageRef}
                >
            </input>

            <button onClick={()=> send(messageRef.current.value )}>
                Send Message
            </button>
  
            <div style={{marginTop: "20px"}}>
                <form onSubmit={submitName}>
                    <input
                        ref={nameRef}
                        placeholder='New Name'
                    >
                      </input>
                    <button type='submit'>
                        Update Name
                    </button>
                </form> 
            </div>
      

        </div>
    );
}

export default Child;
