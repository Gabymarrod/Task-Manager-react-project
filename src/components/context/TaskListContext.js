import React, {createContext, useState} from 
'react'


export const TaskListContext = createContext()

const TaskListContextProvider = props => {
  const [tasks,setTasks] = useState([
      {description:'Read the classes material', status:'started', id:1, duration:0, pausedTime:0},
      {description:'Watch some videos related to the topic', status:' not started', id:2, duration:0, pausedTime:0},
      {description:'Search for some extra info', status:' not started', id:3, duration:0, pausedTime:0},
      {description:'Write some Code', status:'not started', id:4, duration:0, pausedTime:0},
    ]);

    //add task function
    const addTask = (description) => {
        setTasks([...tasks, {description, id: tasks.length+1 , status:'not started', duration:0, pausedTime:0}])
    };

    //single remove function
    const removeTask = id => {
        setTasks(tasks.filter (tasks => tasks.id !== id))
    };
    //clear all function
    const clearList = () => {
        setTasks([])
    };
    
    return (
        <TaskListContext.Provider value={{tasks, addTask, removeTask, clearList}}>
            {props.children}
        </TaskListContext.Provider>
    );
};

export default TaskListContextProvider;
