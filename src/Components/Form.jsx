import React from "react";
import { useState } from "react";

export default function Form(props) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    {
      name && props.addTask(name);
    }
    setName(""); //clearing input after submit
  }

  function handleInput(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-items">
        <label>
          <input
            type="text"
            name="input-todo"
            id="to-do-inp"
            placeholder="add details"
            value={name}
            onChange={handleInput}
          />
        </label>
        <button className="add-to-do">Add</button>
      </div>
    </form>
  );
}
