import React from "react";
import deleteIcon from "../assets/delete.jpg";

export default function Todo(props) {
  return (
    <li>
      <div className="to-do">
        <input
          type="checkbox"
          id={props.id}
          defaultChecked={props.completed}
          className="checkbox"
          onChange={() => props.handleCompleted(props.id)}
        />
        <label
          htmlFor={props.id}
          style={
            props.completed
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {props.name}
        </label>
        {props.completed && (
          <img
            src={deleteIcon}
            className="delete-icon"
            onClick={() => props.deleteTodo(props.id)}
          ></img>
        )}
      </div>
    </li>
  );
}
