import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'

const Task = ({ task }) => {
    const { removeTask, findItem } = useContext(TaskListContext)

    return (
        <tr className="" key={task.id}>
            <td>
                <span className="m5">{task.description}&nbsp;</span>
            </td>
            <td>
                <span className="m5"><i>{task.status}</i></span>
            </td>
            <td>
                <span className="m5"><i>{task.duration}</i></span>
            </td>
            <td>
                <span className="m5"><i>{task.pausedTime}</i></span>
            </td>
            <td>
                <div>
                    <button onClick={() => removeTask(task.id)}
                        className="mx-2 btn btn-danger"
                    >
                        <i className="text-white fas fa-trash-alt"></i>
                    </button>
                    <button onClick={() => findItem(task.id)} className="mx-2 btn btn-warning">
                        <i className="fas fa-pen"></i>
                    </button>
                    <button className="mx-2 btn btn-success">
                        <i className="fas fa-play"></i>
                    </button>
                    <button className="mx-2 btn btn-primary btn-pause task-btn">
                        <i className="fas fa-pause"></i>
                    </button>
                    <button className="mx-2 btn btn-primary btn-done task-btn">
                        <i className="fas fa-check-circle"></i>
                    </button>
                </div>
            </td> 
        </tr>
    )
}

export default Task