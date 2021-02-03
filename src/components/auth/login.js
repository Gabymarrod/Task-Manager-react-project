import React, { useState } from 'react'


export default function Login(){

    const userLogged = ''

    const [loggedIn, setLoggedIn] = useState(false)
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")

    function loginPass(user){
        setLoggedIn(true)
        localStorage.setItem("loggedIn",JSON.stringify(loggedIn))
    }

    function loginFail(){
        console.log("Enviar mensaje de error al loguearse");
    }

    function logout(){
        setLoggedIn(false)
        setName("")
        setPass("")
        localStorage.setItem("loggedIn",JSON.stringify(loggedIn))
        localStorage.setItem("userLogged", "")
    }

    function handleName(e){
        setName(e.target.value)
    }

    function handlePass(e){
        setPass(e.target.value)
    }


    function login(event){
        event.preventDefault()
        let userList = JSON.parse(localStorage.userList); //getItem("userList")
        //let name = document.querySelector('#name')
        //let pass = document.querySelector('#pass')
        for (const key in userList) {
            if (Object.hasOwnProperty.call(userList, key)) {
                const element = userList[key];
                console.log(element);
                if((name != "" && name != null)){
                    if((element.nick == name)&& (element.pass == pass)){
                        loginPass(element)

                    }else{
                        loginFail()

                    }
                }
            }
        }
        

    }

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Task Manager</a>
                    {(!loggedIn)?
                
                    <form className="d-flex" onSubmit={login} >
                        <input id="name" className="form-control me-2" type="text" placeholder="user" aria-label="user" onChange={handleName} />
                        <input id="pass" className="form-control me-2" type="password" placeholder="pass" aria-label="password" onChange={handlePass} />
                        <button className="btn btn-outline-success" type="submit">Login</button>
                    </form>
                    :
                    <span><b>{ name }: </b>
                    <button className="btn btn-outline-success" type="submit" onClick={logout}>Logout</button>      
                    </span>
                    }      
                </div>
            </nav>
        </div>
    )

}