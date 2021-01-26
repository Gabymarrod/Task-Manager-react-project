import React from 'react'

const Form = () => {
    return( 
    <li className= "list-item">
        <span>Description</span>
        <span>Status</span>
        <span>Date</span>
        <span>Hour</span>
        <span>Estimated hours</span>
        <span>Paused</span>
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

export default Form