import React from 'react';

export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <div lassName="p-3">
      <label className="p-3">
        <input
          className="checkbox pl-2"
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        {'    '}
        {todo.name}
      </label>
    </div>
  );
}
