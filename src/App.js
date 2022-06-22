import React from 'react';
import { useState,useEffect } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import './App.css';

function App() 
{
  //Our states for Todo App--
  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all");
  const [filteredTodos,setFilteredTodos]=useState([]);
    
  //UseEffect--
  //UseEffect takes a function and runs it 
  //whenever state changes,in this case call 
  //filter Handler when stae changes
  useEffect(() =>
  {
    filterHandler();
  },[todos,status]);

  //Functions--
  const filterHandler =() =>
  {
    switch(status)
    {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  //Save local-todos
  const saveLocalTodos = () =>
  {      localStorage.setItem("todos",JSON.stringify(todos));
    }

  const getLocalTodos =() =>
  {
    if(localStorage.getItems("todos") === null)
    {
      localStorage.setItem("todos",JSON.stringify( []))
    }
    else
    {
      localStorage.setItem("todos",JSON.stringify(todos))
    }
  }

  return (
    <div className="App">
      <Header/>
      <Form inputText={inputText}
            setInputText={setInputText}
             todos={todos}
             setTodos={setTodos}
             setStatus={setStatus} 
             />
      <TodoList todos={todos}
                filteredTodos={filteredTodos}
                setTodos={setTodos}                  
                />
    </div>
  );
}

export default App;
