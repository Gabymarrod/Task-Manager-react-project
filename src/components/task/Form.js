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

        <div className="mb-3 row">
            <label htmlFor="taskInput" className="col-sm-2 col-form-label text-capitalize fs-3 fw-bold">Task</label>
            <div className="col-sm-10">
                <input
                    id="taskInput"
                    onChange={handleChange}
                    value={description}
                    type="text" 
                    className="form-control "
                    aria-label="default input example"
                    placeholder="Add Task..."
                    required />
            </div>
        </div>
        <div className="mb-3 row">
            <div className="offset-sm-4 col-sm-4 offset-md-8 col-md-2">
                <button type="submit" className="btn btn-primary ">
                    <i className= "fas fa-plus"></i> New Task {/* {editItem ? 'Edit Task': 'Add Task'} */}
                </button>

            </div>
            <div className="col-sm-4 col-md-2">
                <button onClick={clearList} className="btn btn-danger">
                    <i className= "fas fa-stop"></i> Clear All
                </button>
            </div>
            <div className="col-sm-8">

            </div>
        </div>
    </form>

    )
}

export default Form