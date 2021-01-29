import React from 'react'

const Task =({task}) => {
    console.log(task)
    return (
        <li className= "list-item" key={task.id}>
            <span>{task.description}</span>
            <span>Status</span>
                
                <div>
                    <button className= "btn-delete task-btn">
                        <i className= "fas fa-trash-alt"></i>
                    </button>
                    <button className= "btn-edit task-btn">
                        <i className= "fas fa-pen"></i>
                    </button>
                </div>
        </li>
        
    )
}

export default Task