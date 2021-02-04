import React, {useContext} from 'react'
import TaskListContextProvider, { TaskListContext } from '../context/TaskListContext'
import Task from './Task'


const TaskList = () => {
    const {tasks} = useContext(TaskListContext);
    
    return ( 
    /*Show No task when list is empty */
    <div>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Duration</th>
                    <th>Paused</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            {tasks.length ? (
                <tbody className="">
                    {tasks.map((task) => {
                        return (
                                <Task task={task} key={task.id}/>
                                );
                    })}
                </tbody>       
            ):(
                <div className="no-task">No Tasks</div>
            )}
        </table>
    </div>
  );
    
};
    
export default TaskList