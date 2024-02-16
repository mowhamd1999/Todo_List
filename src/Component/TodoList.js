import './TodoList.css'
import Todo from './Todo'
import React, { useState } from 'react'
export default function Todolist() {
    const [todos, settodos] = useState([])
    const [todoTitle, setTodotitle] = useState('')
    const [status, setstatus] = useState('all')
    const inputHandler = (event) => {
        setTodotitle(event.target.value)
    }
    const buttonHandler = () => {
        let newtodo = {
            id: todos.length + 1,
            title: todoTitle,
            completed: false,
        }
        if (todoTitle !== "") {
            settodos(prevState => {
                return [...prevState, newtodo]
            })
            setTodotitle('')
        }
    }
    const removeTodo = (todoId) => {
        let newTodos = todos.filter(todo => {
            return todo.id !== todoId
        })
        settodos(newTodos)
    }
    const editTodo = (todoId) => {
        let completeTodo = [...todos]
        completeTodo.forEach(todo => {
            if (todo.id === todoId) {
                todo.completed = !todo.completed
            }
        })
        settodos(completeTodo)
    }
    const statusHandler = (event) => {
        setstatus(event.target.value)
    }
    return (
        <div>
            <div className='Header'>
                <h2>Mohammad TodoList 🫴🏻❤️</h2>
            </div>
            <div id="todo-container">
                <div className='input'>
                    <input type="text" id="todo-input" placeholder="Put It"
                        onChange={inputHandler} value={todoTitle}></input>
                    <button className="todo_btn" onClick={buttonHandler}>+</button>
                    <select id="filter" onChange={statusHandler}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">unCompleted</option>
                    </select>
                </div>
                {
                    status === "uncompleted" && todos.filter(todo => !todo.completed).map((todo) => (
                        <Todo key={todo.id} {...todo} onRemove={() => removeTodo(todo.id)} onEdit={() => editTodo(todo.id)}></Todo>
                    ))
                }
                {
                    status === "completed" && todos.filter(todo => todo.completed).map((todo) => (
                        <Todo key={todo.id} {...todo} onRemove={() => removeTodo(todo.id)} onEdit={() => editTodo(todo.id)}></Todo>
                    ))
                }
                {status === "all" && todos.map((todo) => (
                    <Todo key={todo.id} {...todo} onRemove={() => removeTodo(todo.id)} onEdit={() => editTodo(todo.id)}></Todo>
                ))}
            </div>
        </div>
    )
}
