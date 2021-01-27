import React, {createContext, useState} from 
'react'

export const TaskListContext = createContext()

const TaskListContextProvider = () => {
  const tasks = [
      {description:'Read the classes material', status:'started', date: '01/01/2021', hour: '14:20:00', duration:'1:45:00'},
      {description:'Watch some videos related to the topic', status:' not started', date: '03/01/2021', hour: '07:20:00', duration:'3:45:00'},
      {description:'Search for some extra info', status:' not started', date: '06/01/2021', hour: '09:30:00', duration:'3:30:00'},
      {description:'Write some Code', status:'not started', date: '07/01/2021', hour: '13:00:00', duration:'5:00:00'},
    ]
    
    return (<div> <h3>Task List</h3>
            {tasks.map((task, i) => {
                return (<div key= {i}> 
                    {task.description} -{task.status} -{task.duration}

                </div>)
            })}
    </div>);
};

export default TaskListContextProvider;
