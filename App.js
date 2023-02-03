// import logo from './logo.svg';
import './App.css';
import Father from './components/containers/father';
// import Ejemplo4 from './hooks/Ejemplo4';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/containers/taskList';
import OptionalRender from './components/pure/optinalRender';
// import GreetinStyled from './components/pure/greetinStyled';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejempl2 from './hooks/Ejempl2';
// import MicomponenteConContexto from './hooks/Ejemplo 3';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/**Componente propio Greetinf.jsx */}
        {/* <Greeting name="Noelia"></Greeting> */}

        {/**Componente de ejemplo funcional */}
        {/* <GreetingF name="Noelia"></GreetingF> */}
        
        {/**Componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        
        {/* Ejemplo de uso de Hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejempl2></Ejempl2> */}

        {/* Ejemplo3 */}
        {/* <MicomponenteConContexto></MicomponenteConContexto> */}

        {/* <Ejemplo4 nombre= "Martin"> */}
        {/* Todo lo que hay aqui dentro es tratado como propr.children */}
          {/* <h3> Contenido del props.children</h3> */}
        {/* </Ejemplo4> */}

        {/* <GreetinStyled name = "Martin"></GreetinStyled> */}
        {/* </header> */}

      
        {/* Gestion de eventos */}
        {/* <Father></Father> */} 

        {/** Ejemplos de renderizado condicional */}
        <OptionalRender></OptionalRender>


      
        {/* <TaskListComponent></TaskListComponent> */}
    </div>
  );
}

export default App;
