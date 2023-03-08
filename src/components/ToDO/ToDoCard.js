import React, { useEffect } from 'react';
import TodoList from './TodoList';
import { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todo';

function ToDoCard(props) {
  const [ToDo, setToDo] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedToDos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedToDos) setToDo(storedToDos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(ToDo));
  }, [ToDo]);

  function toggleToDo(id) {
    const newToDo = [...ToDo];
    const ToDos = newToDo.find((ToDos) => ToDos.id === id);

    ToDos.complete = !newToDo.complete;
    setToDo(newToDo);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setToDo((prevTodo) => {
      return [...prevTodo, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  return (
    <div className="tile is-parent">
      <article className="tile is-child box">
        <p className="title">To Do List</p>
        <div className="content">
          <TodoList ToDo={ToDo} toggleToDo={toggleToDo} />
          <input ref={todoNameRef} type="text" className="input is-primary" />
          <button onClick={handleAddTodo} className="button mt-3">
            Add
          </button>
          <button className="button mt-3 ml-3">Delete</button>
          <p className="pt-3">Uncompleted: {ToDo.length}</p>
        </div>
      </article>
    </div>
  );
}

export default ToDoCard;
