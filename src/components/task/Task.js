import React, {useContext} from 'react'
import {TaskListContext} from '../context/TaskListContext'

const Task =({task}) => {
    const{removeTask, findItem} = useContext
    (TaskListContext)
        
    return (
        <li className= "list-item" key={task.id}>
            <span>{task.description}</span>
            <span>{task.status}</span>
                
                <div>
                    <button onClick= {() => removeTask(task.id)}
                        className="btn-delete task-btn"
                        >
                        <i className= "fas fa-trash-alt"></i>
                    </button>
                    <button onClick= {() => findItem(task.id)} className= "btn-edit task-btn">
                        <i className= "fas fa-pen"></i>
                    </button>
                    <button className= "btn-start task-btn">
                        <i className= "fas fa-play"></i>
                    </button>
                    <button className= "btn-pause task-btn">
                        <i className= "fas fa-pause"></i>
                    </button>
                    <button className= "btn-done task-btn">
                        <i className= "fas fa-check-circle"></i>
                    </button>
                </div>
        </li>
        
    )
}

export default Task