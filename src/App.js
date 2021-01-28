import React from 'react' //import logo from './logo.svg';
import TaskList from './components/task/TaskList';
import Form from './components/task/Form';
import TaskListContextProvider from './components/context/TaskListContext';
import './App.css';

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
             <Form />
             <TaskList/>
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
