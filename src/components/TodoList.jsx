import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const TodoList = () => {
    let [todos, setTodos] = useState([{task: "Task One", id: uuidv4(), idDone: false}]);
    let [newTodo, setNewTodo] = useState("");


    const addNewTask = (e) => {
        e.preventDefault();
        setTodos((preTodos) => {
            return [...preTodos, {task: newTodo, id: uuidv4(), isDone: false}];
        })
        setNewTodo("")
    }

    const updateTaskValue = (e) => {
       setNewTodo(e.target.value)
    }


    let deleteTodo = (id) => {
        // console.log("Task deleted", id);
       setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));

    }

    let uppeCaseAll = () => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
             return {
            ...todo,
            task: todo.task.toUpperCase(),
        };
        })
    ));
    }



    let uppeCaseOne = (id) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
        if(todo.id == id) {
            return {
                ...todo,
                task: todo.task.toUpperCase(),
            };
        }else {
            return todo;
        }
           
        })
    ));
    }
    let markAsDone = (id) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
        if(todo.id == id) {
            return {
                ...todo,
                isDone: true,
            };
        }else {
            return todo;
        }
           
        })
    ));
    }


    let markAsDoneAll = () => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
             return {
            ...todo,
            isDone: true,
        };
        })
    ));
    }

    return (
        <div>
            <h1>TodoList</h1>

            <form action="">
                <input type="text" 
                name="name" 
                id="" 
                placeholder='Add Task' 
                value={newTodo} 
                onChange={updateTaskValue}/>
                <br />
                <br />
                <button onClick={addNewTask}>Add Task</button>
            </form>
            <br />
            <hr />
            <h4>Todo List</h4>
            <ul>
                {todos.map((todo) => (

                    <li key={todo.id}>
                    <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>
                    {" "}
                    {todo.task}</span> &nbsp;&nbsp;
                    <span onClick={() => deleteTodo(todo.id)}>Delete</span>
                    <span onClick={() => markAsDone(todo.id)}>Task Done</span>
                    </li>

                ))}
            </ul>

            <button onClick={markAsDoneAll}>All UpperCase</button>
        </div>
    )
}

export default TodoList;