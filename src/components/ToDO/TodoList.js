import React from 'react';
import Todo from './ToDo/ToDo';

function TodoList({ ToDo, toggleToDo }) {
  return ToDo.map((todo) => {
    return <Todo key={todo.id} toggleTodo={toggleToDo} todo={todo} />;
  });
}

export default TodoList;
