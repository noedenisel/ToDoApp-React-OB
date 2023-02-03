import React , {useState, useEffect}from 'react';
import { LEVELS  } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

//importamos la hoja de estilos de tasl.css

import "../../Styles/task.scss"
import Taskform from '../pure/forms/taskform';


const TaskListComponent = () => {
    
    const defaultTask1 = new Task ("Example1", "Default description1", true, LEVELS.NORMAL)
    const defaultTask2 = new Task ("Example2", "Default description2", false, LEVELS.URGENTE)
    const defaultTask3 = new Task ("Example3", "Default description3", false, LEVELS.BLOCKING)
    
    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true)

    //Control del ciclo de vida

    useEffect(() => {
        console.log("Modificacion de tasks");
        setLoading(false)
        return () => {
            console.log("Desaparicion del componente");
        };
    }, [tasks]);

    function completeTask(task){
        console.log("Complete this Task:", task);
        const index = tasks.indexOf(task)
        const tempTask = [...tasks] // ? trabajar sobre variantes temporales
        tempTask[index].completed = !tempTask[index].completed  // ? valor contrario al que tenia originalmente

        //Actualizar el estado del componente, actualizo la iteracion en el map, actualizo la tarea y se muestra actualizada

        setTasks(tempTask) // ? actualizo la tarea y le paso la nueva tarea actualizada
    }


    function removeTask(task){
        console.log("Deelete this Task:", task);
        const index = tasks.indexOf(task)
        const tempTask = [...tasks] 
        tempTask.splice(index,1)
        setTasks(tempTask)
    }

    function addTask(task){
        console.log("Deelete this Task:", task);
        const index = tasks.indexOf(task)
        const tempTask = [...tasks] 
        tempTask.push(task)
        setTasks(tempTask)
    }



    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                {/* Card Header */}
                    <div className='card-header p-3'>
                        <h4>
                            Your Tasks:
                        </h4>
                    </div>

                    {/* Card Body (content ) */}
                    <div className='card-body' data-mdb-perfect-scrollbar="true" style={ {position: "relative", height: "400px"} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col"> Title </th>
                                    <th scope="col"> Description </th>
                                    <th scope="col"> Priority </th>
                                    <th scope="col"> Actions </th>
                                </tr>
                            </thead>
                            <tbody>
                                { tasks.map ((task, index) => {
                                    return (
                                        <TaskComponent 
                                            key= { index } 
                                            task = { task }
                                            complete = {completeTask}
                                            remove = {removeTask}
                                            >
                                        </TaskComponent> 
                                    )
                                }
                                )
                                }
                                
                            </tbody>
                        </table>
                    </div>
                    <Taskform add={addTask}></Taskform>
                </div>
               
            </div>
            
            {/* <TaskComponent task = { defaultTask }></TaskComponent> */}
        </div>
    );
};


export default TaskListComponent;
