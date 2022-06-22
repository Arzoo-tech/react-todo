import React from "react";

const Form = (props) =>
{
    //before return,we can write our javascript code
    const inputTextHandler=(e) =>
    {
        //props.setInputText(e.target.value);88y
        props.setInputText(e.target.value);

    };
    const submitTodoHandler =(event) =>
    {
        event.preventDefault();
        // props.setTodos([
        //     ...props.todos,
        //     {text: props.inputText,completed:false,id:Math.random()*1000}, 
        // ])
        props.setTodos([
            //???Why do we use spread operator
            ...props.todos,
            {text: props.inputText,completed:false,id:Math.random()*1000}, 
        ])
        
        
    };
    const statusHandler =(e) =>
    {
        //props.setStatus(e.target.value);
    };
    return(
    <form>
        <input onChange={inputTextHandler} type="text" className="todo-input"/>
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
            <i className="fa-solid fa-plus"></i>                
        </button>
        <div onClick={submitTodoHandler}  className="select">
            <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
);

};
export default Form;