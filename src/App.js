import React from 'react' //import logo from './logo.svg';
import './App.css';
import TaskList from './components/task/TaskList';


function App() {
  return (
    <div className="">
      <header className="">
        <h1> Task Manager</h1>
      </header>
      <div>
        <TaskList/>
      </div>
    </div>
  );
}

export default App;
