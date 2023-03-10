import React, { useEffect } from 'react';
import TodoList from './TodoList';
import { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todo';

function ToDoCard() {
  const [ToDo, setToDo] = useState([]);
  const todoNameRef = useRef();
  console.log(ToDo);

  useEffect(() => {
    const storedToDos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedToDos) setToDo(storedToDos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(ToDo));
  }, [ToDo]);

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setToDo((prevTodo) => {
      return [...prevTodo, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
    console.log(ToDo);
  }

  function toggleToDo(id) {
    const newToDos = [...ToDo];
    const todo = newToDos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setToDo(newToDos);
  }

  function handleClearToDo() {
    const newToDo = ToDo.filter((ToDo) => !ToDo.complete);
    setToDo(newToDo);
  }

  return (
    <div className="tile is-parent">
      <article className="tile is-child box">
        <p className="title">To Do List</p>
        <div className="content p-3">
          <TodoList ToDo={ToDo} toggleToDo={toggleToDo} />
          <input ref={todoNameRef} type="text" className="input is-primary" />
          <button onClick={handleAddTodo} className="button mt-3">
            Add
          </button>
          <button onClick={handleClearToDo} className="button mt-3 ml-3">
            Delete
          </button>
          <p className="pt-3">Uncompleted: {ToDo.length}</p>
        </div>
      </article>
    </div>
  );
}

export default ToDoCard;
