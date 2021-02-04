import React, { useEffect } from 'react' //import logo from './logo.svg';
import TaskList from './components/task/TaskList';
import Form from './components/task/Form';
import TaskListContextProvider from './components/context/TaskListContext';
import './App.css';
//import TimingManage from './components/task/TimingManage';
import Login from './components/auth/login';


  

const App = () => {

  const usersList = [{
    nick: "Gabriela",
    pass: "admin1"
  },
  {
    nick: "Miguel",
    pass: "admin2"
  }
]

function loadData(){
  localStorage.setItem("userList", JSON.stringify(usersList))

}
//componentDidMount() {
  useEffect(() => {
    loadData()
  }, []);
//}


  return (
    <TaskListContextProvider>
      <div className="container-fluid">
        <header >
          <Login />
        </header>

        <div className="">
          <div className="m-5">
             <Form />
             <TaskList/>
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
