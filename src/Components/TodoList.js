import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
    return (
        <div className="todo-container">
        <ul className="todo-list">
        {/* for every todo */}
        {
            props.filteredTodos.map((todo)=>
            (
                 <Todo text={todo.text}
                       key={todo.id} 
                       todo={todo}
                       todos={props.todos}
                       setTodos= {props.setTodos}/>
            ))
        }
        </ul>
    </div>
    );
  }
  

