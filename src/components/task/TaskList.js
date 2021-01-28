import React, {useContext} from 'react'
import TaskListContextProvider, { TaskListContext } from '../context/TaskListContext'
import Task from './Task'


const TaskList = () => {
    const {tasks} = useContext(TaskListContext);
    
    return ( <div>
        <ul className="list">
            {tasks.map((tasks) => {
                return <Task task={tasks} key={tasks.id}/>;
            })}
        </ul>
    </div>);
    
};

export default TaskList