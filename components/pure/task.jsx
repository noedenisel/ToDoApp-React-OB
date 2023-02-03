import React , {useEffect}from 'react';
import PropTypes from 'prop-types';
import { Task } from "../../models/task.class"

//Importamos la hoja de estilos de task.scc

import "../../Styles/task.scss"
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({ task, complete, remove}) => {

    useEffect(() => {
        console.log("Tarea creada");
        return () => {
            console.log("La tarea va a desaparecer");
        };
    }, [task]);
    //cada modificacion que haya en task se genera este uso


    /** Funcion que returne un badge dependiendo el nivel de la tarea */

    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>
                )
                case LEVELS.URGENTE:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>
                )
                case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>
                )
                default:
                 break;
      }
    }

    function taskIconCompletedIcon(){
        if (task.completed)  {
           return ((<i  onClick= {()=>complete(task)} className='bi-toggle-on task-action' style={{color: "green"}}></i> ))
        } else { 
            return (<i onClick= {()=>complete(task)} className='bi-toggle-off task-action' style={{color: "grey"}}></i>)
        }
        
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span >{task.description}</span>
            </td>
            <td className='align-middle'>
                {/* Ejecucion de la funcion que returna badges */}
                <span >{taskLevelBadge()}</span>
            </td>
            <td className='align-middle'>
                {taskIconCompletedIcon()}
                {/* { task.completed  
                ? (<i className='bi-toggle-on' style={{color: "green"}}></i> ) 
                : (<i className='bi-toggle-off' style={{color: "grey"}}></i>)
                } */}
                
                <i onClick={()=> remove(task) } className='bi-trash task-action' style={{color: "tomato", fontWeight: "bold"}}></i>
                
                {/* <span >{task.completed ? "Completed" : "Pending"}</span> */}
            </td>
       
        </tr>


        
        // <div>
        //     <h2 className='task-name'>
        //         Nombre: { task.name }
        //     </h2>
        //     <h3>
        //         Descripción: { task.description }
        //     </h3>
        //     <h4>
        //         Nivel: { task.level }
        //     </h4>
        //     <h5> 
        //         This task is: { task.completed ? "COMPLETED" : "PENDING"} 
        //     </h5>

        // </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;

