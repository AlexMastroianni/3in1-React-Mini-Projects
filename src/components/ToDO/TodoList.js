import React from 'react';

function TodoList({ ToDo, toggleToDo }) {
  function handleToDoClick(ToDo) {
    toggleToDo(ToDo.id);
  }

  return (
    <div className="pb-5">
      <ul>
        {ToDo.map((ToDos) => (
          <li key={ToDos.id}>
            {ToDos.name}
            <input
              type="checkbox"
              checked={ToDo.complete}
              onChange={handleToDoClick}
              className="checkbox"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
