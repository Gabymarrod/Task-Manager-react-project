import React, {useContext, useState, useEffect} from 'react'
import {TaskListContext} from '../context/TaskListContext'

const Form = () => {
    const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);

    const [description, setDescription] = useState('');

    const handleChange = e =>{
        setDescription(e.target.value);
    };

    //prevent default submit
    const handleSubmit = e => {
        e.preventDefault();
        if (! editItem ) {
            addTask(description);
            setDescription("");
        } else {
            editTask(description, editItem.id);
        }
        
    };

    useEffect(() =>{
        if(editItem){
            setDescription(editItem.description);
        } else{
            setDescription("");
        }
    }, [editItem]);

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
                <button type="submit" className="btn btn-primary add-task-btn">
                  {editItem ? 'Edit Task': 'Add Task'}
                </button>
                <button onClick={clearList} className="btn btn-danger clear-btn">Clear All</button>
            </div>
        </form>

    )
}

export default Form