import React, {useContext, useState} from 'react'
import {TaskListContext} from '../context/TaskListContext'

const Form = () => {
    const { addTask, clearList } = useContext(TaskListContext);

    const [description, setDescription] = useState('');

    const handleChange = e =>{
        setDescription(e.target.value);
    };

    //prevent default submit
    const handleSubmit = e => {
        e.preventDefault();
        addTask(description);
        setDescription("");
    };

    return(
        <form onSubmit={handleSubmit} className="form">
            <input
                onChange={handleChange}
                value={description}
                type="text" 
                className="task-input"
                placeholder="Add Task..."
                required
            />
            <div className="buttons">
                <button type="submit" className="btn 
                add-task-btn">Add Task</button>
                <button onClick={clearList} className="btn 
                clear-btn">Clear All</button>
            </div>
        </form>

    )
}

export default Form