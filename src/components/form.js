import React from 'react';

const Form = ({ textInput, setInputText, todos, setTodos, setFilter }) => {

    const inputTextHandler = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {
            text: textInput, 
            completed: false, 
            id: Math.random() * 1000
        }]);
        setInputText("");
    };

    const filterHandler = (e) => {
        // console.log(e.target.value);
        setFilter(e.target.value);
    };

    return (
        <form>
            <input onChange={inputTextHandler} value={textInput} type="text" className="todo-input"/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={filterHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;