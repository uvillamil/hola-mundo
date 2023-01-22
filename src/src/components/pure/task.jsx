import React, { useEffect }from 'react';
import PropTypes from 'prop-types';
import {Task} from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

// importamos la hoja de estilos de task.scss
import '../../styles/task.scss'

const TaskComponent= ({ task, complete, remove }) => {
    useEffect(() => {
        console.log('Create Task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        }
    }, [task]);

    /**
     * Funtion that returns a Badge
     * depending on the level of the task
     */

    function taskLevelBadge(){
        switch(task.level){
            case LEVELS.NORMAL:
                return(
                    <h6
                        className= 'mb-0'>
                        <spam className='badge bg-primary'>
                            {task.level}
                        </spam>
                    </h6>)
            case LEVELS.URGENT:
                return(
                    <h6
                        className= 'mb-0'>
                        <spam className='badge bg-warning'>
                            {task.level}
                        </spam>
                    </h6>)
            case LEVELS.BLOCKING:
                return(
                    <h6
                        className= 'mb-0'>
                        <spam className='badge bg-danger'>
                            {task.level}
                        </spam>
                    </h6>)
            
            default:
                break;
        }


    }
    /**
     * Funtion that returns icon depending on completion of the task
     */

    function taskCompletedIcon(){
        if (task.completed){
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color : 'green'}}></i>)
        }else{
           return (<i onClick={() => complete(task)} className='big-toggle-off task-action' style={{color : 'grey'}}></i>)
        }
    }

    const taskCompleted = {
        color: 'gray',
        fontWeight: 'bold',
        textDecoration: 'line-through'
    }
    const taskPending = {
        fontWeight: 'bold',
        color: 'tomato'
    }


    return (

        <tr className='fw-normal'style={ task.completed ? taskCompleted: taskPending}>
             <th>
                <span className='ms-2'>{task.name}</span>
             </th>
             <td className='align-middle'>
                <span>{task.description}</span>
             </td>
             <td className='aling-middle'>
                {/*Execution of funtion to return badge element*/}
                {taskLevelBadge()}
             </td>
             <td className='aling-middle'>
                {/* Execution of funtion to return icon to depending on completion*/}
                {taskCompletedIcon()}
                 <i className='bi-trash task-action' style={{color : 'tomato', fontSize: '20px'}}onClick={()=>remove(task)}></i>
             </td>

        </tr>

    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired

};


export default TaskComponent;
