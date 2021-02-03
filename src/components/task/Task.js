import React, {useContext} from 'react'
import {TaskListContext} from '../context/TaskListContext'

const Task =({task}) => {
    const{removeTask, findItem} = useContext
    (TaskListContext)
        
    return (
        <li className="list-item" key={task.id}>
            <span className="m5">{task.description}&nbsp;</span>
            <span className="m5"><i>{task.status}</i></span>
                
                <div>
                    <button onClick= {() => removeTask(task.id)}
                        className="btn btn-danger"
                        >
                        <i className= "text-white fas fa-trash-alt"></i>
                    </button>
                    <button onClick= {() => findItem(task.id)} className= "btn btn-primary">
                        <i className= "fas fa-pen"></i>
                    </button>
                    <button className= "btn btn-primary btn-start task-btn">
                        <i className= "fas fa-play"></i>
                    </button>
                    <button className= "btn btn-primary btn-pause task-btn">
                        <i className= "fas fa-pause"></i>
                    </button>
                    <button className= "btn btn-primary btn-done task-btn">
                        <i className= "fas fa-check-circle"></i>
                    </button>
                </div>
        </li>
        
    )
}

export default Task