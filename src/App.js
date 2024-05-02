import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState(["task1", "task2"]);

  const [input, setInput] = useState("");

  function addTodo() {
    if (input.trim().length === 0) {
      alert("Input cannot be empty");
    } else {
      setTodo([...todo, input]);
      setInput("");
    }
  }
  return (
    <div className="main">
      <div className="todo-div">
        <h2>My Todos:</h2>
        {todo.map((item, i) => (
          <div className="flex">
            <input type="checkbox" />
            <p key={i}>{item}</p>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          required
          value={input}
          placeholder="new task"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add todo</button>
      </div>
    </div>
  );
};

export default App;
