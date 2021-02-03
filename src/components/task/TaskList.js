import React, {useContext} from 'react'
import TaskListContextProvider, { TaskListContext } from '../context/TaskListContext'
import Task from './Task'


const TaskList = () => {
    const {tasks} = useContext(TaskListContext);
    
    return ( 
    /*Show No task when list is empty */
    <div>
        {tasks.length ? (
            <ul className="list">
                {tasks.map((task) => {
                    return <Task task={task} key={task.id}/>;
                })}
            </ul>       
        ):(
            <div className="no-task">No Tasks</div>
        )}
        
    </div>
  );
    
};
    
export default TaskList