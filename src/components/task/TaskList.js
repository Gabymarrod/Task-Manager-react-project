import React, {useContext} from 'react'
import TaskListContextProvider from '../context/TaskListContext'
import Form from './Form'
const TaskList = () => {
    //for use the context hook
    
    return ( 
    <div><TaskListContextProvider />
        </div>);
    
};

export default TaskList