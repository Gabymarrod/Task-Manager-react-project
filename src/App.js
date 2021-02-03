import React from 'react' //import logo from './logo.svg';
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

//componentDidMount() {
  useEffect(() => {
    loadData()
  }, []);
//}

function loadData(){
  localStorage.setItem("userList", JSON.stringify(usersList))

}

  return (
    <TaskListContextProvider>
      <div className="container-fluid">
        <header >
          <Login />
        </header>

        <div className="">
          <div className="">
             <Form />
             <TaskList/>
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

// export default App;
