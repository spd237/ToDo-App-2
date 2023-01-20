import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Todo from "./Components/Todo";
import FilterButton from "./Components/FilterButton";
import { nanoid } from "nanoid";
import data from "./data";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
  const [todos, setTodos] = useState(data);
  const [filter, setFilter] = useState("All");

  function addTask(name) {
    const newTodo = { id: `todo-${nanoid()}`, name: name, completed: false };
    setTodos([...todos, newTodo]);
  }

  function handleCompleted(id) {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function deleteTodo(id) {
    const remainingTodos = todos.filter((todo) => id !== todo.id);
    setTodos(remainingTodos);
  }

  function deleteAllCompleted() {
    const remainingTodos = todos.filter((todo) => !todo.completed);
    setTodos(remainingTodos);
  }

  const filterButtons = FILTER_NAMES.map((name) => {
    return (
      <FilterButton
        key={name}
        name={name}
        setFilter={setFilter}
        isPressed={name === filter}
      />
    );
  });

  const todoElements = todos.filter(FILTER_MAP[filter]).map((todo) => {
    return (
      <Todo
        key={todo.id}
        id={todo.id}
        name={todo.name}
        completed={todo.completed}
        handleCompleted={handleCompleted}
        deleteTodo={deleteTodo}
      />
    );
  });

  return (
    <main className="container">
      <h1 className="header">#todo</h1>
      <div className="filter">{filterButtons}</div>
      <Form addTask={addTask} />
      <ul className="to-dos">{todoElements}</ul>
      {filter === "Completed" && (
        <button className="delete-all" onClick={deleteAllCompleted}>
          delete all
        </button>
      )}
    </main>
  );
}

export default App;
