import "./Todo.css";
import React, { useState } from "react";
export default function Todo(props) {
  const [todoId] = useState(null);
  const addCompleted = (id) => {
    props.onEdit(id);
  };
  const removedClickhandler = (id) => {
    props.onRemove(id);
  };
  return (
    <div>
      <div>
        {props.length !== 0 && (
          <ul className={`todo-list ${props.completed ? "completed" : ""}`}>
            <p>{props.title}</p>
            <button
              className="Completed_btn"
              onClick={() => addCompleted(todoId)}
              style={{ marginLeft: 50 }}
            >
              +
            </button>
            <button
              className="trash_btn"
              onClick={() => removedClickhandler(todoId)}
            >
              -
            </button>
          </ul>
        )}
      </div>
    </div>
  );
}
