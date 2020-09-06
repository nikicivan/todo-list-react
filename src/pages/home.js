import React, { useState, useEffect } from 'react';
import Form from '../components/form';
import TodoList from '../components/todoList';

const HomePage = (props) => {

    const [textInput, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('All');
    const [filteredTodos, setFilteredTodos] = useState([]);

    const filterHandler = () => {
        switch(filter) {
            case 'completed': 
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };

    const saveLocalStorage = () => {        
        localStorage.setItem('todos', JSON.stringify(todos));        
    };

    const getLocalStorage = () => {
        if (!localStorage.getItem('todos')) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'));
            setTodos(todoLocal);
        }
    };

    useEffect(() => {
        getLocalStorage();
    }, [])

    useEffect(() => {
        filterHandler();
        saveLocalStorage();
        //eslint-disable-next-line
    }, [todos, filter]);

    return (
        <>
        <header>
            <h1>Ivan's Todo list</h1>
        </header>
        <Form 
            todos={todos} 
            setTodos={setTodos} 
            textInput={textInput} 
            setInputText={setInputText} 
            setFilter={setFilter}            
        />
        <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
        </>
    )
};

export default HomePage;