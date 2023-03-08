import React, { useRef } from 'react';

function TodoList({ ToDo, toggleToDo }) {
  const todoIteam = useRef();
  function handleToDoClick(ToDo) {
    toggleToDo(ToDo.id);
  }

  return (
    <div className="pb-5">
      <ul>
        {ToDo.map((ToDos) => (
          <li ref={todoIteam} key={ToDos.id}>
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
