import React, {createContext, useEffect, useState} from 
'react'


export const TaskListContext = createContext()

const TaskListContextProvider = props => {
  const initialState = JSON.parse (localStorage.getItem("tasks")) || [];

  const[tasks, setTasks] = useState(initialState);
  const[editItem, setEditItem] = useState(null);

  useEffect(() => {
      localStorage.setItem("tasks",JSON.stringify(tasks));
  }, [tasks]);

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

    const findItem = id =>{
        const item = tasks.find(task =>task.id ===id);

        setEditItem(item);
    };
    const editTask = (description, id) => {
        const newTasks = tasks.map(task=> (task.id === id ? {description,id} :task));

        setTasks(newTasks);
        setEditItem(null);
    };
    
    return (
        <TaskListContext.Provider value={{tasks, addTask, removeTask, clearList, findItem, editTask, editItem}}>
            {props.children}
        </TaskListContext.Provider>
    );
};

export default TaskListContextProvider;
