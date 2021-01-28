import React, {createContext, useState} from 
'react'
//import uuid from "uuid";

export const TaskListContext = createContext()

const TaskListContextProvider = props => {
  const [tasks,setTasks] = useState([
      {description:'Read the classes material', status:'started', id:1},
      {description:'Watch some videos related to the topic', status:' not started', id:2},
      {description:'Search for some extra info', status:' not started', id:3},
      {description:'Write some Code', status:'not started', id:4},
    ]);

    //add task function
    const addTask = (description) => {
        setTasks([...tasks, {description, /*id: uuid ()*/}])
    }
    
    return (
        <TaskListContext.Provider value={{tasks, addTask}}>
            {props.children}
        </TaskListContext.Provider>
    );
};

export default TaskListContextProvider;
